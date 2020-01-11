const app = new Vue({
    el:"#app",
    data:{
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2006-9',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《UNIX编程艺术》',
                date:'2006-2',
                price:59.00,
                count:1
            },
            {
                id:3,
                name:'《编程珠玑》',
                date:'2008-10',
                price:39.00,
                count:1
            },
            {
                id:4,
                name:'《代码大全》',
                date:'2006-3',
                price:128.00,
                count:1
            },
        ]
    },
    methods:{
        getFinalPrice(price){
            return '¥' + price.toFixed(2);
        },
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        removeHandler(index){
            this.books.splice(index,1)
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0;

            //1、普通的for循环
            /*for(let i=0;i<this.books.length;i++){
                totalPrice += this.books[i].price * this.books[i].count;
            }*/

            //2、for in
            /*for(let i in this.books){
                totalPrice += this.books[i].price * this.books[i].count;
            }*/

            //3、for of
            /*for(let item of this.books){
                totalPrice += item.price * item.count;
            }*/

            //4、高阶函数reduce使用
            totalPrice = this.books.reduce(function (pre,n) {
               return pre + n.price * n.count;
            },0);


            return totalPrice;
        }
    }
});