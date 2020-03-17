<template>
  <div class="avatar2">
    <div class="face">
      <div class="hat"></div>
      <div class="eye-left"></div>
      <div class="eye-right"></div>
      <div class="smile"></div>
    </div>
    <div class="body">
      <div class="zipper"></div>
      <div class="button-1"></div>
      <div class="button-2"></div>
      <div class="button-3"></div>
      <div class="hand-left"></div>
      <div class="hand-right"></div>
    </div>
    <div class="legs">
      <div class="foot-left"></div>
      <div class="foot-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar2',
}
</script>

<style lang="scss" scoped>
.avatar2 {
  position: relative;
  display: inline-block;
  height: 190px;
  width: 125px;
}
.avatar2:after {
  content: " ";
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: 48px;
  width: 24px;
  height: 23px;
  background: #be032b;
  z-index: 99;
}
.avatar2 .face {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 18px;
  left: 6px;
  width: 110px;
  height: 112px;
  overflow: hidden;
  background: #f0d5ab;
  z-index: 15;
}
.avatar2 .face .hat {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 112px;
  height: 78px;
  background: #4a6398;
}
.avatar2 .face .hat:before {
  content: " ";
  -webkit-border-radius: 50% 70%;
  -moz-border-radius: 50% 70%;
  -ms-border-radius: 50% 70%;
  -o-border-radius: 50% 70%;
  border-radius: 50% 70%;
  position: absolute;
  top: 32px;
  left: -3px;
  width: 134px;
  height: 48px;
  background: #be032b;
}
.avatar2 .face .hat:after {
  content: " ";
  -webkit-border-radius: 50% 70%;
  -moz-border-radius: 50% 70%;
  -ms-border-radius: 50% 70%;
  -o-border-radius: 50% 70%;
  border-radius: 50% 70%;
  position: absolute;
  top: 43px;
  left: -6px;
  width: 137px;
  height: 42px;
  background: #f0d5ab;
}
.avatar2 .face .eye-left, .avatar2 .face .eye-right {
  -webkit-border-radius: 65% 50%;
  -moz-border-radius: 65% 50%;
  -ms-border-radius: 65% 50%;
  -o-border-radius: 65% 50%;
  border-radius: 65% 50%;
  position: absolute;
  top: 45px;
  left: 26px;
  width: 31px;
  height: 36px;
  background: #ffffff;
}
.avatar2 .face .eye-left:after, .avatar2 .face .eye-right:after {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  content: " ";
  position: absolute;
  top: 16px;
  left: 23px;
  height: 3px;
  width: 3px;
  background: #000000;
}
.avatar2 .face .eye-right {
  -webkit-border-radius: 50% 65%;
  -moz-border-radius: 50% 65%;
  -ms-border-radius: 50% 65%;
  -o-border-radius: 50% 65%;
  border-radius: 50% 65%;
  left: 58px;
}
.avatar2 .face .smile {
  -webkit-border-radius: 65% 50%;
  -moz-border-radius: 65% 50%;
  -ms-border-radius: 65% 50%;
  -o-border-radius: 65% 50%;
  border-radius: 65% 50%;
  -webkit-box-shadow: 0 1px 0 black;
  -moz-box-shadow: 0 1px 0 black;
  box-shadow: 0 1px 0 black;
  position: absolute;
  top: 89px;
  left: 48px;
  width: 18px;
  height: 8px;
}
.avatar2 .body {
  -webkit-border-radius: 50% 50% 33% 33%/100px 100px 17px 17px;
  -moz-border-radius: 50% 50% 33% 33%/100px 100px 17px 17px;
  -ms-border-radius: 50% 50% 33% 33%/100px 100px 17px 17px;
  -o-border-radius: 50% 50% 33% 33%/100px 100px 17px 17px;
  border-radius: 50% 50% 33% 33%/100px 100px 17px 17px;
  position: absolute;
  top: 99px;
  left: 10px;
  height: 70px;
  width: 100px;
  background: #905947;
  z-index: 10;
}
.avatar2 .body .zipper {
  position: absolute;
  top: 27px;
  left: 49px;
  width: 1px;
  height: 42px;
  background: #5c0011;
}
.avatar2 .body .button-1, .avatar2 .body .button-2, .avatar2 .body .button-3 {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 37px;
  left: 44px;
  height: 4px;
  width: 2px;
  background: #5c0011;
}
.avatar2 .body .button-2 {
  top: 51px;
}
.avatar2 .body .button-3 {
  top: 62px;
}
.avatar2 .body .hand-left {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 42px;
  left: -6px;
  width: 20px;
  height: 20px;
  background: #c00531;
  z-index: 10;
}
.avatar2 .body .hand-left:before {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  content: " ";
  position: absolute;
  left: 11px;
  top: 3px;
  height: 6px;
  width: 6px;
  border: solid 1px #5c0011;
  background: #c00531;
}
.avatar2 .body .hand-right {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 45px;
  left: 83px;
  width: 20px;
  height: 20px;
  background: #c00531;
  z-index: 10;
}
.avatar2 .body .hand-right:before {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  content: " ";
  position: absolute;
  left: 2px;
  top: 3px;
  height: 6px;
  width: 6px;
  border: solid 1px #5c0011;
  background: #c00531;
}
.avatar2 .legs {
  -webkit-border-radius: 44px 44px 0 0;
  -moz-border-radius: 44px 44px 0 0;
  -ms-border-radius: 44px 44px 0 0;
  -o-border-radius: 44px 44px 0 0;
  border-radius: 44px 44px 0 0;
  position: absolute;
  left: 22px;
  top: 154px;
  width: 80px;
  height: 25px;
  background: #4a6398;
  z-index: 5;
}
.avatar2 .legs .foot-left, .avatar2 .legs .foot-right {
  -webkit-border-radius: 50% 50% 0 0/7px;
  -moz-border-radius: 50% 50% 0 0/7px;
  -ms-border-radius: 50% 50% 0 0/7px;
  -o-border-radius: 50% 50% 0 0/7px;
  border-radius: 50% 50% 0 0/7px;
  position: absolute;
  top: 21px;
  left: -8px;
  width: 48px;
  height: 5px;
  background: #21241e;
  z-index: 5;
}
.avatar2 .legs .foot-right {
  left: 36px;
}
</style>
