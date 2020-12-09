<template>
  <div class="gameapp">
    <div class="threelayerdiv">
      <!-- up div -->
      <div style="height: 250px; display: flex">
        <div
          style="
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
          "
        >
          <div class="anytime_text">ANYTIME ANYWHERE MOBILE BETTING</div>
          <div
            style="
              height: 100px;
              width: 100%;
              display: flex;
              align-items: center;
              padding: 0 100px;
              color: white;
            "
          >
            全新手机服务体验，新颖的设计更好玩更便捷，为玩家呈现了多款平台热门游戏，这里集聚各国精英服务团队，更多的高尚奢华待遇，为您打造随时随地足不出户游戏新人生！
          </div>
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              height: 50px;
            "
          >
          </div>
        </div>
      </div>
      <!-- below -->
      <div
        style="
          height: 150px;
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          background: #2121;
        "
      >
        <div
          style="
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <img
            src="../assets/images/qr1.png"
            style="height: 250px"
            class="qranimation"
          />
        </div>

        <div
          style="
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <img
            src="../assets/images/qr2.png"
            style="height: 250px"
            class="qranimation"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.gameapp {
  // background: url(../assets/darkbg.jpg) no-repeat;
  background: rgb(78, 78, 78);

  background-size: 100% 100%;
  height: 500px;
  position: relative;
  width: 100%;
  text-align: center;
}
.threelayerdiv {
  height: 500px;
  max-width: 1000px !important;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  background-color: #212121;
  padding: 10px;
  position: relative;
}
.anytime_text {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
  font-family: timenewsroman;
  padding-top: 40px;
  color: white;
}
.btn {
  width: 200px;
  height: 40px;
  border: 2px solid #fff;
  background: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
}

.qranimation:hover {
  -webkit-animation: pulse 1s 0.2s ease both;
  -moz-animation: pulse 1s 0.2s ease both;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes pulse {
  0% {
    -moz-transform: scale(1);
  }
  50% {
    -moz-transform: scale(1.1);
  }
  100% {
    -moz-transform: scale(1);
  }
}
</style>