<template>
  <div id="app">
    <!-- <div class="row">
      <f-button>登录</f-button>
      <f-button type="primary">注册</f-button>
      <f-button type="success">删除</f-button>
      <f-button type="info">按钮1</f-button>
      <f-button type="warning">按钮2</f-button>
      <f-button type="danger">按钮3</f-button>
    </div>
    <div class="row">
      <f-button plain>登录</f-button>
      <f-button plain type="primary">注册</f-button>
      <f-button plain type="success">删除</f-button>
      <f-button plain type="info">按钮1</f-button>
      <f-button plain type="warning">按钮2</f-button>
      <f-button plain type="danger">按钮3</f-button>
    </div>
    <div class="row">
      <f-button round>登录</f-button>
      <f-button round type="primary">注册</f-button>
      <f-button round type="success">删除</f-button>
      <f-button round type="info">按钮1</f-button>
      <f-button round type="warning">按钮2</f-button>
      <f-button round type="danger">按钮3</f-button>
    </div>
    <div class="row">
      <f-button round circle>登录</f-button>
      <f-button round circle type="primary">注册</f-button>
      <f-button round circle type="success">删除</f-button>
      <f-button round circle type="info">按钮1</f-button>
      <f-button round circle type="warning">按钮2</f-button>
      <f-button round circle type="danger">按钮3</f-button>
    </div>
    <div class="row">
      <f-button circle icon="f-icon-music"></f-button>
      <f-button circle icon="f-icon-check" type="primary"></f-button>
      <f-button circle icon="f-icon-delete" type="success"></f-button>
      <f-button circle icon="f-icon-cancel" type="info"></f-button>
      <f-button circle icon="f-icon-increase" type="warning"></f-button>
      <f-button circle icon="f-icon-close" type="danger"></f-button>
    </div>
    <div class="row">
      <f-button round disabled>登录</f-button>
      <f-button round disabled type="primary">注册</f-button>
      <f-button round disabled type="success">删除</f-button>
      <f-button round disabled type="info">按钮1</f-button>
      <f-button round disabled type="warning">按钮2</f-button>
      <f-button round disabled type="danger">按钮3</f-button>
    </div> -->
    <f-button @click="visible = true">点击</f-button>
    <!-- sync修饰符 -->
    <f-dialog title="警告" width="50%" top="200px" :visible.sync="visible">
      <p>这是一段信息</p>
      <template v-slot:footer>
        <f-button type="primary" @click="visible = false"> 确定</f-button>
        <f-button @click="visible = false">取消</f-button>
      </template>
    </f-dialog>

    <!-- <f-dialog>
      <template v-slot:title>
        <h2>h2标签</h2>
      </template>
    </f-dialog> -->
    <!-- <f-dialog>
      <template v-slot:footer>
        <f-button type="primary"> 确定</f-button>
        <f-button>取消</f-button>
      </template>
    </f-dialog> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .f-button {
    margin-right: 20px;
  }
}
</style>
