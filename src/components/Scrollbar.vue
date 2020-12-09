<template>
  <div style class="scrollmaindiv">
    
    <div class="scrolldiv">
      <div style="display: flex; align-items: center; margin-left: 15px;">
        <i
        class="iconfont"
          style="
           font-size:24px;
           color:#fff;
           margin-top:2px;
          "
        >&#xe610;</i>
      </div>
      <div style="width:1250px;">
        <marquee
          onmouseover="this.stop();"
          onmouseout="this.start();"
          style="cursor: pointer; color: white"
          @click="ShowNotice()"
          >{{this.scrolldata}}</marquee
        >
      </div>
    </div>
  </div>
</template>


<script>
import AES from "../api/aes";
export default {
  
 data() {
   return {
     scrolldata: "",
     id: this.$Global.myLoginInfo.loginId
   }
 },
  methods: {
    // here i am sending userlogin id to get scroll data
    GetScrollData(id){
        var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = (AES.encrypt(data,en))
      var decryptdata = JSON.parse(AES.decrypt(endata,en))
    
      this.axios.post(
        this.$Global.scrollData,decryptdata
      ).then((res)=>{
      
           var body = res.data;
           var msg = JSON.parse(AES.decrypt(body, en));
         
             if(msg.JsonData.code == 200){
          
            this.scrolldata = msg.JsonData.msg
         } else{
           this.scrolldata = "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！"
         }

      }).catch((e)=>{
        console.log(e)
      })
    }
  },
  created () {

    this.GetScrollData(this.id);
  },
};
</script>

<style lang="scss" scoped>
.scrollmaindiv {
  height: 30px;
  background-color: #757575;
  display: flex;
  align-items: center;
  width: 100%;
  text-align: center;
  justify-content: center;
}
.scrolldiv {
  width: 1275px !important;
  background-color: #757575;
  justify-content: space-between;
  align-items: center;
  height: 100% !important;
  display: flex;
}
</style>

