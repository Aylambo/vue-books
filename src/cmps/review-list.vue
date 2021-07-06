<template>
  <section class="review-list" v-if="reviews">
    <review-preview
      v-for="review in reviews"
      :key="review.id"
      :review="review"
      @removeReview="$emit('removeReview', $event)"
    />
  </section>
</template>

<script>
import ReviewPreview from "@/cmps/review-preview";

export default {
  props: {
    reviews: Array,
    // removeReview: Function,
  },
  components: {
    ReviewPreview,
  },
};
</script>