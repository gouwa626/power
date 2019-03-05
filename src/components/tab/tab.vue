<template>
  <div class="tab">
    <el-row>
      <el-col :span="24">
        <div>
          <tab-header></tab-header>
        </div>
        <el-menu
          :router="true"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="rgb(0,101,105)"
          text-color="#fff"
          active-text-color="#fff"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>查询</span>
            </template>
            <el-menu-item index="/control">停电单查询</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>录入</span>
            </template>
            <el-menu-item index="/site">停电单录入</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>决策</span>
            </template>
            <el-menu-item index="/bill-data">决策</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TabHeader from "./tab-header/tab-header";
export default {
  name: "Tab",
  data() {
    return {
      isRouter: true
    };
  },
  components: {
    TabHeader
  }
};
</script>

<style scoped lang='stylus'>
.tab >>> .el-submenu {
  width: 200px;
}

.tab >>> .el-submenu__title i {
  font-size: 14px;
  color: #fff;
}

.tab >>> .el-submenu__title:hover, .is-active, .el-menu-item:hover {
  background: #2E8B57 !important;
}
</style>
