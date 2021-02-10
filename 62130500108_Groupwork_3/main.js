const app = {
    data() {
        return {
            pics:[ 
                {src:"./images/chill.jpg",text:"Good View Resort",like: false},
                {src:"./images/cool.jpg",text:"Kamp Residence",like: false},
                {src:"./images/island.jpg",text:"Ban Kang Mung",like: false},
                {src:"./images/mounten.jpg",text:"Jirung Health Village",like: false}
            ]
        }
    },
    methods: {
        togglelike(index){
            this.pics[index].like = !this.pics[index].like
        }
    },
    computed: {
        countpic(){
            return this.pics.length
        },
        countlike(){
            return this.pics.filter( t => t.like ).length
        }
    }
}

Vue.createApp(app).mount('#app')