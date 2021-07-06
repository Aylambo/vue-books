<template>
  <section v-if="book" class="book-details app-main flex column">
    <h2>Book Details</h2>
    <div class="book-info flex">
      <section class="book-info-left">
        <img :src="book.thumbnail" alt="" />
      </section>
      <div class="book-info-center flex column space-between">
        <!-- <button @click="$emit('close')">X</button> -->
        <router-link to="/book">Back To Shop</router-link>
        <p>Title: {{ book.title }}</p>
        <p>Subtitle: {{ book.subtitle }}</p>
        <p>Authors: {{ book.authors.join(" , ") }}</p>

        <p :class="publishedDate">Published At: {{ book.publishedDate }}</p>
        <p>Description: <long-txt :txt="book.description" /></p>
        <p :class="getPageCountTxt">Pages: {{ book.pageCount }},</p>
        <p>Categories: {{ book.categories.join(" , ") }}</p>

        <p>Language: {{ book.language }}</p>
        <p :class="priceColor">
          Price: {{ book.listPrice.amount }} {{ book.listPrice.currencyCode }}
        </p>
        <p :class="onSaleClass" hidden>On Sale</p>
      </div>
      <div class="review-container flex column">
        <button class="btn-add-review" v-if="!isReviewing" @click="toggleAddReview">Add Review</button>
        <add-review
          v-else
          @loadReviews="loadReviews"
          :bookId="book.id"
          @toggleReviews="toggleAddReview"
        />
        <review-list :reviews="reviews" @removeReview="removeReview" />
      </div>
    </div>
  </section>
</template>

<script>
import longTxt from "@/cmps/long-txt";
import bookService from "@/services/book.service.js";
import reviewService from "@/services/review-service.js";
import AddReview from "@/cmps/add-review.vue";
import ReviewList from "@/cmps/review-list.vue";

export default {
  components: {
    longTxt,
    AddReview,
    ReviewList,
  },
  data() {
    return {
      book: null,
      isLongReading: false,
      reviews: [],
      isReviewing: false,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.book = await bookService.getById(id);
    this.loadReviews(); 
  },
  methods: {
    async loadReviews() {
      this.reviews = await reviewService.query(this.book.id);
    },
    toggleAddReview() {
      this.isReviewing = !this.isReviewing;
    },

    async removeReview(id) {
      await reviewService.remove(id);
      this.loadReviews();
    },
  },

  computed: {
    onSaleClass() {
      if (this.book.listPrice.isOnSale) return "sale";
    },
    getPageCountTxt() {
      if (this.book.pageCount < 200 && this.book.pageCount > 100) return;
      if (this.book.pageCount >= 500) return "long";
      if (this.book.pageCount >= 200) return "decent";
      if (this.book.pageCount < 100) return "light";
    },
    priceColor() {
      if (this.book.listPrice.amount > 150) return "red";
      else if (this.book.listPrice.amount < 20) return "green";
    },
    publishedDate() {
      const currYear = new Date().getFullYear();
      // console.log(currYear);
      if (currYear - this.book.publishedDate >= 10) return "vetren";
      else if (currYear - this.book.publishedDate <= 1) return "new";
    },
  },
  // watch: {
  //   reviews() {
  //     console.log("Reviews changed - loading...", this.reviews);
  //   },
  // },
};
</script>




 