<template>
  <aside class="hc-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: "HcAside",

  componentName: "HcAside",

  props: {
    width: {
      type: String,
      default: "300px",
    },
  },
};
</script>
