<template>
  <div>
    <div class="bBar">
        <div @click="fnBack">&lt;&nbsp;{{btext}}</div>
        <div>文章详情</div>
    </div>
    <div class="h60"></div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    btext: String
  },
  methods:{
      fnBack: function() {
      //返回上一页
      
      this.$router.push({path:'/tab/list'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bBar{   
        width: 100%;
        height: 50px;
        background-color: var(--theme_color);
        color:#fff;
        font-size: 1.2rem;
        position: fixed;
        top:0;
        left:0;
        padding: 0 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .bBar div{
        color:#fff;
    }
    
</style>
