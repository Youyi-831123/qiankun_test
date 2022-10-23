<!--
 * @Date: 2022-06-02 00:12:56
 * @LastEditors: youyi
 * @LastEditTime: 2022-10-09 17:07:46
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Home 路由"/>
    <button @click="$router.replace('/sub-react')"></button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
