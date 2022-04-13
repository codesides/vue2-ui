<template>
  <footer class="hc-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "HcFooter",

  componentName: "HcFooter",

  props: {
    height: {
      type: String,
      default: "60px",
    },
  },
};
</script>
