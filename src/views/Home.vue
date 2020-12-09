<template>
  <div class="home">

    <Header />

    <Banner />
    <Scrollbar />
    <div style="height: 240px">
      <img
        src="../assets/images/description.png"
        alt=""
        style="height: 100%; width: 100%"
      />
    </div>
    <Poster />
    <Gameapp />
    <Qqflash />
    <Footertest />
  </div>
</template>
       
<script>
import AES from "../api/aes";
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Scrollbar from "@/components/Scrollbar.vue";
import Banner from "@/components/Banner.vue";
import Poster from "@/components/Poster.vue";
import Gameapp from "@/components/Gameapp.vue";
import Qqflash from "@/components/Qqflash.vue";
import Footertest from "@/components/Footertest.vue";

export default {
  name: "Home",
  components: {
    Header,
    Scrollbar,
    Banner,
    Poster,
    Gameapp,
    Qqflash,
    Footertest,
  },

  methods: {
    GetAgentdata(id) {
           var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = (AES.encrypt(data,en))
  
      var decryptdata = JSON.parse(AES.decrypt(endata,en))
      // console.log(decryptdata,"data of decryptdata")
      this.axios
        .post(this.$Global.agentUrl, decryptdata)
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
            //  console.log(msg, "response msg of created")
         if(msg.JsonData.code == 200){
           //saving first time creted agentid and name to use in register section
           this.$Global.optioner.Agentid = msg.JsonData.Id
            this.$Global.optioner.Agentname = msg.JsonData.name
         }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    let reg1 = new RegExp("(^|&)" + "id" + "=([^&]*)(&|$)", "i");
    let r1 = window.location.search.substr(1).match(reg1);
    if (r1 !== null) {
      var id = r1[2];
    }

    this.GetAgentdata(id);
  },
};
</script>

<style lang="scss" >
</style>
