<template>
  <div class="qq">
    <div class="sectiondiv">
      <!-- left side div -->
      <!-- 1 -->

      <div class="Qqleft" v-if="isActive1">
        <div class="Qqdiv" :class="{ fadeIn: isActive1 }">
          <div class="Qqtext">真人娱乐</div>
          <div class="Qqline"></div>

          <div class="Qqpara">
            我们的真人娱乐玩法众多。如百家乐，骰宝，龙虎以及轮盘。您可以畅游真人娱乐的精彩世界。当然，您也可以选择容易上手的线上老虎机或小游戏消遣时光。
          </div>
          <!-- <div class="btn_div" style>形象代言：贝克汉姆</div> -->
        </div>
        <div class="Qqimgdiv" :class="{ girlIn: activeTab === 1 }">
          <img
            src="../assets/girlcasino.png"
            class="img"
            alt
            style="width: 400px; height: 400px"
          />
        </div>
      </div>

      <!-- 2 -->

      <div class="Qqleft" v-if="isActive2">
        <div class="Qqdiv" :class="{ fadeIn: isActive2 }">
          <div class="Qqtext">客服服务</div>
          <div class="Qqline"></div>
          <div class="Qqpara">
            一丝真诚，胜过千两黄金，一丝温暖能抵万里寒霜，一声问候送来温暖甜蜜，捎去我万般心意，您的快乐是我最大的心愿~
            欢迎莅临『wl国际娱乐城』，您的小可爱 萌萌 很高兴能为您服务。
          </div>
          <!-- <div class="btn_div" style>形象代言：贝克汉姆</div> -->
        </div>
        <div class="Qqimgdiv" :class="{ girlIn: activeTab === 2 }">
          <img
            src="../assets/images/girlpng2.png"
            class="img"
            alt
            style="width: 300px; height: 400px"
          />
        </div>
      </div>

      <!-- 3 -->

      <div class="Qqleft" v-if="isActive3">
        <div class="Qqdiv" :class="{ fadeIn: isActive3 }">
          <div class="Qqtext">安全保密</div>
          <div class="Qqline"></div>
          <div class="Qqpara">
            温馨提示：为了您的账号安全，请您保管好自己的账户资料，切勿透漏给其他人知道喔。
            资金安全稳定。 上下分及时。保证让每一位顾客安全无忧。
          </div>
          <!-- <div class="btn_div" style>形象代言：贝克汉姆</div> -->
        </div>
        <div class="Qqimgdiv" :class="{ girlIn: activeTab === 3 }">
          <img
            src="../assets/ladycasino.png"
            class="img"
            alt
            style="width: auto; height: 400px"
          />
        </div>
      </div>

      <!-- 4 -->

      <div v-if="isActive4" class="Qqleft">
        <div class="Qqdiv" :class="{ fadeIn: isActive4 }">
          <div class="Qqtext">彩票游戏</div>
          <div class="Qqline"></div>
          <div class="Qqpara">
            彩票游戏玩法简单、赔率多样化、福彩3D、体彩排列三、各地区时时彩及香港特区六合彩，连线同步即时开彩。
          </div>
          <!-- <div class="btn_div" style>形象代言：贝克汉姆</div> -->
        </div>
        <div class="Qqimgdiv" :class="{ girlIn: activeTab === 4 }">
          <img
            src="../assets/images/girlcasino6.png"
            class="img"
            alt
            style="width: auto; height: 400px"
          />
        </div>
      </div>

      <!-- 5 -->

      <div v-if="isActive5" class="Qqleft">
        <div class="Qqdiv" :class="{ fadeIn: isActive5 }">
          <div class="Qqtext">公司简介</div>
          <div class="Qqline"></div>
          <div class="Qqpara">
            万利娱乐平台拥有数百位训练有素的专业荷官、真实的赌场环境、稳定的高端设备、专业的技术支持，保障了平台的稳定运营，给予玩家仿佛置身于现场的绝妙体验。并且支持多平台接入，无论玩家目前身处何处，随时可尽情享受游戏的乐趣。
          </div>
          <!-- <div class="btn_div" style>形象代言：贝克汉姆</div> -->
        </div>
        <div class="Qqimgdiv" :class="{ girlIn: activeTab === 5 }">
          <img
            src="../assets/images/girl3png.png"
            class="img"
            alt
            style="width: auto; height: 400px"
          />
        </div>
      </div>

      <!-- img button div -->
      <div
        style="
          width: 275px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        "
      >
        <div
          class="btnone"
          @click="ChangeStyle1"
          :class="{ 'is-active': activeTab === 1 }"
        >
          <div
            style="display: flex; flex-direction: column; padding-left: 15px"
          >
            <span style="color: white; font-size: 16px">真人娱乐</span>
            <span style="color: #fff; font-size: 14px">Live Entertainment</span>
          </div>
        </div>

        <!-- button -->
        <div
          class="btnone"
          @click="ChangeStyle2"
          :class="{ 'is-active': activeTab === 2 }"
        >
          <div
            style="display: flex; flex-direction: column; padding-left: 15px"
          >
            <span style="color: white; font-size: 16px">客服服务</span>
            <span style="color: #fff; font-size: 14px">Customer Service</span>
          </div>
        </div>

        <!-- button -->
        <div
          class="btnone"
          @click="ChangeStyle3"
          :class="{ 'is-active': activeTab === 3 }"
        >
          <div
            style="display: flex; flex-direction: column; padding-left: 15px"
          >
            <span style="color: white; font-size: 16px">安全保密</span>
            <span style="color: #fff; font-size: 14px">Security</span>
          </div>
        </div>
        <!-- button -->
        <div
          class="btnone"
          @click="ChangeStyle4"
          :class="{ 'is-active': activeTab === 4 }"
        >
          <div
            style="display: flex; flex-direction: column; padding-left: 15px"
          >
            <span style="color: white; font-size: 16px">彩票游戏</span>
            <span style="color: #fff; font-size: 14px">Lottery Game</span>
          </div>
        </div>
        <!-- button -->
        <div
          class="btnone1"
          @click="ChangeStyle5"
          :class="{ 'is-active': activeTab === 5 }"
        >
          <div
            style="display: flex; flex-direction: column; padding-left: 15px"
          >
            <span style="color: white; font-size: 16px">公司简介</span>
            <span style="color: #fff; font-size: 14px">Company Profile</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
    };
  },
  methods: {
    ChangeStyle1() {
      this.activeTab = 1;
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    },
    ChangeStyle2() {
      this.activeTab = 2;
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    },
    ChangeStyle3() {
      this.activeTab = 3;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
      this.isActive4 = false;
      this.isActive5 = false;
    },
    ChangeStyle4() {
      this.activeTab = 4;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = true;
      this.isActive5 = false;
    },
    ChangeStyle5() {
      this.activeTab = 5;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.Qqleft {
  width: 800px;
  height: 100%;
  display: flex;
}
.Qqdiv {
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
}
.Qqtext {
  padding: 70px 0px 0px 30px;
  font-size: 20px;
  font-weight: bold;
  color: #eee;
}
.Qqline {
  height: 2px;
  width: 320px;
  background: #ccc;
  margin: 10px 0px 0px 30px;
}
.Qqpara {
  margin: 20px 0px 0px 30px;
  font-size: 14px;
  color: #eee;
  line-height: 24px;
}
.Qqimgdiv {
  width: 500px;
  height: 100%;
}

.qq {
  // background: url(../assets/darkbg.jpg) no-repeat;
  background: rgb(78, 78, 78);
  background-size: 100% 100%;
  width: 100%;
  height: 550px;

  position: relative;
  display: flex;
  background-size: 100% 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.sectiondiv {
  display: flex;
  width: 100%;
  height: 400px;
  background-color: #212121;
  max-width: 1000px !important;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
}

.btn_div {
  width: 200px;
  height: 40px;
  background: #0f0f0f;
  margin: 40px 0px 0px 20px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
}

.is-active {
  background: #423f3f;
}

.btnone {
  height: 80px;
  width: 100%;
  // background: rgba(192, 192, 192, 0.067);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #fff;
}
.btnone1 {
  height: 80px;
  width: 100%;
  // background: rgba(192, 192, 192, 0.067);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
}

.fadeIn {
  -webkit-animation: fadeInLeftBig 1s 0.2s ease both;
  -moz-animation: fadeInLeftBig 1s 0.2s ease both;
}
@-webkit-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}

.girlIn {
  -webkit-animation: fadeInRight 1s 0.2s ease both;
  -moz-animation: fadeInRight 1s 0.2s ease both;
}
@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes fadeInRight {
  0% {
    opacity: 0;
    -moz-transform: translateX(20px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0);
  }
}
</style>