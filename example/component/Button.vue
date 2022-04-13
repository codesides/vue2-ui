<template>
  <div>
    <hc-row>
      <hc-button>默认按钮</hc-button>
      <hc-button type="primary">主要按钮</hc-button>
      <hc-button type="success">成功按钮</hc-button>
      <hc-button type="info">信息按钮</hc-button>
      <hc-button type="warning">警告按钮</hc-button>
      <hc-button type="danger">危险按钮</hc-button>
    </hc-row>

    <hc-row>
      <hc-button plain>朴素按钮</hc-button>
      <hc-button type="primary" plain>主要按钮</hc-button>
      <hc-button type="success" plain>成功按钮</hc-button>
      <hc-button type="info" plain>信息按钮</hc-button>
      <hc-button type="warning" plain>警告按钮</hc-button>
      <hc-button type="danger" plain>危险按钮</hc-button>
    </hc-row>

    <hc-row>
      <hc-button round>圆角按钮</hc-button>
      <hc-button type="primary" round>主要按钮</hc-button>
      <hc-button type="success" round>成功按钮</hc-button>
      <hc-button type="info" round>信息按钮</hc-button>
      <hc-button type="warning" round>警告按钮</hc-button>
      <hc-button type="danger" round>危险按钮</hc-button>
    </hc-row>

    <hc-row>
      <hc-button icon="hc-icon-search" circle></hc-button>
      <hc-button type="primary" icon="hc-icon-edit" circle></hc-button>
      <hc-button type="success" icon="hc-icon-check" circle></hc-button>
      <hc-button type="info" icon="hc-icon-message" circle></hc-button>
      <hc-button type="warning" icon="hc-icon-star-off" circle></hc-button>
      <hc-button type="danger" icon="hc-icon-delete" circle></hc-button>
    </hc-row>
  </div>
</template>

<script>
export default {
  name: "HButton",
  data() {
    return {};
  },
};
</script>
<style scoped></style>
