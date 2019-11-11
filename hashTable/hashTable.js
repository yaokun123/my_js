/**
 * 哈希表的实现原理
 *
 * 1、链地址法（本示例代码展示）
 *
 * 2、开放地址
 *  -》线性探测
 *  -》二次探测
 *  -》再哈希法
 */
var hashTable = function(){
    this.storage =  [];
    this.count = 0;
    this.limit = 7;
};

hashTable.prototype = {
    /**
     * 添加、删除
     * @param key
     * @param value
     */
    'set':function(key,value){
        //1、根据key获取数组下标值
        var index = this.hashFunc(key,this.limit);

        //2、根据下标值取出
        var bucket = this.storage[index];

        //3、判断是否为空
        if(bucket == null){
            bucket = [];
            this.storage[index] = bucket
        }

        //4、判断key在bucket中是否存在，存在为修改，不存在为新加入
        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                tuple[1] = value;
                return;
            }
        }
        bucket.push([key,value]);
        this.count += 1;

        if(this.count>0.75*this.limit){//这个鬼东西叫做填充因子
            var newSize = this.limit*2;
            var newPrime = this.getPrime(newSize);
            this.resize(newPrime);
        }
        return;
    },
    /**
     * 获取
     * @param key
     * @returns {*}
     */
    'get':function (key) {
        //1、根据key获取数组下标值
        var index = this.hashFunc(key,this.limit);

        //2、根据下标值取出
        var bucket = this.storage[index];

        //3、判断是否为空
        if(bucket == null){
            return null
        }

        //4、遍历bucket查找
        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                return tuple[1];
            }
        }
        return null;
    },
    /**
     * 删除
     * @param key
     * @returns {null}
     */
    'del':function(key){
        //1、根据key获取数组下标值
        var index = this.hashFunc(key,this.limit);

        //2、根据下标值取出
        var bucket = this.storage[index];

        //3、判断是否为空
        if(bucket == null){
            return null
        }

        //4、遍历bucket查找
        for(var i=0;i<bucket.length;i++){
            var tuple = bucket[i];
            if(tuple[0] == key){
                bucket.splice(i,1);
                this.count -= 1;

                if(this.limit>7 && this.count < this.limit*0.25){
                    var newSize = Math.floor(this.limit/2);
                    var newPrime = this.getPrime(newSize);
                    this.resize(newPrime);
                }
                return;
            }
        }
        return null;
    },
    /**
     * 长度
     * @returns {number}
     */
    'length':function(){
        return this.count;
    },
    /**
     * 判断是否为空
     * @returns {boolean}
     */
    'isEmpty':function(){
        return this.count == 0;
    },
    /**
     * 根据字符串获取索引下标
     * @param key
     * @param size
     * @returns {number}
     */
    'hashFunc':function(key,size){
        var hashCode = 0;

        for(var i=0;i<key.length;i++){
            hashCode = 37*hashCode + key.charCodeAt(i)
        }

        return hashCode%size;
    },
    /**
     * 判断是否是一个质数
     * @param num
     * @returns {boolean}
     */
    'isPrime':function(num){
        var temp = parseInt(Math.sqrt(num));
        for(var i=2;i<=temp;i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    },
    /**
     * 获取一个质数
     * @param num
     * @returns {*}
     */
    'getPrime':function(num){//哈希表在扩容的时候最好保证数组的长度是一个质数，这样里面的元素能分布的均匀一点
        while (!this.isPrime(num)) {
            num+=1;
        }
        return num;
    },
    /**
     * 哈希表的扩容
     * @param newPrime
     */
    'resize':function(newPrime){
        var oldData = this.storage;

        this.storage = [];
        this.count = 0;
        this.limit = newPrime;

        for(var i=0;i<oldData.length;i++){
            if(oldData[i] == null){
                continue;
            }

            for(var j=0;j<oldData[i].length;j++){
                this.set(oldData[i][j][0],oldData[i][j][1])
            }
        }
    },
    'getLimit':function(){
        return this.limit;
    }
};


//测试
var hash = new hashTable();
hash.set('abc','1111');
hash.set('cba','2222');
hash.set('nba','3333');
hash.set('mba','4444');
hash.set('abc1','5555');
hash.set('abc2','6666');

console.log(hash.getLimit());
console.log(hash.get('mba'));


console.log('======');