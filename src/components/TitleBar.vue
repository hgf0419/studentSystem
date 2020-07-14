<template>
  <div>
    <div class="tBar">
        {{ ttext }} 
    </div>
    <div class="h60"></div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    ttext: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .tBar{   
        width: 100%;
        height: 50px;
        background-color: var(--theme_color);
        color:#fff;
        line-height: 50px;
        font-size: 1.2rem;
        text-align: center;
        position: fixed;
        top:0;
        left:0;
    }
    .count{
        color:#fff;
    }
</style>
