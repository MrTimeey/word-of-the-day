<template>
  <div class="background-wrapper">
    <div class="background" :style="imageStyle">
      <AdditionalTextFields />
      <WordContainer />
    </div>
  </div>
</template>

<script>
import AdditionalTextFields from "@/components/AdditionalTextFields";
import WordContainer from "@/components/WordContainer";

export default {
  name: "QuotePage",
  components: { AdditionalTextFields, WordContainer },
  data() {
    return {
      image: "https://source.unsplash.com/PyUXxFrYweY/1920x1125",
    };
  },
  computed: {
    imageStyle() {
      return {
        backgroundImage: `url(${this.image})`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.background-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.background {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
