<template>
  <div class="review-modal">
    <section class="review-add">
      <div @click="closeReview" class="close-review">X</div>
      <h2>Add Your Review</h2>
      <form
        class="add-form flex column align-center"
        @submit.prevent="addReview"
      >
        <input
          v-model="review.reader"
          type="text"
          ref="input"
          placeholder="Your name please"
        />
        <input v-model="review.readDate" type="date" />
        <textarea
          v-model="review.description"
          name="description"
          cols="30"
          rows="10"
        ></textarea>
        <star-rating :increment="0.5" v-model="review.rate"></star-rating>
        <button>Save</button>
      </form>
    </section>
  </div>
</template>

<script>
// import { evetBus } from '@/services/event-bus-service.js'
import reviewService from "@/services/review-service.js";
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    bookId: String,
    loadReviews: Function,
    toggleReviews: Function,
  },
  data() {
    return {
      review: reviewService.getEmptyReview(),
      rate: 0,
    };
  },
  methods: {
    async addReview() {
      this.review.bookId = this.bookId;
      await reviewService.save(this.review);
      this.$emit("loadReviews");
      this.closeReview();
      this.review = { ...reviewService.getEmptyReview() };
    },
    closeReview() {
      this.$emit("toggleReviews");
    },
    // callBus() {
    //     const msg = {
    //         txt: "Review add succesfuly"
    //     }
    //     evetBus.$emit('show-msg', msg)
    // },
  },
};
</script>
