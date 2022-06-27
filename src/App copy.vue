<template>
  <div id="app">
    <div class="box">
      <!-- <f-input
      placeholder="请输入用户名"
      type="password"
      name="username"
      disabled
      v-model="username"
    ></f-input> -->
      <!-- <f-input
        placeholder="请输入用户名"
        name="username"
        v-model="username"
        clearable
      ></f-input>
      <f-input
        placeholder="请输入用户名"
        type="password"
        name="username"
        v-model="username"
        show-password
      ></f-input> -->
      <f-switch v-model="active"></f-switch>
      <f-switch
        v-model="active"
        active-color="green"
        inactive-color="red"
        name="username"
      ></f-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "123",
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
}
</style>
