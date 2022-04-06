<template>
    <div class="tag">

  <div v-if="error">
    {{ error }}
  </div>

   <div v-if="posts.length>0" class="layout">
    <div>
      <PostLists :posts="filterPosts"></PostLists>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
   </div>

   <div v-else>
     <Spinner></Spinner>
   </div>

  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import TagCloud from "@/components/TagCloud.vue";
import getPosts from "@/composables/getPosts";
import { computed } from 'vue';
import PostLists from "@/components/PostLists.vue";
    export default {
    components: { Spinner, TagCloud, PostLists },
    props:['tag'],
    setup(props){
        let {posts,error,load} = getPosts();
        load();
        let filterPosts=computed(()=>{
          return posts.value.filter((post)=>{
            return post.tags.includes(props.tag)
          })
        })
        return {posts,error,filterPosts}
    }
}
</script>

<style lang="scss">
.tag{
  max-width: 1200px;
  margin: 0 auto;
}
</style>