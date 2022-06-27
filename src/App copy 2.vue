<template>
  <div id="app">
    <!-- <div class="box"> -->
    <!-- <f-radio label="1" v-model="gender">男</f-radio>
      <f-radio label="0" v-model="gender">女</f-radio>
    </div>
    <f-radio-group v-model="gender">
      <f-radio label="1">男</f-radio>
      <f-radio label="0">女</f-radio>
    </f-radio-group> -->
    <!-- <f-checkbox v-model="active">是否选中</f-checkbox>
    <f-checkbox-group v-model="hobby">
      <f-checkbox label="抽烟"></f-checkbox>
      <f-checkbox label="喝酒"></f-checkbox>
      <f-checkbox label="烫头"></f-checkbox>
    </f-checkbox-group> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // gender: "1",
      active: false,
      hobby: ["抽烟", "喝酒", "烫头"],
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
}
</style>
