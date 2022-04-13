<template>
  <div id="app">
    <Button />
    <Alert />
    <Layout />
    <Icon />
    <!-- <Container /> -->
    <Message />
  </div>
</template>

<script>
import Layout from "./component/Layout";
import Icon from "./component/Icon.vue";
import Button from "./component/Button.vue";
import Alert from "./component/Alert.vue";
import Container from "./component/Container.vue";
import Message from "./component/Message.vue";
export default {
  name: "App",
  components: {
    Layout,
    Icon,
    Button,
    Alert,
    // eslint-disable-next-line vue/no-unused-components
    Container,
    Message,
  },
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
