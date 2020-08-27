<template>
  <form action>
    <div class="modal-card" style="min-width: 400px">
      <header class="modal-card-head">
        <p class="modal-card-title">Add post</p>
        <button type="button" class="delete" @click="$emit('close')" />
      </header>
      <section class="modal-card-body">
        <b-field label="Title">
          <b-input v-model="title" placeholder="Post title" required></b-input>
        </b-field>

        <b-field label="Body">
          <b-input v-model="body" maxlength="200" type="textarea" placeholder="Post Body" required></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot">
        <button class="button" type="button" @click="$emit('close')">Close</button>
        <button @click.prevent="add" class="button is-primary">Add Post</button>
      </footer>
    </div>
    <b-loading :is-full-page="false" v-model="isLoading" :can-cancel="false"></b-loading>

  </form>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      body: "",
      isLoading:false
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    add() {
      this.isLoading = true
      this.addPost({ title: this.title, body: this.body }).then((data) => {
        this.$emit("postAdded",data.data)
        this.$emit("close")
        this.isLoading = false
      }).catch(()=>{
          this.isLoading = false
      })
    },
  },
};
</script>
