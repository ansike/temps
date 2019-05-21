<template>
  <div class="content">
    <div class="box" >
      <div class="iptBox">
         <span class="back" v-on:click="back()"></span>
        <input type="text" v-model="ipt" class="searchBox" placeholder="请输入要查询的地块" >
        <span class="clear" v-on:click="clear()"></span>
      </div>
      <span class="cancle"  v-on:click = "dosearch()">搜索</span>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ipt:'',
    }
  },
  methods:{
  back(){
     this.$router.go(-1)
  },
  clear(){
      this.ipt = '';
    },
  dosearch(){
    this.$router.push({path: '/Dkmessage'})
  }
  }
}
</script>
<style lang="less" scope>
  .content{
    width: 100%;
    height: 100%;
  }
  .box{
    width: 100%;
    height: 1rem;
    display: flex;

  }
  .searchBox{
    width: calc(100% - 1.2rem);
    height: .83rem;
    border: .03rem solid #999999;
    margin-top: .1rem;
    float: left;
    padding-left: .5rem;
    box-sizing: border-box;
    margin-left: .2rem;

  }
  .iptBox{
    position: relative;
    width:calc(100% - 2rem)
  }
  .clear{
    position: absolute;
    width: .32rem;
    height: .32rem;
    background: url("../../assets/images/clear.png") no-repeat center;
    background-size: cover;
    top: .4rem;
    right: .2rem;
  }
  .back{
    display: block;
    float: left;
    width: .5rem;
    height: .5rem;
    background:url("../../assets/images/back.png") no-repeat center;
    background-size: cover;
    font-size: .4rem;
    color: #999999;
    margin-top: .35rem;
    margin-left: .5rem;
  }
  .cancle{
    display: block;
    height: 1rem;
    float: left;
    text-align: center;
    line-height: 1rem;
    width: 2rem;
    color: #999999;
    font-size: .4rem;
  }
</style>
