<template>
  <div class="login-wrapper">
    <span v-if="isLogin">注销</span>
    <span v-else>登录</span>
  </div>
</template>

<script>
export default{
  name: 'Login',
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang='stylus'>
.login-wrapper
  padding-right 30px
  height 37px
  line-height 37px
  text-align right
  font-size 14px
  color #999
  background-color #fff
  span
    padding: 5px
</style>
