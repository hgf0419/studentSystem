<template>
  <div>
    <BackBar btext="back"></BackBar>

    <div class="art-t">{{art.Title}}</div>
    <div class="art-line">
      <div class="art-d">{{art.UpdatedAt2}}</div>
      <div class="art-n">阅读量：{{art.BrowseCount}}</div>
    </div>

    <div class="art-content" v-html='art.Content'></div>
  </div>
</template>

<script>
import BackBar from "./../components/BackBar";

export default {
  name: "Article",
  components: {
    BackBar
  },
  data: function() {
    return {
      art: {}
    };
  },
  mounted: function() {
    var p = this.$route.params.id;
    this.aid = p;
    this.fnLoad();
  },
  methods: {
    fnLoad: function() {
      //加载文章详情
      let that = this;
      that.$Req("/article/GetArticleInfo?id=" + that.aid, "get", {}).then(res => {
        console.log(res);
        res.data.UpdatedAt2=res.data.UpdatedAt.substring(0, 10);
        that.art = res.data;
      });
    }
  }
};
</script>

<style scoped>
.bar-back {
  height: 40px;
  line-height: 40px;
  background-color: #4173ff;
  padding: 0 10px;
  position: fixed;
  width: 100%;
}
.bar-back span {
  color: #fff;
}

.art-t{
  text-align: center;
  color: #666;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.art-line{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.art-content{
  padding: 10px 15px;
}
>>>.art-content img{
  max-width: 100%!important;
}
</style>
