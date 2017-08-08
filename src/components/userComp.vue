<template>
  <div id="content-wrap" v-loading.lock="loading" element-loading-text="拼命加载中">
    <div class="panel">
      <div class="header">
        <router-link to='/'><span>主页\/</span></router-link>
      </div>
      <div class="user-info">
        <div class="user-card">
          <img class="user-avatar" :src='userInfo.avatar_url'>
          <span class="user-name">{{userInfo.loginname}}</span>
          <p>
            <span>积分:{{userInfo.score}}</span>
          </p>
          <p>
            <icon name='github' scale='2'></icon>
            <span>https://github.com/{{userInfo.githubUsername}}</span>
          </p>
          <p>
            <icon name='time' scale='2'></icon>
            <span>注册时间：{{userInfo.create_at.substr(0,10)}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header"><span>最近创建的话题</span></div>
      <div class="cell" v-for='item in userInfo.recent_topics'>
        <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
          <img :src='item.author.avatar_url' :title='item.author.loginname'>
        </router-link>
        <div class='text-div'>
          <router-link class="title" :to='{name:"ArticleRoute",params:{id:item.id}}'>{{(item.title)}}</router-link>
          <div class='stuff'>
            <span>最后回复：{{item.last_reply_at.substr(0,10)}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header"><span>最近参与的话题</span></div>
      <div class="cell" v-for='item in userInfo.recent_replies'>
        <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
          <img :src='item.author.avatar_url' :title='item.author.loginname'>
        </router-link>
        <div class='text-div'>
          <router-link class="title" :to='{name:"ArticleRoute",params:{id:item.id}}'>{{(item.title)}}</router-link>
          <div class='stuff'>
            <span>最后回复：{{item.last_reply_at.substr(0,10)}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'userComp',
  data() {
    return {
      userInfo:{
      },
      loading:true,
    }
  },
  watch: {
    userInfo(val) {
      if (val) {
        this.loading = false;
      }
    },
  },
  created() {
    this.$http({
      url:`https://cnodejs.org/api/v1${this.$route.path}`,
      method:'get',
    }).then((res)=>{
      this.userInfo = res.data.data;
      sessionStorage.authorName=this.userInfo.loginname;//保存作者名，在sideSec.vue中使用
    }).catch((res)=>{
      console.log('userComp.vue',res)
    })
  },
  beforeRouteUpdate(to, from, next) {//?
    this.$http({
      url: `https://cnodejs.org/api/v1${to.path}`,
      method: 'get',
    }).then((res) => {
      this.userInfo = res.data.data;
    }).catch((res) => {
      console.log('UserCom.vue: ', res);
    });
    next();
  },
}
</script>

<style scoped>
  #content-wrap {
    width:70%;
    height: 500px;//
    padding: 0;
  }
  /*user card*/
  .user-info {
    padding: 10px;
    line-height: 2rem;
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
  .header span {
    font-size: 1rem;
    font-weight: bold;
  }
  .user-avatar{
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
  /*cell*/
  .cell {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.5rem;
    border-bottom: 1px solid #dadada;
  }
  .cell:hover {
    background: #f6f6f6;
  }
  .cell a {
    width: 3rem;
    height: 3rem;
  }

  .cell img {
    width: 3rem;
    height: 3rem;
    margin: 0 0.5rem;
  }
  .text-div {
    margin: 0 1rem;
  }
  .title {
    font-size: 1rem;
  }
  .stuff span {
    font-size: 0.6rem;
  }
</style>
