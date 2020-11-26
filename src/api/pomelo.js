import pomelo from "./PomeloClient.js";
import global from "./global";
import ws from "./ws2";
import AES from '../api/aes'
var nHeartBeat = 0;
var s_timer;
var p_server = new Pomelo();
var p_server2 = new Pomelo();

function conn(cb) {
  var loginInfo = JSON.parse(localStorage.getItem("login_info"));
  var msg = { uid: loginInfo.login_id };
  var msg2 = { userId: loginInfo.login_id, token: loginInfo.login_token, type: 1 }; //type: 1为登录聊天服务器
  p_server.init(
    { host: window.g.ip, port: window.g.pomelo_ws_port, log: true },
    function() {
      p_server.request("gate.gateHandler.queryEntry", msg, function(res) {
        p_server.disconnect();
        if (res.code == 200) {
          p_server2.init(
            { host: res.host, port: res.port, log: true },
            function(res) {
              p_server2.request("connector.entryHandler.entry", msg2, function(
                res
              ) {
                // console.log("connector:",res);
                if (res.code == 200) startTimer();
                cb(null, res);
              });
            }
          );
        } else {
          cb(null, res);
        }
      });
    }
  );
}

p_server2.on("close", function(e) {
  // 连接关闭
  console.log("--------pomelo onClose------------");
  var interval = setInterval(() => {
    conn(function(err, res) {
      if (res.code == 200) clearInterval(interval);
    });
  }, 5000);
});

p_server2.on("onMsg", function(e) {
  // 被踢开
  console.log("----onMsg------:", e);
  ws.doData(e); //监听，有新消息事件
});

p_server2.on("onKick", function(e) {
  // 被踢开
  console.log("--------pomelo onKick------------");
  alert("亲,有相同帐号登录,你被踢出来了!");
  kick();
});

function kick() {
  nHeartBeat = 0;
  p_server2.disconnect();
  clearInterval(s_timer);
  window.location.reload(true);
}

var n = 0;
function send(msg) {
  n = n + 1;
  // console.log("--------------->send: ", n, msg);
  let en = global.en;
  let msgSend = AES.encrypt(JSON.stringify(msg), en);
  var route = "chat.chatHandler.onMsg"; //"agent.agentHandler.getMsg";
  p_server2.request(route, msgSend, function(res) {
     console.log("------------->accept: ", n, res);
    ws.doData(res);
  });
}

function startTimer() {
  s_timer = setInterval(() => {
    chkHeartBeat(p_server2);
  }, 5000);
}

function chkHeartBeat(server) {
  if (nHeartBeat > 30) {
    console.log("自检测跳线了");
    alert("因网络信号不好, 需重新登录!");
    server.disconnect();
    clearInterval(s_timer);
    window.location.reload(true);
  }
  nHeartBeat += 5;
  var msg = { uid: global.optioner.Id }; //记得改
  var route = "agent.agentHandler.chkHardBean";
  server.request(route, msg, function(data) {
    if (data.code == "07") nHeartBeat = 0;
  });
}
export default {
  conn,
  send,
  kick,
};
