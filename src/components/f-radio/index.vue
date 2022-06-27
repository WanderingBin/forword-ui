<template>
  <label class="f-radio" :class="{ 'is-checked': label === model }">
    <span class="f-radio__input">
      <span class="f-radio__inner"></span>
      <!-- 指定name属性是为了提交表单的方便 后端需要获取键值  -->
      <!-- 使用 <ne-radio label='1' v-model='gender'/ >  -->
      <!-- label是当前radio标签的值 v-model绑定的gender是收集的数据 -->
      <!-- 当v-model中传入的modelValue = value的时候radio会被选中 -->
      <input
        type="radio"
        class="f-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="f-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: "FRadio",
  data() {
    return {};
  },
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    value: null,
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isGroup() {
      return !!this.RadioGroup;
    },
  },
};
</script>

<style lang="scss" scoped>
.f-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .f-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .f-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .f-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .f-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.f-radio.is-checked {
  .f-radio__input {
    .f-radio__inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .f-radio_label {
    color: #409eff;
  }
}
</style>