   <template>

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
</template>            


<script>
name: 'viewdrafts'
export default {
    
}
</script>


<style>

</style>