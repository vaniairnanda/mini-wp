<template>
    <div v-if="currentPage === 'dashboard'" id="dashelement" class="flex mb-4">
                <div class="w-1/4 w-15">
                    <div class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                        <img src="https://image.freepik.com/free-photo/gray-texture-background_24972-673.jpg" class="w-full" />
                        <div class="flex justify-center -mt-8">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnoJRCFSc902EEBMV4azWHtaMCnkzAXqblGpxr_8eBwxSbsnVZ5w&s" class="rounded-full border-solid border-white border-2 -mt-3">		
                        </div>
                        <div class="text-center px-3 pb-6 pt-2">
                            <h3 class="text-black text-sm bold font-sans">User Name</h3>
                        <p class="mt-2 font-sans font-light text-grey-dark">Hello, i'm from the other side!</p>
                        </div>
                    <div>
                        <ul class="list">
                          <li @click="onDashboard = 'createArticle'">
                            <a class="block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4">Create Article</a>
                          </li>
                          <li @click="onDashboard = 'viewDrafts'">
                            <a class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">My Drafts</a>
                          </li>
                          <li @click="onDashboard = 'viewPublished'">
                            <a href="#" class="block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4">My Published Articles</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id='viewDrafts' v-if="onDashboard === 'viewDrafts'" class="w-1/2 flex flex-wrap p-8 mt-6 lg:mt-0 rounded shadow bg-white">
              <div v-for="draft in drafts" :key="draft._id" class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://media.newyorker.com/photos/5e18e202b64dda0008cd2360/4:3/w_300,c_limit/200120_r35365web-tout.jpg" alt="Trump">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{draft.category}}</div>
                  <p class="text-gray-700 text-base">
                    {{draft.title}}
                  </p>
                  <p class="text-gray-700 text-base"> by {{draft.userId.username}}</p>
                </div>
            </div>
            </div>

            <div id='viewPublished' v-if="onDashboard === 'viewPublished'" class="w-1/2 flex flex-wrap p-8 mt-6 lg:mt-0 rounded shadow bg-white">
              <div v-for="article in articles" :key="article._id" class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src="https://media.newyorker.com/photos/5e18e202b64dda0008cd2360/4:3/w_300,c_limit/200120_r35365web-tout.jpg" alt="Trump">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{article.category}}</div>
                  <p class="text-gray-700 text-base">
                    {{article.title}}
                  </p>
                  <p class="text-gray-700 text-base"> by {{article.userId.username}}</p>
                  <p class="text-gray-700 text-base"> created at: {{article.created_at}}</p>
                </div>
              </div>
            </div>

            <div id='createArticle' v-if="onDashboard === 'createArticle'" class="w-1/2 flex p-8 mt-6 lg:mt-0 rounded shadow bg-white">
              <div class="w-full">
                  <form @submit.prevent="postArticle">
                        <div class="w-1/3">
                            <label class="block text-gray-600 font-bold bg:grey mb-3 md:mb-0 pr-4" for="my-textfield">
                                Title
                            </label>
                        </div>
                        <div class="w-2/3">
                            <input v-model="title" class="form-input block w-full focus:bg-gray-200" id="title" type="text" value="" placeholder="Your title goes here.........">
                            <p class="py-2 text-sm text-gray-600">Title</p>
                        </div>
              

                    <div class="w-full flex mb-6">
                        <div class="w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                Category
                            </label>
                        </div>
                        <div class="w-1/3">
                            <select v-model="category" name="category" class="form-select block w-full focus:bg-white" id="my-select">
                                <option value="food">Food</option>
                                <option value="health">Health</option>
                                <option value="beauty">Beauty</option>
                                <option value="others">Others</option>
                            </select>
                            

                            <p class="py-2 text-sm text-gray-600">Pick your article category</p>
                        </div>
                    </div>

                    <div class="w-3/4 flex mb-6">
                        <div class="w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Content
                            </label>
                        </div>
                        <div class="w-2/3">
                            <textarea v-model="content" class="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="30"></textarea>
                            <p class="py-2 text-sm text-gray-600">add your article here</p>
                        </div>
                    </div>

                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                            <input type="submit" class="shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Save
                          </input>
                        </div>
                      </div>
                  </form>
            </div>
          </div>
                <div class="w-1/3">
                        <div class="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
                                <div class="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
                                    <a href="#" class="block group hover:bg-blue p-4 border-b">
                                        <p class="font-bold text-lg mb-1 text-black group-hover:text-white">Blog Title</p>
                                        <p class="text-grey-darker mb-2 group-hover:text-white">Summary of blog</p>
                                    </a>
                                    <a href="#" class="block group hover:bg-blue p-4">
                                        <p class="font-bold text-lg mb-1 text-black group-hover:text-white">Blog Title</p>
                                        <p class="text-grey-darker mb-2 group-hover:text-white">Summary of blog</p>
                                    </a>
                                </div>
                        </div>
                </div> 

    </div>
</template>

<script>
import viewDrafts from "./view-drafts"
name: 'dashboard'
export default {
    data() {
    return {
      onDashboard : 'createArticles',
      articles: [],
      drafts: [],
      title: '',
      content: '', 
      category: ''
    };
  },
  props: {
    currentPage : String,
  },
  components: {
    viewDrafts
  },
  methods : {
       changePage(page) {
            this.$emit('change-page', page)
        },
        postArticle(){
            let access_token = localStorage.getItem('access_token')
            console.log('masuk post article')
            axios.post('http://localhost:3000/articles', {
                title: this.title,
                category: this.category,
                content: this.content,
            },{
                headers: { 
                    access_token: access_token
                }
            })
            .then(result => {
                this.title = ''
                this.content = ''
                this.$emit('change-page', 'dashboard')
            })
            .catch(err => {
                console.log(err)
            })
            
        },
        getDrafts() {
            axios.get('http://localhost:3000/articles/drafts', {
                headers: localStorage.getItem('access_token')
            })
            .then(({ data }) => {
                console.log(data)
                this.drafts = data.result
            })
            .catch(err => {
                console.log(err)
            })
        },
        getArticles() {
            axios.get('http://localhost:3000/articles', {
                headers: localStorage.getItem('access_token')
            })
                 .then(({ data }) => {
                     console.log(data)
                     this.articles = data.result
                 })
                 .catch(err => {
                     console.log(err)
                 })
        },

        
  },
  created : function() {
    this.getArticles()
    this.getDrafts()
  }
    
}
</script>


<style>

</style>