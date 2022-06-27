<template >
  <label class="f-checkbox" :class="{ 'is-checked': isChecked }">
    <span class="f-checkbox__input">
      <span class="f-checkbox__inner"></span>
      <input
        type="checkbox"
        class="f-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="f-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: "FCheckbox",
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup;
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
};
</script>

<style lang="scss" scoped>
.f-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .f-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .f-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        // 这里使用边框实现对勾的样式
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        width: 3px;
        position: absolute;
        left: 4px;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .f-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .f-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 父元素的最后的一个子元素d-checkbox取消margin-right，也包括嵌套子元素的最后一个d-checkbox
.f-checkbox:last-of-type {
  margin-right: 0;
}
.f-checkbox.is-checked {
  .f-checkbox__inner {
    background-color: #409eff;
    border-color: #409eff;
    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }
  .f-checkbox__label {
    color: #409eff;
  }
}
.f-checkbox.is-disabled {
  .f-checkbox__inner {
    background-color: #edf2fc;
    border-color: #dcdfe6;
    cursor: not-allowed;
  }
  span.f-checkbox__label {
    color: #c0c4cc;
    cursor: not-allowed;
  }
}
.f-checkbox.is-mimicry {
  .f-checkbox__inner {
    box-shadow: inset 3px 2px 4px #cacaca48,
      inset -3px -2px 4px rgba(255, 255, 255, 0.377);
  }
}
</style>