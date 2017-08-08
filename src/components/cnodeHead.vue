<template>
  <div class="head">
    <div class="container">
      <router-link to="/">
        <img src="../assets/cnodejs.svg" alt="cnodejs.svg">
      </router-link>
      <ul class="nav pull-right">
        <li><a href="/">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="https://cnodejs.org/api" target="_blank">API</a></li>
        <li><a @click="dialogVisible = true" >关&nbsp;&nbsp;于</a></li>
        <li><a href="#">注册</a></li>
        <li><a href="#">登录</a></li>
      </ul>
      <el-dialog
        title="Vue.js重写CnodeJS社区"
        :visible.sync="dialogVisible"
        size="tiny"
        >
        <div class='dialogDiv'>
          <span>
            <strong>作者: &nbsp;&nbsp;</strong>
          </span>
          <a href='https://github.com/yzygithub' target='_blank'>杨照宇</a>
          </span>
          <br>
          <span>
            <strong>源代码: &nbsp;&nbsp;</strong>
          </span>
          <a href='https://github.com/yzygithub/CnodeJS-Vue' target='_blank'>Github</a>
          <br>
          <span>
            <strong>技术栈: </strong>
          </span>
          <ul>
            <li>Vue.js</li>
            <li>Vue-router</li>
            <li>Axios</li>
            <li>Element</li>
            <li>CnodeJS API</li>
          </ul>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  console.log('Hello vue!-head');

  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
  };
</script>
<style scoped>
  .head {
    height:3rem;
    width: 100%;
    background-color:#444 ;
    position: absolute;
    top: 0;
    left: 0;
  }
  .container {
    width: 90%;
    margin: auto;
    padding: 5px;
    min-width: 960px;
    max-width: 1400px;
  }

  .container img {
    height: 2rem;
    vertical-align: middle;
  }

  .nav.pull-right {
    float: right;
    position: relative;
    left: 0;
    display: block;
    list-style: none;
    margin: 0.5rem;
  }

  .nav>li {
    float: left;
    line-height: 20px;
  }
  .nav>li>a {
    float: none;
    padding: 10px 15px;
    text-decoration: none;
    text-shadow: none;
    color: #ccc;
    line-height: 20px;
    font-size: 1rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    cursor: pointer;
  }

  .head .dialogDiv {
    font-size: 1rem;
  }

  .dialogDiv ul {
    margin-left: 1rem;
  }

  .dialogDiv a {
    text-decoration: none;
    color: #58B7FF;
  }

</style>
