<template>
  <div>
    <h1>推荐文章</h1>
    <div class="art-item" v-for="item in list" :key="item.$index" @click="fnGoArt(item.Id)">

      <div class="art-t">{{item.Title}}</div>
      <div class="art-desc">{{item.Desc}}</div>
    </div>
  </div>
</template>

<script>
import {REQUEST} from "./../utils/request";
export default {
  name: "List",
  data: function() {
    return {
      aa: 2222,
      list:[]
    }
  },
  mounted: function() {
    this.fnLoad();
  },
  methods: {
    fnLoad: function() {
      let that = this;
      ///article/GetArticleList?page=1&limit=10&platform=xcx'
      REQUEST("/article/GetArticleList?platform=xcx&page=1&limit=20", "get", {}).then(
        res => {
          console.log(res);
          that.list = res.data;
        }
      );
    },
    fnGoArt:function(id){
      //跳首页
      this.$router.push({
        path:`/article/${id}`
      });
    }
  }
};
</script>

<style scoped>
  .art-item{
    border-bottom: 1px solid #ddd;
    padding: 10px;
  }
  .art-t{
    font-size: 1.4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }
  .art-desc{
    color: #999;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
