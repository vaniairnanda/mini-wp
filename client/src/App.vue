<template>
<div> 
  <navbar v-on:change-page="changePage" :currentPage="currentPage"></navbar>
 <landingpage v-on:change-page="changePage" :currentPage="currentPage" ></landingpage>
  <dashboard v-on:change-page="changePage" :currentPage="currentPage"></dashboard>
  <loginform  v-on:change-page="changePage" :currentPage="currentPage"></loginform>
  <signupform v-on:change-page="changePage" :currentPage="currentPage"> </signupform>
</div>
 
</template>

<script>
import navbar from "./components/navbar-component"
import dashboard from "./components/dashboard"
import landingpage from "./components/landingpage"
import loginform from "./components/loginpage"
import signupform from "./components/signupform"
export default {
  data() {
    return {
      message: 'Hello world',
      currentPage: 'landingpage',
      onDashboard: 'createArticle'
    };
  },
  components: {
    navbar,
    dashboard,
    landingpage,
    loginform,
    signupform   
  },
  methods : {
    changePage(page) {
      this.currentPage = page
    }
  },
  created: function(){
    if(localStorage.getItem('access_token')){
        this.currentPage = 'dashboard'
    }
  }
};
</script>


<style scoped>
</style>