<template>
  <div class="content is-large">
    <PostCard :post="postData" :isClickable = "false" class="mt-4" />
    <CommentsCard :postId="$route.params.id" class="mt-3" />
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>
<script>
import PostCard from "@/components/PostCard";
import CommentsCard from "@/components/CommentsCard";
import { mapActions } from "vuex";
export default {
  components: {
    PostCard,CommentsCard
  },
  data() {
    return {
      postData: {},
      isLoading: true,
    };
  },
  mounted() {
    this.getPost(this.$route.params.id)
      .then((data) => {
        this.postData = data.data;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
  },
  methods: {
    ...mapActions(["getPost"]),
  },
};
</script>