var a = 5;
var add = function (param) {
    //在这里写需要向外暴露的函数、变量
    return a + param;
};

module.exports = {
    a,
    add
};