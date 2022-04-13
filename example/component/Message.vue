<template>
  <div>
    <hc-button :plain="true" @click="open2">成功</hc-button>
    <hc-button :plain="true" @click="open3">警告</hc-button>
    <hc-button :plain="true" @click="open1">消息</hc-button>
    <hc-button :plain="true" @click="open4">错误</hc-button>
  </div>
</template>

<script>
export default {
  name: "HMessage",
  data() {
    return {};
  },
  methods: {
    open1() {
      try {
        this.$message({
          message: "这是一条消息提示",
          duration: 0,
          showClose: true,
        });
      } catch (error) {
        console.log(error);
      }
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },
  },
};
</script>
<style scoped></style>
