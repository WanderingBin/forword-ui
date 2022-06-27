<template>
  <div class="f-form-item">
    <label
      class="f-form-item__label"
      :style="{ width: this.Form.labelWidth }"
      >{{ label }}</label
    >
    <div class="f-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FFormItem",
  inject: ["Form"],
  props: {
    label: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.f-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: "";
  }
  .f-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .f-form-item__content {
    line-height: 40px;
    overflow: hidden;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: "";
    }
  }
}
</style>