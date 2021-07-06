<template>
  <section class="app">
    <app-header />
    <router-view />
    <app-footer />
  </section>
</template>


<script>
import bookApp from "@/views/book-app";
import appHeader from "@/cmps/app-header";
import appFooter from "@/cmps/app-footer";
// import {evetBus} from '@/services/event-bus-service.js'

export default {
  components: {
    bookApp,
    appHeader,
    appFooter,
  },
};
</script>
