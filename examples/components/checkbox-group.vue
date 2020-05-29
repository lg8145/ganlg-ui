<template>
  <div class="lg-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'LgCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
