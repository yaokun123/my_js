export default {
    template:`
    <div>
        <h2>{{message}}</h2>
        <button @click="clickBtn">按钮</button>
        <h2>{{name}}</h2>
    </div>
    `,
    methods:{
        clickBtn(){
            console.log('按钮被点击');
        }
    },
    data(){
        return{
            message:'Hello webpack',
            name:'test'
        }
    }

}