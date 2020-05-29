<template>
  <div class="lg-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LgForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth:{
        type:String,
        default:'80px'
    }
  },
  provide(){
      return {
          Form:this
      }
  }
};
</script>
<style lang="sass">

</style>