var addFn = require('./test1');
var a = 100

console.log(addFn.add(3));

console.log('================');
console.log(addFn.a);


//  commonjs规范
//  该规范最初是用在服务器端的node的，它有四个重要的环境变量为模块化的实现提供支持：`module`、`exports`、`require`、`global`。
//  实际使用时，用`module.exports`定义当前模块对外输出的接口（不推荐直接用`exports`），用`require`加载模块（同步）。

//  exports 是对 module.exports 的引用。比如我们可以认为在一个模块的顶部有这句代码：   exports = module.exports所以，我们不能直接给exports赋值

//注意：因为module.exports本身就是一个对象，所以，我们在导出时可以使用
//module.exports = {foo: 'bar'} //true
//module.exports.foo = 'bar' //true。


//但是, exports 是 module.exports 的一个引用，或者理解为exports是一个指针，exports指向module.exports，这样，我们就只能使用 exports.foo = 'bar' 的方式，而不能使用
//
// exports = {foo: 'bar'} //error 这种方式是错误的，相当于重新定义了exports