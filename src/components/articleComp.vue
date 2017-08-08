<template>
  <!--<div class="secDiv" v-loading="loading" element-loading-text="拼命加载中">-->
    <div id="content-wrap" v-loading.lock="loading" element-loading-text="拼命加载中">
      <div class="panel">
        <div class="topic-header">
          <span class="topic-title">{{article.title}}</span>
          <div class="topic-info">
            <span>•发布于{{article.create_at.substr(0,10)}}</span>
            <router-link :to='{name:"UserRoute",params:{name: article.author.loginname}}'>•作者：{{article.author.loginname}}</router-link>
            <span>•{{article.visit_count}}次浏览</span>
            <span>•来自：{{(article.tab=='ask')?'问答':'分享'}}</span>
          </div>
        </div>
        <div class="topic-content" v-html='article.content'></div>
      </div>
      <div class="panel">
        <div class="reply-header"><span>{{article.reply_count}}回复</span></div>
        <div class="cell" v-for='(reply,index) in article.replies'>
          <div class="author-content">
            <router-link class="avatar" :to='{name: "UserRoute",params:{name: reply.author.loginname}}'><img :src='reply.author.avatar_url'></router-link>
            <div class="user-info">
              <router-link :to='{name:"UserRoute",params:{name: reply.author.loginname}}'>{{reply.author.loginname}}</router-link>
              <span>{{index+1}}楼•{{reply.create_at.substr(0,10)}}</span>
            </div>
            <div class='reply-up'>
              <span v-if='reply.ups.length > 0' class='thumbsClass'>
                <icon name='thumbs-up' scale='1.5'></icon>
                <span>{{reply.ups.length}}</span>
              </span>
            </div>
          </div>
          <div class="reply-content" v-html='reply.content'></div>
        </div>
      </div>
    </div>
  <!--</div>-->
</template>

<script>
  export  default {
    data() {
      return {
        article:{
        },
        loading:true,
      };
    },
    watch: {
      article(val) {
        if (val) {
          this.loading = false;
        }
      },
    },
    beforeCreate() {
      this.$http({
        url: `https://cnodejs.org/api/v1${this.$route.path}`,
        method: 'get',
      }).then((res) => {
        if (res.data.success === true) {
          this.article = res.data.data;
          document.title=this.article.title;//修改网页title
          sessionStorage.authorName=this.article.author.loginname;//保存作者名，在sideSec.vue中使用
        } else {
          this.article = 'Sorry, Something wrong happened when getting the remote data';
        }
      }).catch((res) => {
        console.log('ArticleCom.vue: ', res);
      });
    },
  };

</script>

<style scoped>
  @import url('../assets/markdown.css');

  /*.secDiv {*/
  /*}*/
  #content-wrap {
    width:70%;
    padding: 0;
 }
  .panel {
    margin-bottom: 13px;
  }
  .topic-header {
    padding: 10px;
    background-color: #fff;
    border-radius: 3px 3px 0 0;
  }
  .topic-title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .topic-info {
    font-size: 12px;
    color: #838383;
    margin: 8px;
  }
  .topic-info a {
    text-decoration: none;
    color: #333333;
  }
  .topic-info a:hover {
    text-decoration: underline;
  }
  .topic-content {
    padding: 15px 20px;
    border-top: 1px solid #e5e5e5;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    font-size: 16px;
  }
  .reply-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    font-size: 1rem;
    color: #555;
  }
  .cell {
    position: relative;
    padding:10px;
    font-size: 14px;
    background: #fff;
    border-top: 1px solid #f0f0f0;
  }
  .author-content .avatar {
    display: inline-block;
    float: left;
  }
  .avatar img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }
  .user-info {
    margin-left: 10px;
    display: inline-block;
    font-size: 0.5rem;
  }
  .user-info a {
    color: #555;
  }

  .reply-content{
    color: #333;
    padding-left: 50px;
    margin-bottom: 20px;
    font-size: 15px;
  }
  .reply-up {
    float: right;
    font-size: 16px;
  }

</style>
