<template>
  <section class="long-txt">
    <p>{{txtToShow}}</p>
    <span v-if="txt.length > 100" class="read-less-more" @click="isShown = !isShown">{{btnTxt}}</span>
  </section>
</template>

<script>
export default {
  props: {
    txt: String,
  },

  date() {
    return {
      isShown: false,
    }
  },
  computed: {
    txtToShow() {
      if (this.txt.length < 100) return this.txt
      if (!this.isShown) return this.txt.slice(0, 100)
      else return this.txt
    },
    btnTxt() {
      if (!this.isShown) return '[Read More]'
      else return ['Read Less']
    }

  }
}
</script>
