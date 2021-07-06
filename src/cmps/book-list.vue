<template>
  <ul class="book-list clean-list flex wrap justify-center">
    <li  v-for="book in books" :key="book.id">
    <book-preview :book="book" @remove="$emit('remove', $event)">
      <template #actions>
        <div class="actions flex">
          <button @click="$emit('remove', book.id)"><img class="icon" src="../assets/icons/delete.png" alt=""></button>
          <!-- <router-link :to="`/book/${book.id}`"><img class="icon" src="../assets/icons/plus.png" alt=""></router-link> -->
          <router-link :to="`/book/edit/${book.id}`"><img class="icon" src="../assets/icons/edit.png" alt=""></router-link>
        </div>
      </template>
    </book-preview>
    </li>
  </ul>
</template> 
<script>
import bookPreview from "@/cmps/book-preview";

export default {
  components: {
    bookPreview,
  },
  props: {
    books: Array,
  },
};
</script>

