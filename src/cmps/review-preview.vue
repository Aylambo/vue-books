<template>
  <section class="review-preview">
    <p>Reader: {{ review.reader }}</p>
    <p>Read Date: {{ review.readDate }}</p>
    <p>Description: {{ review.description }}</p>
    <p>
      <star-rating
        v-model="review.rate"
        :read-only="true"
        :show-rating="false"
      ></star-rating>
    </p>
    <button @click="$emit('removeReview', review.id)">
      <img class="icon" src="../assets/icons/delete.png" alt="" />
    </button>
  </section>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    review: Object,
  },
};
</script>

