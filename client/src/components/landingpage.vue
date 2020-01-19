<template>
<div v-if="currentPage === 'landingpage'"> 
 <div id="headline" class="container flex mb-4">
        <div class="w-full h-12 text-center text-black pb-16">
            <h1 class="font-sans text-lg font-regular">Find a little pause.</h1>
            <h2 class="font-thin text-lg tracking-wide mt-2 mb-4">Discover your inner writer. Join +50,000 bloggers in our platform</h2>
        </div>
</div>

<div id="overview" class="container flex mb-4">
            <div class="col-1 w-1/3 h-12">
              <h1  class="font-sans text-lg font-regular">Blog Highlights</h1></div>
            <div class="col-2 w-1/3 h-12">
              <input class="w-full h-12 px-3 rounded mb-4 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg" type="search" placeholder="Search...">
            </div>
            <div class="col-3 w-1/3 h-12">
                    
            </div>
</div>

<div class="flex mb-4">
            <div class="w-1/4 h-12">
              <ul>
                <li><a href="#">Self-Improvement</a></li>
                <li><a href="#">Beauty</a></li>
                <li><a href="#">Health & Mindfulness</a></li>
              </ul></div>

              <div class="w-3/4 h-12 flex flex-wrap">
                <div v-for="article in articles" :key="article._id" class="w-1/2 max-w-sm rounded overflow-hidden shadow-lg">
                    <img class="w-full" src="https://media.newyorker.com/photos/5e18e202b64dda0008cd2360/4:3/w_300,c_limit/200120_r35365web-tout.jpg" alt="Trump">
                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">{{article.category}}</div>
                      <p class="text-gray-700 text-base">
                        {{article.title}}
                      </p>
                    </div>
                </div>
              </div>
     </div>

</div>
    
</template>



<script>
name: 'landingpage'
export default {
     data() {
    return {
    };
  },
  props: {
    currentPage : String
  },
  methods : {
       changePage(page) {
            this.$emit('change-page', page)
        }
  }
}
</script>


<style>

</style>