<template>
  <div>
    <hc-container>
      <hc-header>Header</hc-header>
      <hc-main>Main</hc-main>
    </hc-container>

    <hc-container>
      <hc-header>Header</hc-header>
      <hc-main>Main</hc-main>
      <hc-footer>Footer</hc-footer>
    </hc-container>

    <hc-container>
      <hc-aside width="200px">Aside</hc-aside>
      <hc-main>Main</hc-main>
    </hc-container>

    <hc-container>
      <hc-header>Header</hc-header>
      <hc-container>
        <hc-aside width="200px">Aside</hc-aside>
        <hc-main>Main</hc-main>
      </hc-container>
    </hc-container>

    <hc-container>
      <hc-header>Header</hc-header>
      <hc-container>
        <hc-aside width="200px">Aside</hc-aside>
        <hc-container>
          <hc-main>Main</hc-main>
          <hc-footer>Footer</hc-footer>
        </hc-container>
      </hc-container>
    </hc-container>

    <hc-container>
      <hc-aside width="200px">Aside</hc-aside>
      <hc-container>
        <hc-header>Header</hc-header>
        <hc-main>Main</hc-main>
      </hc-container>
    </hc-container>

    <hc-container>
      <hc-aside width="200px">Aside</hc-aside>
      <hc-container>
        <hc-header>Header</hc-header>
        <hc-main>Main</hc-main>
        <hc-footer>Footer</hc-footer>
      </hc-container>
    </hc-container>
  </div>
</template>

<script>
export default {
  name: "HContainer",
  data() {
    return {};
  },
};
</script>
<style scoped>
.hc-header,
.hc-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.hc-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.hc-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .hc-container {
  margin-bottom: 40px;
}

.hc-container:nth-child(5) .hc-aside,
.hc-container:nth-child(6) .hc-aside {
  line-height: 260px;
}

.hc-container:nth-child(7) .hc-aside {
  line-height: 320px;
}
</style>
