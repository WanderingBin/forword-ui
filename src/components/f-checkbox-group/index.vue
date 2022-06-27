<template>
  <div class="f-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FCheckboxGroup",
  props: {
    value: {
      type: Array,
    },
  },
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
};
</script>

<style>
</style>