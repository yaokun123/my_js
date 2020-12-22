function Promise(executor) {
    //同步调用【执行器函数】

    function resolve(data){

    }

    function reject(data){

    }

    executor(resolve,reject)
}

//添加then方法

Promise.prototype.then = function (onResolved,onRejected) {
    
}