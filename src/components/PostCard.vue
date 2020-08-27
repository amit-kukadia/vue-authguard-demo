<template>
  <div>
    <div class="card" @click="openPost" :class='{"clickable":isClickable}'>
      <div class="card-header">
        <div class="card-header-title">{{post.title}}</div>
      </div>
      <div class="card-content">{{post.body}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: Object,
    isClickable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    openPost() {
      this.$router.push(`post/${this.post.id}`);
    },
  },
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
</style>