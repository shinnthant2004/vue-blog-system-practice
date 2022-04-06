<template>
    <div v-for="post in posts" :key="post.id">
       <SinglePost :post="post"></SinglePost>
    </div>
</template>

<script>
import SinglePost from "./SinglePost.vue";
    export default {
    props: ["posts"],
    setup() {
    },
    components: { SinglePost }
}
</script>

<style lang="scss">

</style>