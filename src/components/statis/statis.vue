<template>
    <section>
         <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
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
    components:{
        groupStatic
    },
    data(){
        return{
            activeName:'first'
        }
    }
}
</script>

<style lang="stylus" scoped>
section 
    height 100%
    padding 30px
</style>
