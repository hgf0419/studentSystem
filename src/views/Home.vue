<template>
  <div>
    <div class="t">职位列表</div>

    <ul class="wrap-zw">
      <li class="zw-item" v-for="item in list" :key="item.$index">
        <div class="zw-line1">
          <div class="zw-t">{{item.title}}</div>
          <div class="zw-money">{{item.salary}}</div>
        </div>
        <div class="zw-c">{{item.bus_name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { REQUEST } from "./../utils/request";

export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      list: []
    };
  },
  mounted: function() {
    this.fnLoad();
  },
  methods: {
    aa: function() {
      console.log("aa");
    },
    fnLoad: function() {
      let that = this;
      ///article/GetArticleList?page=1&limit=10&platform=xcx'
      REQUEST("/student/GetRecruitList?page=1&limit=20", "get", {}).then(
        res => {
          console.log(res);
          that.list = res.data.Data;
        }
      );
    }
  }
};
</script>

<style scoped>
.t {
  font-size: 24px;
  color: #4173ff;
  text-align: center;
  margin: 10px 0;
}
.zw-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.zw-line1{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zw-t{
  font-size: 1rem;
}
.zw-money{
  font-size: 1.4rem;
  color:#f00;
}
.zw-c{
  font-size: 0.8rem;
}
</style>
