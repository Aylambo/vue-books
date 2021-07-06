<template>
  <!-- <router-link :to="`/book/${book.Id}`"> -->
  <router-link :to="`/book/${book.id}`">
    <div class="book-preview flex column align-center justify-center">
      <!-- <slot name="header"></slot> -->

      <div class="book-info">
        <h4>{{ book.title }}</h4>
        <img :src="book.thumbnail" alt="" />
        <p>Price:{{ fixedPrice }}</p>
        <slot name="actions"></slot>
      </div>
      <!-- <slot name="footer"></slot> -->
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    book: Object,
  },
  computed: {
    fixedPrice() {
      const { amount, currencyCode } = this.book.listPrice;
      let fixedPrice = "";
      switch (currencyCode) {
        case "EUR":
          return (fixedPrice = "€" + amount);
        case "USD":
          return (fixedPrice = "$" + amount);
        case "ILS":
          return (fixedPrice = amount + "₪");
      }
    },
  },
};
</script>

