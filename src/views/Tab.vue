<template>
  <div>
    <!-- 过渡效果 要和css配合 -->
    <transition name="fade">
        <keep-alive include="List">
          <router-view></router-view>
        </keep-alive>
        
    </transition>
    

    <div class="h50"></div>
    
    <div class="fixed-bottom">
      <ul class="wrap-tab">
        <li>
          <router-link to="/tab/home">首页</router-link>
        </li>
        <li>     
          <router-link to="/tab/list">列表</router-link>
        </li>
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
.wrap-tab li a{
  text-decoration: none;
  display:block;
}
.router-link-active{
  background-color: var(--theme_color);
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
