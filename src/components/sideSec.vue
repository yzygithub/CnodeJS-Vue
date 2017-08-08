<template>
  <div id="sideBar" v-loading.lock="loading" element-loading-text="拼命加载中">
    <div class="panel">
      <div class="header">
        <span>个人信息</span>
      </div>
      <div class="inner">
        <div class="user-card">
            <router-link class="user-avatar" :to='{name:"UserRoute",params:{name:userInfo.loginname}}' >
              <img :src='userInfo.avatar_url'>
            </router-link>
            <span class="user-name">{{userInfo.loginname}}</span>
            <p><span>积分:{{userInfo.score}}</span></p>
            <p>
              <icon name='github' scale='2'></icon>
              <span>https://github.com/{{userInfo.githubUsername}}</span>
            </p>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="inner ads">
        <div class="ad-img">
          <a href="/">我是广告
            <img src="" alt="">
          </a>
        </div>
        <div class="ad-img">
          <a href="/">我是广告
            <img src="" alt="">
          </a>
        </div>
        <div class="ad-img">
          <a href="/">我是广告
            <img src="" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span>友情社区</span>
      </div>
      <div class="inner">
        <ol class="friendship-community">
          <li>
            <a href="https://ruby-china.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
            </a>
          </li>
          <li>
            <a href="http://golangtc.com/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
            </a>
          </li>
          <li>
            <a href="http://phphub.org/" target="_blank">
              <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
            </a>
          </li>
          <li>
            <a href="https://testerhome.com/" target="_blank">
              <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="panel">
      <div class="header">
        <span>客户端二维码</span>
      </div>
      <div class="inner cnode-app-download">
        <img width="200" src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
        <br>
        <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
      </div>
    </div>
  </div>
</template>

<script>
  export  default {
    name: 'sideSection',
    data() {
      return {
        userInfo: {
        },
        loading: true,
      };
    },
    watch: {
      userInfo(val) {
        if (val) {
          this.loading = false;
        }
      },
    },
    beforeCreate() {
      setTimeout(()=>{//延迟加载，权宜之计。在sessionStorage更新之后再读取。
        var authorName = sessionStorage.getItem("authorName");
        //      console.log(authorName)
        this.$http({
          url: `https://cnodejs.org/api/v1/user/${authorName}`,
          method: 'get',
        }).then((res) => {
          this.userInfo = res.data.data;
        }).catch((res) => {
          console.log('user info: ', res);
        });
      },300)
    },
  }
</script>

<style scoped>
  #sideBar {
    width: 264px;
    font-size: 0.875rem;
    float: right;
    margin-bottom: 20px;
  }
  .panel {
    font-size: 0.8125rem;
    margin-bottom: 0.8125rem;
    background-color: #fff;
    border-radius: 4px;
  }
  .header {
    color:#51585c;
    padding:10px;
    background-color: #f6f6f6;
    border-radius: 4px;
  }
  .inner {
    padding: 10px;
    line-height: 2rem;
  }
  .user-avatar img{
    width: 4rem;
    height: 4rem;
    border-radius: 4px;
  }
  .user-name {
    padding: 1rem;
    font-weight: bold;
  }
  .user-card span{
    font-size: 1rem;
  }
  .user-card p {
    display: flex;
    align-items: center;
  }
  .ad-img{
    width: 100%;
    height: 50px;
    background-color: #83d1ee;
    margin: 5px 0;
    border-radius: 4px;
    text-align: center;
  }
  .friendship-community {
    margin: 4px 0;
    list-style: none;
  }
  .friendship-community li {
    margin: 10px 0;
  }
  .friendship-community img {
    width: 150px;
  }
</style>
