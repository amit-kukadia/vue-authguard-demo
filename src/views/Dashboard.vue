<template>
  <div class="is-size-4">
    <div class="content is-medium is-flex">
      <h2>Recent posts</h2>
      <b-button
        rounded
        outlined
        type="is-primary"
        class="ml-5"
        @click="isModalActive = true"
      >Add Post</b-button>
    </div>
    <div class="columns is-multiline">
      <div v-for="post in posts" :key="post.id" class="column is-half">
        <PostCard :post="post" />
      </div>
    </div>

    <b-modal v-model="isModalActive" has-modal-card :can-cancel="false">
      <AddPostForm @postAdded='postAdded' @close='isModalActive = false' />
    </b-modal>

    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import PostCard from "@/components/PostCard.vue";
import AddPostForm from "@/components/AddPostForm.vue";

export default {
  components: {
    PostCard,AddPostForm
  },
  data() {
    return {
      isLoading: true,
      posts: [],
      isModalActive: false,
    };
  },
  mounted() {
    this.getPosts()
      .then((data) => {
        console.log(data);
        this.posts = data.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  },
  methods: {
    ...mapActions(["getPosts"]),
    postAdded(data){
      this.posts.unshift(data)
    }
  },
};
</script>
