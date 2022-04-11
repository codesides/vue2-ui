<template>
  <i :class="'hc-icon-' + name"></i>
</template>

<script>
export default {
  name: "HcIcon",

  props: {
    name: String,
  },
};
</script>
