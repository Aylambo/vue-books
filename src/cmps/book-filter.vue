<template>
  <section class="book-filter">
      <form>
          <label>Search book:</label>
          <input v-model="filterBy.title" @input="filter" type="text" placeholder="Search By Name" />
          <input v-model="filterBy.fromPrice" @input="filter" type="number" placeholder="Min Price" />
          <input v-model="filterBy.toPrice" @input="filter" type="number" placeholder="Max Price" />
      </form>
  </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: '',
                toPrice: '',
            },
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy)
        }
    }
}
</script>
