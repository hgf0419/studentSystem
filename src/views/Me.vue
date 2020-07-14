<template>
  <div>
    <div class="wrap-img">
      <img :src="stu.StuPhoto" alt />
    </div>

    <ul class="wrap-u">
      <li class="u-line">
        <span>姓名</span>
        <span>{{stu.StuName}}</span>
      </li>
      <li class="u-line">
        <span>学号</span>
        <span>{{stu.StudentId}}</span>
      </li>
      <li class="u-line">
        <span>出生日期</span>
        <span>{{stu.StuBirth}}</span>
      </li>
      <li class="u-line">
        <span>手机号</span>
        <span>{{stu.StuPhone}}</span>
      </li>
      <li class="u-line">
        <span>户籍</span>
        <span>{{stu.Province}}-{{stu.District}}-{{stu.City}}</span>
      </li>
      <li class="u-line">
        <span>学校</span>
        <span>{{stu.SchoolName}}</span>
      </li>
      <li class="u-line">
        <span>院系</span>
        <span>{{stu.CollegeName}}</span>
      </li>
      <li class="u-line">
        <span>专业</span>
        <span>{{stu.MajorName}}</span>
      </li>
      <li class="u-line">
        <span>班级</span>
        <span>{{stu.ClassName}}</span>
      </li>
    </ul>

    <div class="wrap-btn">
      <div class="btn-confirm-outline" @click="fnQuit">退出</div>
  
    </div>

    
  </div>
</template>

<script>

export default {
  name: "Me",
  data: function() {
    return {
      stu: {}
    };
  },
  mounted: function() {
    this.fnLoad();
  },
  methods: {
    fnLoad: function() {
      let that = this;
      that.$Req("/student/logininfo", "get", {}).then(res => {
        console.log(res);
        that.stu = res.data.stu;
      });
    },
    fnQuit:function(){
      
      if(!confirm('确定退出'))return;
      //清缓存
      localStorage.clear();
      //跳首页
      this.$router.push({path:'/login'});

    }
  }
};
</script>

<style scoped>
.wrap-img{
  width: 100px;
  height: 100px;
  margin: 20px auto;
}
.wrap-img img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.u-line {
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.wrap-btn{
  padding: 10px;
  margin-top: 20px;
}
</style>
