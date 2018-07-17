<template>
  <div id="app">
    <div class="tab-wrapper">
      <tab></tab>
    </div>
    <div class="link-wrapper">
      <login :isLogin="isLogin"></login>
      <router-view />
    </div>
  </div>
</template>

<script>
import Tab from "components/tab/tab";
import Login from "components/login/login";

export default {
  name: "App",
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    Tab,
    Login
  }
};
</script>

<style scoped lang='stylus'>
#app {
  display: flex;
  height: 100%;

  .tab-wrapper {
    flex: 0 0 200px;
    width: 200px;
    height: 100%;
    background-color: rgb(48, 65, 86);
  }

  .link-wrapper {
    flex: 1;
    min-height: 100%;
    background-color: #f2f2f2;
  }
}
</style>
