
var app = new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue!',
        currentPage: 'landingpage',
        articles: [],
        email: '',
        password: ''
    },
    methods: {
        changePage(page) {
            this.currentPage = page
        },
        getArticles() {
            axios.get('http://localhost:3000/articles')
                 .then(({ data }) => {
                     console.log(data)
                     this.articles = data
                 })
                 .catch(err => {
                     console.log(err)
                 })
        },
        userLogin() {
            axios.post('http://localhost:3000/users/login', {
                email: this.email,
                password: this.password
            })
                 .then(({data}) => {
                     this.email = ''
                     this.password = ''
                     console.log(data)
                     localStorage.setItem('access_token', data.access_token)
                     this.currentPage = 'dashboard'
                 })
                 .catch(err => {
                     console.log(err)
                 })  
        },
        userLogout() {
            this.currentPage = 'landingpage'
            localStorage.removeItem('access_token')
        }
    },
    created() {
        this.getArticles()
    }
})