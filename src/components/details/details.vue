<template>
   <div class="detailContent">
    <header class="head">农户详情 <span class="back"></span></header>
    <div class = "famerDetail">
      <div class="row" v-for="item in dabm" :key="item.id">
        <div  class="dqbm">{{item.key}}:</div>
        <input type="text" v-model="item.value"  class="dqbmvalue">
      </div>
    </div>
    <div class="title">
      <span class="title-img"></span>
      <div class="title-content">家庭情况</div>
    </div>
    <div class="famercontent">
         <div class="row" v-for="item in people" :key="item.id">
            <div  class="dqbm">{{item.key}}:</div>
            <input type="text" v-model="item.value"  class="dqbmvalue">
      </div>
    </div>
    <div class="title">
      <span class="title-img famly"></span>
      <div class="title-content">家庭成员</div>
      <span class="addPeople"></span>
    </div>
   </div>
</template>
<script>
export default {
  data(){
    return{
      value:'',
      dabm:[
        {
          key:"当前地块编码",
          value:"123456789",
          id:1,
        },
         {
          key:"当前农户编码",
          value:"0012",
          id:2,
        },

      ],
      people:[
         {
          key:"家庭人口数",
          value:"8人",
          id:1,
        },
        {
          key:"户籍人数",
          value:"8人",
          id:2,
        },
        {
          key:"承包地面积",
          value:"7.61亩",
          id:3,
        },
         {
          key:"其他经营",
          value:"养羊",
          id:4,
        },
         {
          key:"是否常住村",
          value:"是",
          id:5,
        },
         {
          key:"村内房屋",
          value:"住",
          id:6,
        },
      ],
    }
  }
}
</script>
<style lang = "less" scope>
  .detailContent{
    width:100%;
    height:100%;
    font-family: PingFangSC-Regular;
    font-size: .4rem;
    color: #333333;
    letter-spacing: 0;
    .head{
      height: 1rem;
      width: 100%;
      text-align: center;
      line-height: 1rem;
      position: relative;
      .back{
        display: block;
        width: .5rem;
        height: .5rem;
        background:url("../../assets/images/back.png") no-repeat center;
        background-size: cover;
        position:absolute;
        left: .5rem;
        top: .3rem;
      }

    }
    .famerDetail, .title{
       width: 90%;
       position: relative;
      margin: 0 auto;
    }
    .row{
      width: 100%;
      height: 1rem;
    }
    .dqbm{
      width: 3rem;
      height: 1rem;
      line-height: 1rem;
      font-size: .37rem;
      color: #333333;
      float: left;
      text-align: left;


    }
    .dqbmvalue{
      height: 1rem;
      width: calc(100% - 3rem);
      float: right;
      text-align: right;
      color: #999999;
       outline:medium
    }
    .title-content{
      height: 1rem;
      width: 3rem;
      color: #2AA145;

      line-height: 1rem;
      text-align: center;
      /* padding-left: .2rem; */
     /* background:url("../../assets/images/home.png") no-repeat left center;
     background-size: 50%; */

    }
    .title-img{
      width: .4rem;
      height: .4rem;
      display: block;
      position: absolute;
      background:url("../../assets/images/home.png") no-repeat left center;
      background-size: cover;
      left: 0;
      top: .3rem;
    }
    .famercontent{
      width:90%;
      margin: 0 auto;
    }
    .famly{
      background:url("../../assets/images/homes.png") no-repeat left center;
      background-size: cover;
    }
    .addPeople{
      display: block;
      width: .4rem;
      height: .4rem;
      background:url("../../assets/images/add.png") no-repeat left center;
      background-size: cover;
      position: absolute;
      right: .2rem;
      top: .3rem;
    }


  }
</style>
