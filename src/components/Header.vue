<template>
  <el-container class="header">
    <el-header style="el-header">
      <div style="display: flex; align-items: center">
        <img
          src="../assets/images/logo.png"
          style="width: auto; height: 60px"
        />
      </div>
      <div style="display: flex; align-items: center">
        <nav style>
          <ul class="menu">
            <!-- input form method -->
            <div style="width: 590px; display: flex">
              <input
                type="text"
                class="inputone"
                placeholder="Account"
                v-model="model.loginname"
              />
              <input
                type="password"
                class="inputtwo"
                placeholder="Password"
                v-model="model.loginpassword"
              />

              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                  margin-right: 15px;
                "
              >
                <img
                  src="../assets/images/btnborder.png"
                  alt=""
                  style="width: 80px; height: 35.65px"
                  @click="Login()"
                />
                <p style="position: absolute; color: red" @click="Login()">
                  登录
                </p>
              </div>

              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                "
                @click="RegisterDialog"
              >
                <img
                  src="../assets/images/btnborder.png"
                  alt=""
                  style="width: 80px; height: 35.65px"
                />
                <p style="position: absolute; color: white">注册</p>
              </div>
              <!-- payment -->
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                  margin-left: 15px;
                "
                @click="PaymentDialog"
              >
                <img
                  src="../assets/images/btnborder.png"
                  alt=""
                  style="width: 80px; height: 35.65px"
                />
                <p style="position: absolute; color: white">Pay</p>
              </div>
            </div>

            <li class="menu__item" @click="GoToQQ()">
              <a href="#" class="menu__link">
                <span class="menu__title">
                  <span class="menu__first-word" data-hover="现场">现场</span>
                  <span class="menu__second-word" data-hover="游戏">游戏</span>
                </span>
              </a>
            </li>

            <li class="menu__item" @click="GoDownapp()">
              <a href="#" class="menu__link">
                <span class="menu__title">
                  <span class="menu__first-word" data-hover="APP">APP</span>
                  <span class="menu__second-word" data-hover="下载">下载</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- <div class="login" @click="GoLogin">
          <span style="color: white; cursor: pointer">登录</span>
        </div> -->

        <!-- green button -->
        <div class="test" @click="gotoTestGame">
          <span style="" class="btn-reflat">免费试玩</span>
        </div>
      </div>
    </el-header>

    <el-dialog
      title
      :visible.sync="dialogFormVisible"
      width="450px"
      style="top: 18%"
      custom-class="role-mask"
    >
      <div
        style="display:flex;flex:direction:column;justify-content:center;text-align:center;
  
        "
      >
        <img
          src="../assets/images/logo.png"
          alt
          style="
            width: 110px;
            height: 80px;
            position: absolute;
            top: 10px;
            padding-top: 5px;
          "
        />
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
          @submit.native.prevent
          size="small"
        >
          <el-form-item prop="name" style="margin-top: 45px">
            <el-input
              type="text"
              v-model="ruleForm.name"
              autocomplete="off"
              placeholder="请输入账号"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass" style="margin-top: 30px">
            <el-input
              placeholder="请输入密码"
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>

          <el-form-item prop="checkPass" style="margin-top: 30px">
            <el-input
              placeholder="请确认密码"
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>

          <el-form-item prop="phone" style="margin-top: 30px">
            <el-input
              placeholder="请输入手机号"
              v-model="ruleForm.phone"
              autocomplete="off"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>

          <el-button
            type
            @click="submitRegister()"
            style="
              margin-top: 20px;
              margin-bottom: 50px;
              background-color: #212121;
              color: white;
              font-size: bold;
              width: 300px;
              border: none;
            "
            >立即注册</el-button
          >
        </el-form>
      </div>
    </el-dialog>

    <!-- payment dialog -->
    <el-dialog
      title
      :visible.sync="paymentFormDialog"
      width="450px"
      style="top: 18%"
      custom-class="role-mask"
      v-if="this.$store.state.login == true"
    >
      <div
        style="display:flex;flex:direction:column;justify-content:center;text-align:center;
  
        "
      >
        <img
          src="../assets/images/logo.png"
          alt
          style="
            width: 110px;
            height: 80px;
            position: absolute;
            top: 10px;
            padding-top: 5px;
          "
        />
        <el-form class="demo-ruleForm" @submit.native.prevent size="small">
          <el-form-item prop="" style="margin-top: 35px">
            <div style="font-size: 20px; font-weight: 700">
              {{ this.$Global.myLoginInfo.loginName }}
            </div>
          </el-form-item>

          <el-form-item style="margin-top: 10px">
            <el-input
              placeholder="请输入手机号"
              v-model="ruleForm.paymentMoney"
              autocomplete="off"
              type="number"
              style="width: 300px"
              :clearable="true"
            ></el-input>
          </el-form-item>

          <el-button
            type
            @click="submitPayment()"
            style="
              margin-top: 20px;
              margin-bottom: 50px;
              background-color: #212121;
              color: white;
              font-size: bold;
              width: 300px;
              border: none;
            "
            >Payment</el-button
          >
        </el-form>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import AES from "@/api/aes";
