<template>
  <div class="policyWrap">
    <div class="header">
      停电信息决策
    </div>
    <div class="sub">
      <div class="sub-head">
        <el-input
          placeholder="请输入内容"
          v-model="linevalue"
          clearable>
        </el-input>
        <el-button>决策</el-button>
      </div>
      <div class="sub-cont">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea3">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      linevalue: '',
      textarea3: ''
    }
  }
}
</script>

<style scoped lang='stylus'>
.policyWrap
  .header
    padding 0 20px
    height 34px
    border-bottom 1px solid #e2e1e1
    font-size 20px
    color #333
    background-color #fff
  .sub
    height 500px
    margin 20px
    margin-bottom 0
    background-color #fff
    padding 20px
    .sub-head
      display flex
      align-items center
      margin-bottom 20px
      .demonstration
        width 80px
        margin-right 20px
    .sub-head >>> .el-input
      width 400px
    .sub-head >>> .el-textarea
      width 400px
    .sub-head >>> .el-button
      margin-left 50px
    .sub-cont >>> .el-textarea
      width 525px
</style>
