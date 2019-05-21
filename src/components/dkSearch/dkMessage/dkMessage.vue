<template>
  <div class="dkcontent">
      <div class="message margin-top">
        <span class="dkName">平口（3.51亩）</span>
        <span class="dkloaction">查看位置 ></span>
      </div>
      <div class="message">
          <span class="messageSpan">地块编码：*0200012     承包地</span>
      </div>
       <div class="message">
          <span class="messageSpan">农户姓名及编码：催明生 00013</span>
      </div>
      <div  v-if="shouImg" class="contantBg"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      shouImg:false,
    }
  }
}
</script>
<style lang = "less" scope>
  .dkcontent{
    width: 95%;
    height: calc(100% - 1.5rem);
    margin: 0 auto;
    .margin-top{
      margin-top: .5rem;
    }
    .contantBg{
      width: 100%;
      height: 100%;
      background: url("../../../assets/images/nodata.png") no-repeat center;
      /* background-size: cover; */
    }
  }
  .message{
    width: 100%;
    height: 1rem;
     font-family: PingFangSC-Regular;
    .dkName{
      font-size: .4rem;
      color: #2AA145;
      letter-spacing: 0;
      line-height:1rem;
      float: left;
    }
    .dkloaction{
      font-size: .4rem;
      color: #999999;
      float: right;
      line-height:1rem;
    }
    .messageSpan{
      font-size:.4rem;
      color: #999999;
      letter-spacing: 0;
      line-height: 1rem;
      float: left;
    }
  }

</style>
