<template>
  <div class="f-input" :class="{ 'f-input--suffix': showSuffix }">
    <input
      class="f-input__inner"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="{ 'is-disabled': disabled }"
      :value="value"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      @input="handleInput"
    />
    <span class="f-input__suffix" v-if="showSuffix">
      <i
        class="f-input_icon f-icon-close"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="f-input_icon f-icon-visible"
        :class="{ 'f-icon-visible-active': passwordVisible }"
        v-if="showPassword"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "FInput",
  data() {
    return {
      passwordVisible: false,
    };
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
.f-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .f-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.f-input--suffix {
  .f-input__inner {
    padding-right: 30px;
  }
  .f-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .f-icon-visible-active {
      color: #409eff;
    }
    .f-icon-close:hover {
      color: red;
    }
  }
}
</style>