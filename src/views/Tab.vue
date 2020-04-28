<template>
  <div>
    <router-view></router-view>

    <div style="height:50px;"></div>
    
    <div class="fixed-bottom">
      <ul class="wrap-tab">
        <li><router-link to="/tab/home">首页</router-link></li>
        <li><router-link to="/tab/list">列表</router-link></li>
        <li><router-link to="/tab/me">我的</router-link></li>
      </ul>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "Tab",
  
  data: function() {
    return {
      aa: 123
    }
  }
};
</script>

<style scoped>

.wrap-tab{
  display: flex;
  border-top:1px solid #ddd;
  background-color: #fff;
}
.wrap-tab li{
  width: 33.33%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

</style>
