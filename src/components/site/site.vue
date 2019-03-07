<template>
  <div class="enterWrap">
    <div class="enterHead">
      停电信息录入
    </div>
    <div class="enterSub">
      <div class="block">
        <span class="demonstration">停电日期:</span>
        <el-date-picker
          v-model="time"
          type="date"
          placeholder="选择起始时间">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">停电时间:</span>
        <el-time-picker
          v-model="timebegin"
          placeholder="选择停电时间">
        </el-time-picker>
      </div>
      <div class="block">
        <span class="demonstration">恢复时间:</span>
        <el-time-picker
          v-model="timeover"
          placeholder="选择恢复时间">
        </el-time-picker>
      </div>
      <div class="block line">
        <span class="demonstration">线路:</span>
        <el-input
          placeholder="请输入内容"
          v-model="linevalue"
          clearable>
        </el-input>
      </div>
      <div class="block line">
        <span class="demonstration">原因:</span>
        <el-input
          placeholder="请输入内容"
          v-model="reason"
          clearable>
        </el-input>
      </div>
      <div class="block line">
        <span class="demonstration">备注:</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="remarks">
        </el-input>
      </div>
    </div>
    <div class="buttonWrap">
      <div class="btn">
        <el-button round @click="save">保存</el-button>
      </div>
      <div class="btn">
        <el-button round @click="quit">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      time: '',
      timebegin: '',
      timeover: '',
      linevalue: '',
      reason: '',
      remarks: ''
    }
  },
  methods: {
    save() {
      this.$message({
        message: '保存消息',
        type: 'success'
      });
    },
    quit() {
      this.$confirm('此操作将删除已输入的内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '取消录入'
        });
        this.time = ''
        this.timebegin = ''
        this.timeover = ''
        this.linevalue = ''
        this.reason = ''
        this.remarks = ''
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    }
  }
}
</script>

<style scoped lang='stylus'>
.enterWrap
  .enterHead
    padding 0 20px
    height 34px
    border-bottom 1px solid #e2e1e1
    font-size 20px
    color #333
    background-color #fff
  .enterSub
    margin 20px
    margin-bottom 0
    background-color #fff
    padding 20px
    .block
      display flex
      align-items center
      margin-bottom 20px
      .demonstration
        width 80px
        margin-right 20px
    .line >>> .el-input
      width 400px
    .line >>> .el-textarea
      width 400px
  .buttonWrap
    background-color #fff
    margin 20px
    margin-top 0
    padding 30px
    .btn
      display inline-block
      margin 0 30px
    .btn >>> .is-round
      padding: 12px 35px
</style>
