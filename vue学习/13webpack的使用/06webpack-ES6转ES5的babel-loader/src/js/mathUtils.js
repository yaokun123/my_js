function add(num1,num2) {
    return num1 + num2;
}

function mul(num1,num2) {
    return num1 * num2;
}


//用commonJS导出模块
module.exports = {
    add,
    mul
};