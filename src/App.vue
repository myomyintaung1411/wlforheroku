<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Init",
  data() {
    return {};
  },
};
</script>





<style lang="scss">
// body {
//   //overflow-x: hidden !important;
// }

// @media only screen and (device-width: 680px) {
//   body {
//     overflow-x: scroll  !important;
//   }
// }
html {
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // overflow-x: hidden !important;
}
#app {
  //  overflow: hidden;
  min-width: 1275px !important;
  background-color: #000;
}
</style>
