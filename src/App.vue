<template>
  <div id="app">
    <QuotePage />
  </div>
</template>

<script>
import QuotePage from "@/views/QuotePage";
export default {
  name: "App",
  components: {
    QuotePage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@700&family=Indie+Flower&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
