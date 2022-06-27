<template>
  <div id="app">
    <!-- <f-form :model="model" label-width="200px">
      <f-form-item label="用户名">
        <f-input placeholder="请输入用户名" v-model="model.username"></f-input>
      </f-form-item>
      <f-form-item label="选择">
        <f-switch v-model="model.active"></f-switch>
      </f-form-item>
    </f-form> -->
    <f-pagination
      :pageNo.sync="pageNo"
      pageSize="3"
      total="32"
      continues="5"
    ></f-pagination>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pageNo: "5",
      model: {
        // username: "",
        // active: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
}
</style>
