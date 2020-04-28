<template>
  <div>
    <div class="wrap-logo">

      <img src="./../assets/logo.png" alt="logo">
    </div>
    
    <h1 class="t">登录</h1>

    <div class="wrap-form">


  
    <div class="form-item">
      <div>账号</div>
      <input type="text" placeholder="输入账号" v-model="formObj.LoginName">
    </div>
    <div class="form-item">
      <div>密码</div>
      <input type="password" placeholder="输入密码" v-model="formObj.PassWord">
    </div>

    <div class="btn-confirm" @click="fnLogin">登录</div>

    </div>
    
    

  </div>
</template>

<script>
import {REQUEST} from "./../utils/request";

export default {
  name: "List",
  data: function() {
    return {
      formObj:{
        LoginName:'',
        PassWord:''
      }
    }
  },
  mounted: function() {
    //this.formObj.LoginName="123";
  },
  methods:{
    fnLogin:function(){
      let that=this;
      //oRow449JsV4xZZ2nHotq-F2AI7z4

      REQUEST('/student/login?openid=', 'post', that.formObj)
      .then((res) => {
        console.log(res);
        
        if (res.code == 0) {
          
            alert('登录成功')        
            //跳首页
            that.$router.push({path:'/tab/home'});
             
        } else {
          alert(res.msg);
          
        }

      })


    }
  }
};
</script>

<style scoped>
.wrap-logo{
  text-align: center;
}
.t{
  text-align: center;
}
.wrap-form{
  width: 80%;
  margin: 20px auto;
}
.form-item{
  margin-bottom: 20px;
}
.form-item input{
  border:1px solid #4173ff;
  height:40px;
  line-height:40px;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
  font-size: 20px;
}

  
</style>>

