var app = new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue!',
        currentPage: 'landingpage',
        articles: [],
    },
    methods: {
        changePage(page) {
            this.currentPage = page
        },
        getArticles() {
            axios.get('http://localhost:3000/article')
                 .then(({ data }) => {
                     console.log(data)
                     this.articles = data
                 })
                 .catch(err => {
                     console.log(err)
                 })
        }
    },
    created() {
        this.getArticles()
    }
})