import moment from "moment";
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入账号"));
      }
    };

    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号"));
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };

    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入确认密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致！"));
      } else {
        callback();
      }
    };

    return {
      model: {
        loginname: "",
        loginpassword: "",
        loginphone: "",
      },

      paymentFormDialog: false,
      dialogFormVisible: false,
      ruleForm: {
        pass: "",
        checkPass: "",
        name: "",
        phone: "",
        paymentMoney: "",
      },

      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.calculateTime();
  },
  methods: {
    GoToQQ() {
      document.querySelector(".poster").scrollIntoView();
    },
    GoDownapp() {
      document.querySelector(".gameapp").scrollIntoView();
    },

    //go to test game site
    gotoTestGame() {
      window.open(`http://wl2021.com/?token=`);
    },

    randomString(len, charSet) {
      charSet =
        charSet ||
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var randomString = "";
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
      }
      return randomString;
    },

    //calculate time method
    calculateTime() {
      var ts = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
      // console.log(ts)

      var unix_seconds = new Date(ts).getTime() / 1000;
      // console.log(unix_seconds)
      return unix_seconds;
    },

    //this method is for send data like key value with & and =
    createSigned(sign_data) {
      var str = "";
      // console.log("sign data is **********",sign_data)
      for (var data in sign_data) {
        str += data + "=" + sign_data[data] + "&";
      }
      //  console.log(str.slice(0, -1));
      str = this.$md5(str.slice(0, -1)).toLowerCase();
      //  console.log(str);
      return str;
    },

    // verify response msg to sign key
    verifySignature(sign_response_data) {
      var str = "";
      for (var data in sign_response_data) {
        if (data != "signKey") {
          // console.log(typeof data);
          str += data + "=" + sign_response_data[data] + "&";
        }
      }
      // console.log(str.slice(0, -1));
      str = this.$md5(str.slice(0, -1)).toLowerCase();
      // console.log(str);
      return str;
    },

    //submit payment
    submitPayment() {
      if (this.ruleForm.paymentMoney == "")
        return this.$message.warning("Money is Empty");

      if (this.ruleForm.paymentMoney < 100)
        return this.$message.warning("Money required at least 100￥");
      //  this data is for create sign key
      let sign_data = {
        callback_url_result: this.$Global.PaymentCallbackUrl,
        info_order: "WL Top Up",
        md5_key: "494d9c7ef813eca03f4bf52b09242af2",
        money_order: this.ruleForm.paymentMoney,
        name_goods: "万利充值",
        no_order: this.randomString(20),
        oid_partner: "d9fce17200317431b1b43b27508224cf0294759a",
        pay_type: "3",
        time_order: this.calculateTime(),
        userid_goods: this.$Global.myLoginInfo.loginId,
      };
      // console.log("&&&&&&&&&&&&&&",sign_data)
      var sign = this.createSigned(sign_data);
      // sign_data = Object.assign({},sign_data,{signKey:sign})
      var post_data = {
        callback_url_result: this.$Global.PaymentCallbackUrl,
        info_order: "WL Top Up",
        money_order: this.ruleForm.paymentMoney,
        name_goods: "万利充值",
        no_order: this.randomString(20),
        oid_partner: "d9fce17200317431b1b43b27508224cf0294759a",
        pay_type: "3",
        time_order: this.calculateTime(),
        userid_goods: this.$Global.myLoginInfo.loginId,
        signKey: sign,
      };
      // delete post_data.callback_url_result

      //  console.log("post data is $$$$$$$$$", post_data);
      const headers = {
        // "Access-Control-Allow-Origin": "http://192.168.1.106:8080",
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        // "Access-Control-Allow-Credentials": "true",
      };
      this.axios
        .post(this.$Global.PaymentUrl, post_data, {
          headers: headers,
        })
        .then((res) => {
          console.log("response data is ***********",res)
          var body = res.data;

          if (body.sub_status == "0000") {
            var verify_sign = this.verifySignature(body);

            //error message sign key not equal
            if (verify_sign != body.signKey) {
              return this.$message.warning("支付签名不正确。请联系客服！！");
            }
            //return success here
            this.paymentFormDialog = false;
            window.open(body.payment_qr_link);
          }
          //response error msg
          else {
            return this.$message.error(body.sub_msg);
          }

          // var msg = JSON.parse(AES.decrypt(body, en));
          console.log(body);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    //user register
    submitRegister() {
      var en = this.$Global.en;

      if (this.ruleForm.name == "") return this.$message.warning("请输入账号");
      if (this.ruleForm.pass == "") return this.$message.warning("请输入密码");
      if (this.ruleForm.checkPass == "")
        return this.$message.warning("请输入确认密码");
      if (this.ruleForm.phone == "")
        return this.$message.warning("请输入手机号");
      if (this.ruleForm.pass !== this.ruleForm.checkPass)
        return this.$message.warning("两次输入密码不一致");

      if (
        !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
          this.ruleForm.phone
        )
      ) {
        return this.$message.warning("手机号码格式不对");
      }
      var agentName = this.$Global.optioner.Agentname;
      // console.log(agentName,"name of agent is777777777")

      let data = {
        name: this.ruleForm.name,
        pw: this.$md5(this.ruleForm.pass),
        phone: this.ruleForm.phone,
        agent: agentName,
      };

      let endata = AES.encrypt(JSON.stringify(data), en);

      var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.registerurl, decryptdata)
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          //  console.log(msg, "77777777777777777777")
          if (msg.JsonData.result == "102") {
            return this.$message.warning("无此代理");
          }
          if (msg.JsonData.result == "103") {
            return this.$message.warning("已存在此帐号");
          }
          if (msg.JsonData.result == "104") {
            return this.$message.warning("注册失败");
          }
          if (msg.JsonData.result == "101") {
            this.ruleForm.name = "";
            this.ruleForm.pass = "";
            this.ruleForm.checkPass = "";
            this.ruleForm.phone = "";
            this.dialogFormVisible = false;
            return this.$message.success("注册成功");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    RegisterDialog() {
      this.dialogFormVisible = true;
    },

    PaymentDialog() {
      if (this.$store.state.login == false) {
        return this.$message.warning("Please Log in");
      }
      this.paymentFormDialog = true;
    },
    //user login method
    Login() {
      var en = this.$Global.en;
      if (this.model.loginname == "")
        return this.$message.warning("请输入账号");
      if (this.model.loginpassword == "")
        return this.$message.warning("请输入密码");

      let logindata = {
        name: this.model.loginname,
        pw: this.$md5(this.model.loginpassword),
      };

      let endata = AES.encrypt(JSON.stringify(logindata), en);

      // console.log("login endata isssssssss", endata);

      var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log("decryptdata isssssssss", decryptdata, en);

      this.axios
        .post(this.$Global.loginurl, decryptdata)
        .then((res) => {
          var body = res.data;
          // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",body)
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa",msg)
          if (msg.JsonData.code == 200) {
            this.$store.state.login = true;
            //here i am store user input name and pass to state
            this.$store.state.myAccount = this.model.loginname;
            this.$store.state.myPassword = this.model.loginpassword;
            //here i am storing user response information to global
            this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            this.$Global.myLoginInfo.loginName = msg.JsonData.username;
            // console.log(
            //   "account and password is -------->",
            //   this.$store.state.myPassword,
            //   this.$store.state.myAccount
            // );
            this.model.loginname = "";
            this.model.loginpassword = "";
            return this.$message.success("登录成功");
          } else {
            // console.log("error ocuured")
            return this.$message.error("登录失败");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 75px;
  background-color: #212121;
  display: flex;
  align-items: center;
}
.el-header {
  width: 1275px !important;
  justify-content: flex-start;
  align-items: center;
  height: 100% !important;
  display: flex;
  position: relative;
  // background:red;
}

a {
  outline: 0;
  text-decoration: none;
}
.menu {
  display: flex;
  margin-left: 20px;
  justify-content: center;
}
.menu__item {
  display: inline-block;
  white-space: nowrap;
}

.menu__item:last-child .menu__link {
  border-right: 0;
}
.menu__link {
  display: block;
  padding: 6px 30px 3px;
  /* border-right: 2px dotted #ccd7d7; */
}
.menu__link:hover .menu__first-word,
.menu__link:focus .menu__first-word {
  transform: translate3d(0, -105%, 0);
}
.menu__link:hover .menu__second-word,
.menu__link:focus .menu__second-word {
  transform: translate3d(0, 105%, 0);
}
@media screen and (min-width: 768px) {
  .menu__link {
    padding: 6px 20px 3px;
  }
}
.menu__title {
  display: inline-block;
  overflow: hidden;
}
.menu__first-word,
.menu__second-word {
  display: inline-block;
  position: relative;
  transition: transform 0.3s;
}
.menu__first-word::before,
.menu__second-word::before {
  position: absolute;
  content: attr(data-hover);
}
.menu__first-word {
  color: #fff;
  font-size: 16px;
}
.menu__first-word::before {
  top: 105%;
  color: #ffeb3b;
}
.menu__second-word {
  color: #ffeb3b;
  font-size: 16px;
}
.menu__second-word::before {
  bottom: 105%;
  color: #fff;
}

.register {
  display: flex;
  position: absolute;
  right: 10%;
  padding: 0 10px;
  // background-color: rgba(18, 172, 233, 0.774);
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 75px;
  cursor: pointer;
}
.test {
  display: flex;
  position: absolute;
  right: 0%;
  padding: 0 10px;
  background-color: rgb(179, 135, 17);
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 75px;
}

.btn-reflat {
  color: white;
  cursor: pointer;
}
</style>

<style >
.role-mask {
  border-radius: 40px;
}

.inputone {
  color: white;
  background: transparent;
  outline: none;
  border: 2px solid rgb(239, 200, 98);
  border-radius: 20px;
  margin-right: 10px;
  padding: 0px 15px;
  width: 150px;
}
.inputtwo {
  color: white;
  background: transparent;
  outline: none;
  border: 2px solid rgb(239, 200, 98);
  margin-right: 10px;
  width: 150px;
  padding: 0px 15px;
  border-radius: 20px;
}
.inputthree {
  outline: none;
  border: 1px solid red;
  margin-right: 10px;
  width: 150px;
  padding: 0px 5px;
}
.LoginBtn {
  background: red;
}
</style>