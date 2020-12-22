function Promise(executor) {
    //同步调用【执行器函数】
    this.promiseState = 'pending';
    this.promiseResult = null;
    this.callbacks = [];
    const self = this;

    function resolve(data){
        if(self.promiseState !== 'pending') return;
        //1、修改对象状态(promiseState)
        self.promiseState = 'fulfilled';

        //2、设置对象结果值(promiseResult)
        self.promiseResult = data;

        self.callbacks.forEach(item => {
            item.onResolved(data)
        })
    }

    function reject(data){
        if(self.promiseState !== 'pending') return;
        //1、修改对象状态(promiseState)
        self.promiseState = 'rejected';

        //2、设置对象结果值(promiseResult)
        self.promiseResult = data;

        self.callbacks.forEach(item => {
            item.onRejected(data)
        })
    }

    try{
        executor(resolve,reject)
    }catch (e) {
        reject(e)
    }
    
}

//添加then方法

Promise.prototype.then = function (onResolved,onRejected) {

    return new Promise((resolve,reject)=>{

        //封装函数
        var _that = this;
        function callback(call_type){
            try{
                let result = call_type(_that.promiseResult);
                if(result instanceof Promise){
                    result.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    })
                }else{
                    resolve(result);
                }
            }catch (e) {
                reject(e);
            }
        }

        if(this.promiseState === 'fulfilled'){
            callback(onResolved)

        }

        if(this.promiseState === 'rejected'){
            callback(onRejected)

        }

        if(this.promiseState === 'pending'){
            //保存回调函数
            this.callbacks.push({
                onResolved:() => {
                    callback(onResolved)

                },
                onRejected:()=>{
                    callback(onRejected)
                }
            })
        }
    });

};