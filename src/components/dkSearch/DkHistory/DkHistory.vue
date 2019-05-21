<template>
  <div class="history">
      <div class="historySign">
        <span>历史记录</span>
        <span class="remove" v-on:click ="alert()"></span>
      </div>
      <div class="historyChilds">催明生</div>

      </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    alert () {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '我是标题',
        content: '我是内容',
        confirmBtn: {
          text: '确定按钮',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消按钮',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          // this.$createToast({
          //   type: 'warn',
          //   time: 1000,
          //   txt: '点击确认按钮'
          // }).show()
        },
        onCancel: () => {
          // this.$createToast({
          //   type: 'warn',
          //   time: 1000,
          //   txt: '点击取消按钮'
          // }).show()
        }
      }).show()
    }
  }

}

</script>
<style lang="less" scope>
  .history{
    width:91%;
    height:calc(100% - 1rem);
    margin: 0 auto;
    .historySign{
      height: 1.17rem;
      line-height: 1.17rem;
      font-size: .38rem;
      color: #999999;
      text-align: left;
      // padding-left: .5rem;
    }
    .remove{
      float: right;
      display: block;
      background:url("../../../assets/images/remove.png") no-repeat center;
      background-size: cover;
      width: .53rem;
      height: .53rem;
      margin-top: .3rem;
    }
  }
  .historyChilds{
    padding:.27rem  .48rem;
    color: #666666;
    background: #F7F7F7;
    text-align: center;
    float: left;
    font-size: .38rem;
  }

</style>
