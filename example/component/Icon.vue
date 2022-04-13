<template>
  <div class="content">
    <i class="hc-icon-edit"></i>
    <i class="hc-icon-share"></i>
    <i class="hc-icon-delete"></i>
    <hc-button type="primary" icon="hc-icon-search">搜索</hc-button>
  </div>
</template>

<script>
export default {
  name: "HIcon",
  data() {
    return {};
  },
};
</script>
<style scoped>
.content {
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
}
</style>
