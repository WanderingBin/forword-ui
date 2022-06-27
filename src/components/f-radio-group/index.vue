<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FRadioGroup",
  provide() {
    return {
      RadioGroup: this,
    };
  },
  props: {
    // provide与inject
    value: null,
  },
};
</script>

<style>
</style>