function Promise(executor) {
    //同步调用【执行器函数】
    this.promiseState = 'pending';
    this.promiseResult = null;
    const self = this;

    function resolve(data){
        //1、修改对象状态(promiseState)
        self.promiseState = 'fulfilled';

        //2、设置对象结果值(promiseResult)
        self.promiseResult = data;
    }

    function reject(data){
        //1、修改对象状态(promiseState)
        self.promiseState = 'rejected';

        //2、设置对象结果值(promiseResult)
        self.promiseResult = data;
    }

    executor(resolve,reject)
}

//添加then方法

Promise.prototype.then = function (onResolved,onRejected) {
    
}