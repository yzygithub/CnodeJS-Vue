<template>
  <div id="app">
    <cnode-head></cnode-head>
    <!-- router-view name? ref? -->
    <router-view name='main' ></router-view>
    <router-view name='side' ref='child' ></router-view>
  </div>
</template>

<script>
import cnodeHead from './components/cnodeHead'
export default {
  name: 'app',
  data() {
    return {
      authorName:'',
    }
  },
  components:{
    cnodeHead,
  },
  watch: {//?
    authorName(val) {
      this.$refs.child.name = val;//?
    },
  },
}
</script>

<style>
  /* 如果加上，画面无法scroll*/
  /*html {*/
    /*font-size: 14px;*/
  /*}*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 4rem 4rem 0 4rem;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}
body,
div,
span,
a,
p,
ul,
li {
    margin: 0;
    padding: 0;
}
body {
  background-color: #e1e1e1;
}
a {
  text-decoration: none;
  color: #08c;
}
img {
  width: auto\9;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}
</style>
