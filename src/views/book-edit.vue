<template>
  <section v-if="bookToEdit" class="book-edit app-main flex column">
    <section class="edit-top flex space-between">
  <h2>{{title}}</h2>
  <router-link to="/book">Back To Shop</router-link>
</section>
  <form @submit.prevent="save" class="add-form flex column">
      <p>Book Title: <input v-model="bookToEdit.title" type="text" placeholder="Title"/> </p>
     <p>Book Categories: <input v-model="bookToEdit.categories" type="text" placeholder="Categories"/> </p>
      <p>Book Price:<input v-model="bookToEdit.listPrice.amount" type="number" placeholder="Price"/></p>
      <!-- <input v-model="bookToEdit.book.listPrice.isOnSale" type="boolean" placeholder="Categories"/> -->
    <button>Save</button>
  </form>
  <!-- <pre>{{bookToEdit}}</pre> -->
  </section>
</template>

<script>
import bookService from "@/services/book.service.js"
export default {
    props: {
    book: Object,
  },
    data() {
        return {
            bookToEdit: null,
        }
    },
    async created() {
      const {id} = this.$route.params
      if (id) {
        this.bookToEdit = await bookService.getById(id)
      } else {
        this.bookToEdit = bookService.getEmptyBook()
      }
    },
    methods: {
        async save() {
            await bookService.save(this.bookToEdit)
            this.$router.push('/book')
        },
    },
    computed: {
      title() {
        return this.$route.params.id ? 'Edit Book' : 'Add Book'
      }
    }
}
</script>

