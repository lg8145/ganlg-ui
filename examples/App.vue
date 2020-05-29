<template>
  <div id="app">
    <!-- <lg-radio label="1" v-model="gender">a</lg-radio>
    <lg-radio label="0" v-model="gender">b</lg-radio>-->
    <!-- <lg-form :model="model" label-width="120px">
      <lg-form-item label="用户名">
        <lg-input placeholder="请输入用户名" v-model="model.username" clearable></lg-input>
      </lg-form-item>
      <lg-form-item label="选择">
        <lg-switch v-model="model.active"></lg-switch>
      </lg-form-item>
    </lg-form>-->
    <lg-checkbox v-model="active">11</lg-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  }
};
</script>

<style>
</style>
