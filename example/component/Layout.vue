<template>
  <div>
    <hc-row>
      <hc-col :span="24"
        ><div class="grid-content bg-purple-dark"></div
      ></hc-col>
    </hc-row>
    <hc-row>
      <hc-col :span="12"><div class="grid-content bg-purple"></div></hc-col>
      <hc-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></hc-col>
    </hc-row>
    <hc-row>
      <hc-col :span="8"><div class="grid-content bg-purple"></div></hc-col>
      <hc-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></hc-col>
      <hc-col :span="8"><div class="grid-content bg-purple"></div></hc-col>
    </hc-row>
    <hc-row>
      <hc-col :span="6"><div class="grid-content bg-purple"></div></hc-col>
      <hc-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></hc-col>
      <hc-col :span="6"><div class="grid-content bg-purple"></div></hc-col>
      <hc-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></hc-col>
    </hc-row>
    <hc-row>
      <hc-col :span="4"><div class="grid-content bg-purple"></div></hc-col>
      <hc-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></hc-col>
      <hc-col :span="4"><div class="grid-content bg-purple"></div></hc-col>
      <hc-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></hc-col>
      <hc-col :span="4"><div class="grid-content bg-purple"></div></hc-col>
      <hc-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></hc-col>
    </hc-row>
  </div>
</template>

<script>
export default {
  name: "HLayout",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.hc-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.hc-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
