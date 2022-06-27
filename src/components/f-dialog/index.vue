<template>
  <transition name="dialog-fade">
    <div class="f-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div
        class="f-dialog"
        :style="{
          width,
          marginTop: top,
        }"
      >
        <div class="f-dialog__header" v-if="$slots.footer">
          <slot name="title">
            <span class="f-dialog__title">{{ title }}</span>
          </slot>
          <button class="f-dialog__headerbtn" @click="handleClose">
            <i class="f-icon-close"></i>
          </button>
        </div>
        <div class="f-dialog__body">
          <slot></slot>
        </div>
        <div class="f-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "FDialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "30%",
    },
    top: {
      type: String,
      default: "300px",
    },
    visible: {
      type: Boolean,
      default: "false",
    },
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="scss" scoped>
// scope会添加一个随机属性,也会给样式添加一个对应的属性选择器
.f-dialog__wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  .f-dialog {
    position: relative;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    margin: 300px auto;
    &__header {
      padding: 20px 20px 10px;
      .f-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .f-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .f-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .f-button:first-child {
        margin-right: 15px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>