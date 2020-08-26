<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title is-centered">Comments</div>
    </div>
    <div class="card-content">
      <article v-for="comment in commentsData" :key="comment.id" class="media content is-medium">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>
                {{comment.name}}
                <span class="subtitle is-6">&lt;{{comment.email}}&gt;</span>
              </strong>
              <br />{{comment.body}}
              <br />
              <small>
                <a>Like</a> ·
                <a>Reply</a> · 3 hrs
              </small>
            </p>
          </div>
        </div>
      </article>
      <article class="media content is-medium">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p class="control">
              <textarea class="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      commentsData: [],
    };
  },
  mounted() {
    console.log(this.postId);
    this.getComments(this.postId)
      .then((data) => {
        console.log(data);
        this.commentsData = data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions(["getComments"]),
  },
};
</script>