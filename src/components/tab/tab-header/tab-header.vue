<template>
  <div class="header">
    <h3 class="title">管理后台</h3>
    <div class="user-wrap">
      <span class="name">ops</span>
      <span class="balan">余额：10万</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabHeader"
};
</script>

<style scoped lang='stylus'>
.header {
  padding-left: 25px;
  height: 70px;
  color: #fff;
  background-color: rgba(30, 38, 44, 1);
  .title {
    line-height: 40px;
  }
  .balan {
    font-size: 12px;
  }
}
</style>
