<template>
  <header class="hc-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "HcHeader",

  componentName: "HcHeader",

  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>
