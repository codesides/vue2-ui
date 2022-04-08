<template>
  <div class="wrapper">
    <p class="wrapper__child">Select</p>
  </div>
</template>

<script>
export default {
  name: "HcSelect",
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  width: 200px;
  height: 200px;
  background-color: #ddd;
  &__child {
    color: #f50;
  }
}
</style>
