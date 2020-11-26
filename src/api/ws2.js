/*eslint-disable*/
import store from "../store/index";
import $Global from "../api/global";
import $pomelo from "../api/pomelo";
import moment from "moment";
import AES from '../api/aes'
function doData(rData) {
  let en = $Global.en;
  rData = JSON.parse(AES.decrypt(rData, en));
  console.log("doData:", rData, rData.router);
  switch (rData.router) {
    case "Login":
      SetMyCenterForm(rData);
      break;
    case "getChatMemberInfo":
      getChatMemberInfo(rData);
      break;
    case "sendChat":
      sendChat(rData);
      break;
    case "getChatForInRoom":
      getChatForInRoom(rData);
      break;
    case "getChat":
      getChat(rData);
      break;
    case "acceptChatInfo":
      acceptChatInfo(rData);
      break;
  }
}

function getChatMemberInfo(rData) {
  var data = rData.JsonData;
  let totalMemberCount = rData.totalItem;
  //测试在线
  // data[2].onLineState = 1
  // data[7].onLineState = 1
  // data[4].noReadItem = 5
  // data[1].noReadItem = 3
  // data[3].noReadItem = 6
  // data[6].noReadItem = 1
  // data[7].noReadItem = 9
  data.sort(compare("noReadItem")).reverse();
  let obj = { memberListData: data, totalMemberCount: totalMemberCount };
  $Global.listDataMember = obj;
  store.commit("setChatMemberListData", $Global.listDataMember);
}

function sendChat(rData) {
  var data = rData.JsonData;
  // console.log("Send Chat Return ", data);
  // if(data.result == "ok"){
  //   this.$Global.chatRecord.push()
  // }
  // return "notok"

  // // 测试数据
  // let testData = { router:"getChat", JsonData:{ "id": 1009, "msg" : "这是测试消息FromMember", "msgType" : 0, "userId": "19510", "name":"222", "nickname": "" }}
  // let TestData = JSON.parse(JSON.stringify(testData))

  //   let GListDataMember = $Global.listDataMember.memberListData
  //   let GlistTotal = $Global.listDataMember.totalMemberCount
  //   for(let i = 0; i<GListDataMember.length; i++){
  //     if(GListDataMember[i].userId == TestData.JsonData.userId){
  //       GListDataMember[i].noReadItem += 1
  //       $Global.listDataMember = {}
  //       let obj = {memberListData: GListDataMember, totalMemberCount: GlistTotal}
  //       $Global.listDataMember = obj
  //       store.commit("setChatMemberListData", $Global.listDataMember)
  //     }else{
  //       if($Global.noticeMessage === 0){
  //         $Global.noticeMessage.push(TestData.JsonData)
  //         speckText()
  //         store.commit("setNoticeMessage", $Global.noticeMessage)
  //         }else{
  //           let flag  = false
  //           for(let l in $Global.noticeMessage){
  //             if($Global.noticeMessage[l].userId == TestData.JsonData.userId){
  //               flag = true
  //             }
  //           }
  //           if(flag == false){
  //             $Global.noticeMessage.push(TestData.JsonData)
  //             speckText()
  //             store.commit("setNoticeMessage", $Global.noticeMessage)
  //           }
  //         }
  //     }
  //   }
  // // }
}

function getChat(rData) {
  console.log("get chat >>>>>>>>>>>>", rData);
  var data = rData.JsonData;
  // 测试数据
  // let testData = { router:"getChat", JsonData:{ "id": 1009, "msg" : "这是测试消息FromMember", "msgType" : 0, "userId": "19510", "name":"222", "nickname": "" }}
  // let TestData = JSON.parse(JSON.stringify(testData))
  let inRoom = store.state.inRoom;
  console.log("in Room >>>>", inRoom);
  if (inRoom.userId == data.from_id) {
    let nowRoomMsg = {
      from_id: data.from_id,
      member_name: inRoom.name,
      msg: data.msg,
      msgType: data.msgType,
      id: data.Id,
      time: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
      to_id: $Global.optioner.Id,
    };
    $Global.chatRecord.push(nowRoomMsg);
    store.commit("setOneToOneChatRecord", $Global.chatRecord);
    let recieveMsgId = [];
    recieveMsgId.push(data.Id);
    let sendStr = {
      router: "acceptChatInfo",
      JsonData: { arr_msg_id: recieveMsgId },
    };
    $pomelo.send(sendStr);
  } else {
    let GListDataMember = $Global.listDataMember.memberListData;
    let GlistTotal = $Global.listDataMember.totalMemberCount;
    for (let i = 0; i < GListDataMember.length; i++) {
      if (GListDataMember[i].userId == data.userId) {
        GListDataMember[i].noReadItem += 1;
        $Global.listDataMember = {};
        let obj = {
          memberListData: GListDataMember,
          totalMemberCount: GlistTotal,
        };
        $Global.listDataMember = obj;
        store.commit("setChatMemberListData", $Global.listDataMember);
      } else {
        if ($Global.noticeMessage === 0) {
          $Global.noticeMessage.push(data);
          speckText();
          store.commit("setNoticeMessage", $Global.noticeMessage);
        } else {
          let flag = false;
          for (let l in $Global.noticeMessage) {
            if ($Global.noticeMessage[l].userId == data.userId) {
              flag = true;
            }
          }
          if (flag == false) {
            $Global.noticeMessage.push(data);
            speckText();
            store.commit("setNoticeMessage", $Global.noticeMessage);
          }
        }
      }
    }
  }
}

function getChatForInRoom(rData) {
  var data = rData.JsonData;
  $Global.chatRecord = [];
  for (let i = 0; i < data.length; i++) {
    data[i].time = moment(data[i].time).format("YYYY-MM-DD hh:mm:ss");
    // data[i].from_id == "1" ? data[i].isMe = "1" : data[i].isMe = "2"
  }
  $Global.chatRecord = data;
  store.commit("setOneToOneChatRecord", $Global.chatRecord);

  if (data.length != 0) {
    let recieveMsgId = [];
    for (let i = 0; i < data.length; i++) {
      recieveMsgId.push(data[i].msg_id);
    }
    let sendStr = {
      router: "acceptChatInfo",
      JsonData: { arr_msg_id: recieveMsgId },
    };
    $pomelo.send(sendStr);
  }
}

function acceptChatInfo(rData) {
  var data = rData.JsonData;
  // console.log("Accept Chat Return", data);
}

function compare(attribute) {
  return function(obj1, obj2) {
    var val1 = obj1[attribute];
    var val2 = obj2[attribute];
    if (val1 < val2) {
      return -1;
    } else if (val1 > val2) {
      return 1;
    } else {
      return 0;
    }
  };
}

function speckText(str) {
  //var request=  new URLRequest();
  // var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(str);        // baidu
  //url = "http://translate.google.cn/translate_tts?ie=UTF-8&tl=zh-CN&total=1&idx=0&textlen=19&prev=input&q=" + encodeURI(str); // google
  // request.url = encodeURI(url);
  // request.contentType = "audio/mp3"; // for baidu
  //request.contentType = "audio/mpeg"; // for google

  // let url = "../../public/newMsg.mp3"
  // var n = new Audio(url);
  // n.src = url;
  // n.play();

  var mp3 = "./newMsg.mp3";
  var mp3 = new Audio(mp3);
  mp3.play(); //播放 mp3这个音频对象
  //暂停
  // mp3.pause();
  // mp3.load();

  // $("...").play();
  // var sound = new Sound(request);
  // sound.play();
}

export default {
  doData,
};
