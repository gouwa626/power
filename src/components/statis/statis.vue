<template>
    <section>
        <div class="header">
            统计
        </div>
         <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" class="tab">
            <el-tab-pane label="班组统计" name="first">
                <groupStatic></groupStatic>
            </el-tab-pane>
            <el-tab-pane label="施工单位统计" name="second">施工单位统计</el-tab-pane>
        </el-tabs>
    </section>
</template>

<script>
import groupStatic from './content/groupStatic'

export default {
  components: {
    groupStatic
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

<style lang="stylus" scoped>
section
    height 100%
    min-height 800px
    // padding 30px
    .header
        padding 0 20px
        height 34px
        border-bottom 1px solid #e2e1e1
        font-size 20px
        color #333
        background-color #fff
    .tab
        margin 20px
</style>
