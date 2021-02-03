
const app = {
    data() {
        return {
            profilepic: './images/me.jpg',
            firstname: 'Jakkrapop',
            lastname: 'Chivrarerk',
            Position: 'SIT Student',
            Article: 420,
            follower: 32,
            rateing: 5.2
        }
    },
    methods: {
        follow(event) {
            this.follower=Math.floor(Math.random() * 100)
        },
        Ratings(event) {
            return this.rateing = (Math.random() * 10).toFixed(1);
        }
    }

}
Vue.createApp(app).mount('#app')