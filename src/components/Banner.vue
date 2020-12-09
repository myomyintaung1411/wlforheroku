<template>
  <div style="width: 100%" class="banner">

    <div style="height: 450px;">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in banners" :key="item.id">
           <img :src="item.image" style="width:100%;height:450px;"   />
        </el-carousel-item>
      </el-carousel>
    </div>


    <div style="height:200px;width:300px;position:fixed;right:1%;z-index:1000;bottom:10%;"
    @click="Service()"
    >
      <img src="../assets/images/service.png" alt="" style="width:100%;height:auto">
    </div>
    <!-- end -->
  </div>
</template>

<script>
import { Base64 } from 'js-base64'

export default {
  data() {
    return {
      banners: [
        {
          id: 1,
          image: require("../assets/images/d1.png"),
        },
        {
          id: 2,
          image: require("../assets/images/d5.jpg"),
        },
        {
          id: 3,

          image: require("../assets/images/d3.png"),
        },
        {
          id: 4,
          image: require("../assets/images/d4.jpg"),
        },
         {
          id: 5,
          image: require("../assets/images/dd.jpg"),
        },
      ],
    };
  },
  methods: {
   
randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString;
  },
  doEncrypt() {
    
    let data = {
      acc: this.$store.state.myAccount,
      pwd: this.$md5(this.$store.state.myPassword)
    }
    // let data ={
    //   acc:"admin",
    //   pwd:this.$md5("111111")
    // }
    let data1 = Base64.encode(JSON.stringify(data))
    let data2 = data1.substring(0, 8)
    let data3 = data1.substring(8)
    let add8 = data2 + this.randomString(8)
    let token = this.randomString(9) + add8 + data3
    // console.log(data1, data2, data3, add8, token)
    return token
  },

 
 //onliine service pic click and go to customer service
    Service() {
      if(this.$store.state.login == false){
        return this.$message.warning("请先登录")
      } else{
        let token =  this.doEncrypt()
        window.open(`http://hn2210.com/lt/?token=${token}`)
      }

      
    },
  
  },
};
</script>

<style lang="scss" scoped>





</style>
