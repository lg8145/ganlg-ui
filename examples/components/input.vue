<template>
  <div class="lg-input" :class="{'lg-input--suffix': showSuffix}">
    <input
      class="lg-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text':'password'): type"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
    <span class="lg-input__suffix" v-if="showSuffix">
      <i
        v-if="clearable && this.value"
        class="lg-input__icon el-icon-circle-close lg-input__clear"
        @click="clear"
      ></i>
      <i
        v-if="showPassword"
        class="lg-input__icon el-icon-view lg-input__clear"
        @click="handlePasswordVisible"
        :class="{'el-icon-view-active':passwordVisible}"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "LgInput",
  data() {
    return {
      passwordVisible: false
    };
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>

<style lang="scss">
.lg-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .lg-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

.lg-input--suffix {
  .lg-input__inner {
    padding-right: 30px;
  }
  .lg-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
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
    .el-icon-view-active {
      color: #409eff;
    }
  }
}
</style>
