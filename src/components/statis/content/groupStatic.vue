<template>
    <section>
         <el-table
        :data="tableData"
        border
        show-summary
        style="width: 100%">
        <el-table-column
        prop="time"
        label="日期"
        width="180">
        </el-table-column>
        <el-table-column
        prop="amount1"
        sortable
        label="变电工程公司">
        </el-table-column>
        <el-table-column
        prop="amount2"
        sortable
        label="配电室">
        </el-table-column>
        <el-table-column
        prop="amount3"
        sortable
        label="润源">
        </el-table-column>
        <el-table-column
        prop="amount4"
        sortable
        label="输配电公司">
        </el-table-column>
        <el-table-column
        prop="amount5"
        label="总计">
         <template slot-scope="scope">
             {{scope.row.amount1|setRowSun(scope.row.amount2,scope.row.amount3,scope.row.amount4)}}
         </template>
        </el-table-column>
    </el-table>
    </section>
</template>

<script>
export default {
    data(){
        return{
            tableData: [
                {
                    time: '2019/3/1',
                    amount1: '3',
                    amount2: '',
                    amount3: '4',
                    amount4:''
                },{
                    time: '2019/3/4',
                    amount1: '1',
                    amount2: '5',
                    amount3: '1',
                    amount4:'7'
                },{
                    time: '2019/3/5',
                    amount1: '1',
                    amount2: '2',
                    amount3: '1',
                    amount4:'1'
                },{
                    time: '2019/3/6',
                    amount1: '',
                    amount2: '',
                    amount3: '6',
                    amount4:'2'
                },{
                    time: '2019/3/7',
                    amount1: '2',
                    amount2: '',
                    amount3: '6',
                    amount4:'3'
                },{
                    time: '2019/3/8',
                    amount1: '2',
                    amount2: '1',
                    amount3: '5',
                    amount4:'1'
                },{
                    time: '2019/3/11',
                    amount1: '2',
                    amount2: '',
                    amount3: '5',
                    amount4:''
                },{
                    time: '2019/3/12',
                    amount1: '2',
                    amount2: '',
                    amount3: '4',
                    amount4:'1'
                },{
                    time: '2019/3/13',
                    amount1: '2',
                    amount2: '',
                    amount3: '4',
                    amount4:'1'
                },{
                    time: '2019/3/14',
                    amount1: '1',
                    amount2: '1',
                    amount3: '5',
                    amount4:'3'
                },{
                    time: '2019/3/15',
                    amount1: '2',
                    amount2: '',
                    amount3: '4',
                    amount4:'1'
                },{
                    time: '2019/3/16',
                    amount1: '',
                    amount2: '',
                    amount3: '1',
                    amount4:''
                },{
                    time: '2019/3/18',
                    amount1: '3',
                    amount2: '',
                    amount3: '6',
                    amount4:''
                },{
                    time: '2019/3/19',
                    amount1: '2',
                    amount2: '',
                    amount3: '5',
                    amount4:'2'
                },{
                    time: '2019/3/20',
                    amount1: '2',
                    amount2: '',
                    amount3: '4',
                    amount4:''
                },{
                    time: '2019/3/21',
                    amount1: '3',
                    amount2: '',
                    amount3: '4',
                    amount4:'1'
                },{
                    time: '2019/3/22',
                    amount1: '4',
                    amount2: '',
                    amount3: '3',
                    amount4:'1'
                },{
                    time: '2019/3/25',
                    amount1: '4',
                    amount2: '1',
                    amount3: '1',
                    amount4:'1'
                },{
                    time: '2019/3/26',
                    amount1: '5',
                    amount2: '',
                    amount3: '',
                    amount4:'1'
                },{
                    time: '2019/3/27',
                    amount1: '1',
                    amount2: '',
                    amount3: '1',
                    amount4:'1'
                },{
                    time: '2019/3/28',
                    amount1: '3',
                    amount2: '',
                    amount3: '1',
                    amount4:'1'
                },{
                    time: '2019/3/29',
                    amount1: '',
                    amount2: '',
                    amount3: '4',
                    amount4:'2'
                }
            ]
        }
    },
    filters:{
        setRowSun(data1,data2,data3,data4){
            return Number(data1)+Number(data2)+Number(data3)+Number(data4);
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
