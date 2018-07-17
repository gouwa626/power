<template>
  <div class="control">
    <Head></Head>
    <Content></Content>
  </div>
</template>

<script>
import Head from './header/header'
import Content from './content/content'

export default{
  name: 'Control',
  components: {
    Head,
    Content
  }
}
</script>

<style scoped lang='stylus'>
.control
  background-color #f2f2f2
</style>
