<template>
  <div class="f-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FForm",
  provide() {
    return {
      Form: this,
    };
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    labelWidth: {
      type: String,
      default: "80px",
    },
  },
};
</script>

<style>
</style>