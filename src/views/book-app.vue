<template>
  <section class="book-app app-main">
    <book-filter @filtered="setFilter" />
    <section class="book-waka">
    <router-link to="/book/edit">Add a new book</router-link>
    </section>
    <book-list :books="booksToShow" @remove="removeBook" @selected="selectBook" @edited="editBook"/>
  </section>
</template>

    <!-- <div v-if="!selectedBook">  -->
    <!-- </div> -->
    <!-- <book-details v-else :book="selectedBook" @close="selectedBook = null"/> -->
    <!-- <book-edit v-if="editedBook" :book="editedBook" @saved="loadBooks" /> -->

<script>

import bookService from '@/services/book.service.js'

import bookList from "@/cmps/book-list"
import bookFilter from "@/cmps/book-filter"
// import bookDetails from "@/views/book-details"
// import bookEdit from "@/views/book-edit"

export default {
  components: {
    bookService,
    bookList,
    bookFilter,
    // bookDetails,
    // bookEdit,
  },
  data() {
    return {
      books: null,
      filterBy: null,
      // selectedBook: null,
      // editedBook: null,
    };
  },
  created() {
    this.loadBooks()
  },
  methods: {
    async loadBooks() {
      this.books = await bookService.query()
    },
    async removeBook(id) {
      await bookService.remove(id)
      this.loadBooks()
      this.$router.push('/book')
    },
    selectBook(book) {
      // console.log(book)
      this.selectedBook = book;
    },
    editBook(book) {
      console.log(book)
      this.editedBook = book;
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
      // console.log(this.filterBy)
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy) return this.books;
       let { name, fromPrice, toPrice } = this.filterBy;
      toPrice = toPrice ? toPrice : Infinity;
      fromPrice = fromPrice ? fromPrice : 0;
      const regex = new RegExp(this.filterBy.title, 'i');
      const booksToShow = this.books.filter((book) => regex.test(book.title) && 
          book.listPrice.amount >= fromPrice &&
          book.listPrice.amount <= toPrice
      )
      toPrice = null;
      fromPrice = null;
      return booksToShow
    }
  },
};
</script>
