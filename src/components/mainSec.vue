<template>

  <el-row :gutter="20" class="wrapper">
    <el-col :span="18">
      <div class="secDiv grid-content" v-loading="loading"  element-loading-text="拼命加载中">
        <div class="main-header">
          <p class="header-title">全部</p>
        </div>
        <div v-for='item of content'>
          <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
            <img :src='item.author.avatar_url' :title='item.author.loginname'>
          </router-link>
          <div class='textDiv'>
            <router-link class="title" :to='{name:"ArticleRoute",params:{id:item.id}}'>{{(item.title)}}</router-link>
            <!--{{(item.title.length<38)?item.title:(item.title.substr(0,38)+'...')}} title固定长度-->
            <div class='stuff'>
              <span class="reply-count">
                <span class="reply">{{item.reply_count}}</span>/<span>{{item.visit_count}}</span>
              </span>
              <span>创建于：{{item.create_at.substr(0,10)}}</span>
              <span>最后回复：{{item.last_reply_at.substr(0,10)}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content side">
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
                <img src="http://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
              </a>
            </li>
            <div class="sep10"></div>
            <li>
              <a href="http://golangtc.com/" target="_blank">
                <img src="http://o4j806krb.qnssl.com/public/images/golangtc-logo.png">
              </a>
            </li>
            <div class="sep10"></div>
            <li>
              <a href="http://phphub.org/" target="_blank">
                <img src="http://o4j806krb.qnssl.com/public/images/phphub-logo.png">
              </a>
            </li>
            <div class="sep10"></div>
            <li>
              <a href="https://testerhome.com/" target="_blank">
                <img src="http://dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
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
          <img width="200" src="http://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU">
          <br>
          <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
        </div>
      </div>
    </div></el-col>
  </el-row>


</template>
<script>
  console.log('Hello vue!-main');

  export  default {
    name:'mainSection',
    data() {
      return {
        content:[],//空数据内容
        limit:0,//Number 每一页的主题数量
        loading:true,
      };
    },
    methods: {//s忘了加
      scrollMethod() {
        const sumH = document.body.scrollHeight;//获取对象的滚动高度(页面总高度)
        const viewH = document.documentElement.clientHeight;//网页可见区域高
        const scrollH = document.body.scrollTop;//网页被卷去的高
        if (viewH + scrollH === sumH) {//判断页面卷到底部
          this.getData();
        }
      },
      getData() {
        this.limit += 10;//每一页的主题数量
        this.$http({
          url: 'https://cnodejs.org/api/v1/topics',//cnodejs API
          method: 'get',
          params: {
            page: 1,//Number 页数
            limit: this.limit,//每一页的主题数量
            mdrender: 'false',//当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
          },
        }).then((res) => {
          this.content = res.data.data;
        }).catch((res) => {
          console.log('mainSec.vue: ', res);
        });
      },
    },
    mounted() {
      window.addEventListener('scroll', this.scrollMethod);//添加滚动时间监听
    },
    created() {
      this.getData();
    },
    watch: {
      content(val) {//如果有数据，停止显示loading
        if (val) {
          this.loading = false;
        }
      },
    },
  };
</script>
<style scoped>
  .wrapper {
    width:100%;
    margin: 0;
  }
  .secDiv {
    background: #fff;
    border: 1px solid #ddd;
    font-size: 20px;
    padding: 0;
    min-height: 40rem;
    border-radius: 4px;
  }

  a {
    text-decoration: none;
  }
  .secDiv>div {
    display: flex;
    padding:0.5rem;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #dadada;
    /*padding-bottom: 1rem;*/
  }

  .secDiv>div:hover {
    background: #f6f6f6;
  }

  .secDev>div a {
    width: 3rem;
    height: 3rem;
  }

  .secDiv>div img {
    width: 3rem;
    height: 3rem;
    margin: 0 0.5rem;
  }

  .main-header {
    border-radius: 4px 4px 0 0;
    border-bottom: 0;
    background-color: #f6f6f6;
  }
  .header-title {
    font-size: 1rem;
    padding-left: 1rem;
    color: #80bd01;
  }
  .textDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-left: 1rem;
    overflow: hidden;
  }

  .title {
    color: black;
    font-size: 20px;
    white-space:nowrap;
  }

  .title:visited {
    color: grey;
  }

  .stuff {
    font-size: 12px;
    margin-top: 0.3rem;
    color: #8492A6;
  }

  .reply-count {
    margin-right: 1rem;
  }
  .reply {
    color:#9e78c0;
    font-weight: bold;
  }

  /*side*/
  .side {
    /*width: 264px;*/
    /*height:500px;*/
    font-size: 0.875rem;
    /*float: right;*/
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
  .cnode-app-download {
    text-align: center;
  }
</style>
