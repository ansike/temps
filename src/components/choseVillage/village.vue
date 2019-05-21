<template>
  <div class="village">
      <header class="header">选择村 <i class="removebg"  v-on:click = "goback()"></i></header>
      <div class = "msg">当前位置</div>
      <div class="now-loaction">里庄村</div>
      <div class = "msg">所有村</div>
      <div class="villages">
       <div class="now-loaction float-left">里庄村</div>

      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>
  .village{
    width:100%;
    height:100%;
  }
  .header{
    width: 100%;
    height: 1.17rem;
    line-height: 1.17rem;
    font-size: .43rem;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    position: relative;
  }
  .removebg{
    width: .32rem;
    height: .32rem;
    background: url("../../assets/images/close.png") no-repeat center;
    background-size: cover;
    position: absolute;
    top: .4rem;
    right: .5rem;
  }
  .msg{
    height: 1.17rem;
    line-height: 1.17rem;
    font-size: .38rem;
    color: #999999;
    text-align: left;
    padding-left: .5rem;
  }
  .now-loaction{
    width:2.7rem;
    height: .88rem;
    color: #333333;
    background:#DEF3EA;
    line-height: .88rem;
    text-align: center;
    margin-left: .5rem;

  }
  .villages{
    width: 100%;
  }
  .float-left{
    float: left;
    background: #F7F7F7;
  }

</style>
