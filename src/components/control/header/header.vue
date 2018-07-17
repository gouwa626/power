<template>
  <div class="header-wrapper">
    <div class="lf">
      <span>彩种: 竞彩足球</span>
      <span>刷新频率: 10秒</span>
    </div>
    <div class="rf">
      系统时间: {{ time }}
    </div>
  </div>
</template>

<script>
export default{
  name: 'ControlHeader',
  mounted() {
    // this.reload()
  },
  methods: {
    reload() {
      let tempTime = 10
      this.timer = setInterval(() => {
        tempTime--
        if (tempTime === 0) {
          window.location.reload()
        }
      }, 1000)
    }
  },
  computed: {
    time() {
      const time = new Date()
      let y = time.getFullYear()
      let M = time.getMonth() + 1
      let D = time.getDate()
      let h = time.getHours()
      let m = time.getMinutes()
      return `${y}-${M}-${D} ${h}:${m}`
    }
  },
  destroyed() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang='stylus'>
.header-wrapper
  display flex
  flex-flow row nowrap
  justify-content space-between
  align-items center
  padding 0 20px
  height 34px
  border-bottom 1px solid #e2e1e1
  font-size 12px
  color #666
  background-color #fff
  .lf
    span
      margin-right 20px
</style>
