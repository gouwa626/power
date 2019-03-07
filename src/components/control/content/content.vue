<template>
  <div class="content">
    <div class="num-wrapp">
      <div class="head">
        <div class="pick">
          <div class="block">
            <span class="demonstration">起始时间:</span>
            <el-date-picker
              v-model="timebegin"
              type="date"
              placeholder="选择起始时间">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">结束时间:</span>
            <el-date-picker
              v-model="timeover"
              type="date"
              placeholder="选择结束时间">
            </el-date-picker>
          </div>
        </div>
        <div class="pick">
          <div class="inputWrap">
            <span class="demonstration">线路:</span>
            <el-input
              placeholder="请输入内容"
              v-model="linevalue"
              clearable>
            </el-input>
          </div>
          <div class="inputWrap">
            <span class="demonstration">关键字:</span>
            <el-input
              placeholder="请输入内容"
              v-model="text"
              clearable>
            </el-input>
          </div>
          <el-button @click="getData">查询</el-button>
        </div>
      </div>
      <div class="sub">
        <el-table
          :data="tableData"
          stripe
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            label="序号"
            width="80">
          </el-table-column>
          <el-table-column
            prop="date"
            label="停电日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="line"
            label="线路"
            width="180">
          </el-table-column>
          <el-table-column
            prop="datebegin"
            label="停电开始时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="dateover"
            label="停电恢复时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="reason"
            label="停电原因"
            width="180">
          </el-table-column>
          <el-table-column
            prop="other"
            label="备注">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'ControlContent',
  data () {
    return {
      timebegin: '',
      timeover: '',
      linevalue: '',
      text: '',
      tableData: [
        {
          id: '01',
          date: '2016-05-02',
          line: '天安门线路',
          datebegin: '9:50',
          dateover: '11:20',
          reason: '计划停电',
          other: '自动化改造'
        },
        {
          id: '02',
          date: '2016-05-02',
          line: '天安门线路',
          datebegin: '10:50',
          dateover: '11:50',
          reason: '计划停电',
          other: '自动化改造'
        },
        {
          id: '03',
          date: '2016-05-02',
          line: '天安门线路',
          datebegin: '10:50',
          dateover: '11:50',
          reason: '计划停电',
          other: '自动化改造'
        },
        {
          id: '04',
          date: '2016-05-02',
          line: '天安门线路',
          datebegin: '10:50',
          dateover: '11:50',
          reason: '计划停电',
          other: '自动化改造'
        }
      ]
    }
  },
  methods: {
    getData() {
      this.$message({
        message: '查询成功消息',
        type: 'success'
      });
    }
  }
}
</script>

<style scoped lang='stylus'>
.content
  margin 20px
  background-color #fff
  padding 20px
  .pick
    display flex
    margin-bottom 20px
    .block
      margin-right 20px
      .demonstration
        display inline-block
        width 75px
    .inputWrap
      display flex
      align-items center
      margin-right 20px
      .demonstration
        width 80px
        // margin-right 10px
        // line-height 40px
    .inputWrap >>> .el-input
      width 220px
</style>
