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
</template>


<script>
name: 'dashboard'
export default {
    data() {
    return {

    };
  },
  props: {
    currentPage : String,
    onDashboard: String
  },
  methods : {
       changePage(page) {
            this.$emit('change-page', page)
        },
        userRegister(){
            axios.post('http://localhost:3000/users/register', {
                username: this.username,
                email: this.email,
                password: this.password
            })
            .then(({data}) => {
                this.currentPage = 'loginform'
            })
            .catch(err => {
                console.log(err)
            })
        },
  }
    
}
</script>


<style>

</style>