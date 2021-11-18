<template>
  <div id="app">
    <div class="pic-box">
      <picScale :url="'https://penglong-shop.oss-cn-beijing.aliyuncs.com/default/2021-11-13/8a5fca4a77922893ebf3d0c312ea1c58.jpg'" />
    </div>
  </div>
</template>

<script>
import picScale from "./packages/pic-scale/pic-scale.vue";
export default {
  components: {
    picScale
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.pic-box {
  width: 400px;
  height: 400px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
