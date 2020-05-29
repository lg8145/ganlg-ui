<template>
  <!-- 对话框遮罩层 -->
  <transition name="dialog-fade">
    <div class="lg-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="lg-dialog">
        <div class="lg-dialog__header">
          <slot name="title">
            <span class="lg-dialog__title">{{title}}</span>
          </slot>
          <button class="lg-dialog__headerbtn" @click="handleClose">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="lg-dialog__body">
          <span>这是一段信息</span>
        </div>
        <div class="lg-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "LgDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scope>
.lg-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .lg-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .lg-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lg-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
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
      .lg-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-fade-enter-active {
    animation: dialog-fade-in .4s;
}

.dialog-fade-leave-active {
    animation: dialog-fade-out .4s;
}

@keyframes dialog-fade-in {
    0% {
        transform: translate3d(0, -20px, 0);
        opacity: 0;
  }
    100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
  }
}

@keyframes dialog-fade-out {
    0% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
  }
    100% {
        transform: translate3d(0, -20px, 0);
        opacity: 0;
  }
}
</style>