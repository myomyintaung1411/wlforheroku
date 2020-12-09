<template>
  <div class="poster">
    <div class="posterthreediv">
      <!-- first card -->
      <div class="main_card">
        <div class="top_text">
          <span style="font-size: 24px">万利国际</span>
          <span style="font-size: 16px"
            >您想要的都在这里，平台有实力，游戏质量有保障</span
          >
        </div>
        <div style="height: 400px; background-color: grey; width: 100%">
          <img
            src="../assets/images/11.png"
            alt
            style="height: 400px; width: 100%"
          />
        </div>

        <div class="btndiv">
          <div
            style="display: flex; justify-content: center; margin-right: 10px"
            @click="goToPlayGame"
          >
            <span class="btnone">登录游戏</span>
          </div>

          <div
            @click="gotoTestPlay"
            style="display: flex; justify-content: center; margin-left: 10px"
          >
            <span class="btntwo">立即试玩</span>
          </div>
        </div>
      </div>
      <!-- end -->
      <div class="main_card">
        <div class="top_text">
          <span style="font-size: 24px">万利国际</span>
          <span style="font-size: 16px"
            >多玩少玩，多少要玩，早赢晚赢，早晚要赢</span
          >
        </div>
        <div style="height: 400px; background-color: grey; width: 100%">
          <img
            src="../assets/images/22.png"
            alt
            style="height: 400px; width: 100%"
          />
        </div>

        <div class="btndiv">
          <div
            style="display: flex; justify-content: center; margin-right: 10px"
            @click="goToPlayGame"
          >
            <span class="btnone">登录游戏</span>
          </div>

          <div
            @click="gotoTestPlay"
            style="display: flex; justify-content: center; margin-left: 10px"
          >
            <span class="btntwo">立即试玩</span>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
import AES from "../api/aes";
export default {
  methods: {
    colorChange() {},
    //click and go to play ground of wl game site
    goToPlayGame() {
      if (this.$store.state.login == false) {
        return this.$message.warning("请先登录");
      } else {
        var gameEn = this.$Global.gameEn;
        let data = {
          name: this.$store.state.myAccount,
          password: this.$store.state.myPassword,
        };
        var endata = AES.gameEncrypt(JSON.stringify(data), gameEn);
        window.open(`http://wl2021.com/?token=${endata}`);
      }
    },

    gotoTestPlay() {
      window.open(`http://wl2021.com/?token=`);
    },
  },
};
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 700px;
  // background: url(../assets/darkbg.jpg) no-repeat;
  background: rgb(78, 78, 78);
  background-size: 100% 100%;
  display: flex;
}
.posterthreediv {
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100% !important;
  display: flex;
}

.btnone {
  cursor: pointer;
  width: 150px;
  height: 60px;
  margin-top: 10px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
}
.btntwo {
  cursor: pointer;
  width: 150px;
  height: 60px;
  margin-top: 10px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
}
.btntwo:hover {
  color: #000;
  background-color: #fff;
  font-weight: bold;
}
.main_card {
  height: 580px;
  background-color: white;
  width: 500px;
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
}
.top_text {
  height: 100px;
  width: 100%;
  background-color: #212121;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  color: white;
  flex-direction: column;
  padding-left: 15px;
}
.btndiv {
  height: 80px;
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: center;
}
</style>
