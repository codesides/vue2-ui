<template>
  <div class="wrapper">
    Button - {{ title }}
    <img src="../../icons/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "HcButton",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
@import "../../scss/components/button.scss";
</style>
