<template>
  <div id="app">
    <HcButton :round="false" type="primary" :plain="false">aaa</HcButton>
    <hc-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
    >
    </hc-alert>
    <hc-aside>
      <p>123231</p>
    </hc-aside>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
