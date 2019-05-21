<template>
  <div class="login">
    <div class="content">
        <div class="name">
          <span class="userName">用户名</span>
          <input placeholder="请输入用户名" class ="loginIpt">
          <span class="error">用户名不存在，请重试</span>
        </div>
        <div class="name margin-top">
          <span class="userName">密&nbsp;&nbsp;&nbsp;&nbsp;码</span>
          <input placeholder="请输入密码" class ="loginIpt">
          <span class="error">密码错误，请重试</span>
        </div>
        <div class="preservation margin-top">
          <span class="choseSpan"></span>
          <span class="choseText">记住密码</span>
        </div>
        <div class="preservation" >
         <el-button type="success" class="submitBtn">成功按钮</el-button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
   data(){
     return{

        checked: true

     };
   },
   mounted(){
     console.log(this.apis.get["login"])
   }
}
</script>
<style lang="less" scope>
  .login{
    width: 100%;
    height: 100%;
    background:url("../../assets/images/bg.png") no-repeat ;
    background-size:cover;
    display: flex;
    justify-content:center;
    align-items:Center;

  }
  .content{
    width:100%;
    height: 30%;
  }
  .name{
    width: 75%;
    height:1.13rem;
    line-height: 1.13rem;
    border-bottom:1px solid #C8C8C8;
    margin: 0 auto;
    color: #DCDCDC;
    font-family: PingFangSC-Regular;
    position: relative;

  }
  .preservation{
    width: 75%;
    height:1.13rem;
    line-height: 1.13rem;
    margin: 0 auto;
    border-bottom:none;
    font-family: PingFangSC-Regular;
    font-size: .32rem;;
    color: #FFFFFF;
    letter-spacing: 0;

  }
  .userName{
    font-size: 0.43;
    letter-spacing: 0;
    float: left;
    /* width: 20%; */
  }
  .loginIpt{
    border:none;
    padding-left: 0.1rem;
    BACKGROUND-COLOR: transparent;
    color: #DCDCDC;
    outline:medium

  }
  input::-webkit-input-placeholder {
    color: #DCDCDC;
  }
  .choseSpan{
    border: 2px solid #FFFFFF;
    border-radius: 6px;
    height: 0.4rem;
    width: 0.4rem;
    float: left;
    margin-top: 0.35rem;
  }
  .choseText{
    float: left;
    line-height: 1.13rem;
    margin-left: .3rem;
  }
  .submitBtn{
    width: 100%;
    height:1.13rem ;
    line-height: 1.13rem;
    background: #C8C8C8;
    border-radius: 8px;
  }
  .margin-top{
    margin-top: .5rem;
  }
  .error{
    font-size: .32rem;
    color: #FFFF00;
    letter-spacing: 0;
    position: absolute;
    bottom: -1rem;
    left: 0;


  }
</style>

