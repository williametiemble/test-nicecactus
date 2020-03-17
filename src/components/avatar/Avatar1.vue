<template>
  <div class="avatar1">
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
  name: 'Avatar1',
}
</script>

<style lang="scss" scoped>
.avatar1 {
  position: relative;
  display: inline-block;
  height: 190px;
  width: 185px;
}
.avatar1:after {
  content: " ";
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 71px;
  width: 35px;
  height: 13px;
  background: #f0e50c;
  z-index: 99;
}
.avatar1 .face {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 24px;
  left: 26px;
  width: 132px;
  height: 106px;
  overflow: hidden;
  background: #f0d5ab;
  z-index: 15;
}
.avatar1 .face .hat {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  width: 132px;
  height: 78px;
  background: #49c2b5;
}
.avatar1 .face .hat:before {
  content: " ";
  -webkit-border-radius: 65% 40%;
  -moz-border-radius: 65% 40%;
  -ms-border-radius: 65% 40%;
  -o-border-radius: 65% 40%;
  border-radius: 65% 40%;
  position: absolute;
  top: 25px;
  left: -3px;
  width: 134px;
  height: 48px;
  background: #f0e50c;
}
.avatar1 .face .hat:after {
  content: " ";
  -webkit-border-radius: 65% 40%;
  -moz-border-radius: 65% 40%;
  -ms-border-radius: 65% 40%;
  -o-border-radius: 65% 40%;
  border-radius: 65% 40%;
  position: absolute;
  top: 29px;
  left: -6px;
  width: 137px;
  height: 52px;
  background: #f0d5ab;
}
.avatar1 .face .eye-left, .avatar1 .face .eye-right {
  -webkit-border-radius: 65% 50%;
  -moz-border-radius: 65% 50%;
  -ms-border-radius: 65% 50%;
  -o-border-radius: 65% 50%;
  border-radius: 65% 50%;
  position: absolute;
  top: 35px;
  left: 36px;
  width: 32px;
  height: 37px;
  background: #ffffff;
}
.avatar1 .face .eye-left:after, .avatar1 .face .eye-right:after {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  content: " ";
  position: absolute;
  top: 16px;
  left: 26px;
  height: 3px;
  width: 3px;
  background: #000000;
}
.avatar1 .face .eye-right {
  -webkit-border-radius: 50% 65%;
  -moz-border-radius: 50% 65%;
  -ms-border-radius: 50% 65%;
  -o-border-radius: 50% 65%;
  border-radius: 50% 65%;
  left: 69px;
}
.avatar1 .face .smile {
  -webkit-border-radius: 65% 50%;
  -moz-border-radius: 65% 50%;
  -ms-border-radius: 65% 50%;
  -o-border-radius: 65% 50%;
  border-radius: 65% 50%;
  -webkit-box-shadow: 0 1px 0 black;
  -moz-box-shadow: 0 1px 0 black;
  box-shadow: 0 1px 0 black;
  position: absolute;
  top: 79px;
  left: 64px;
  width: 15px;
  height: 8px;
}
.avatar1 .body {
  -webkit-border-radius: 50% 50% 33% 33%;
  -moz-border-radius: 50% 50% 33% 33%;
  -ms-border-radius: 50% 50% 33% 33%;
  -o-border-radius: 50% 50% 33% 33%;
  border-radius: 50% 50% 33% 33%;
  position: absolute;
  top: 80px;
  left: 13px;
  height: 90px;
  width: 160px;
  background: #c60735;
  z-index: 10;
}
.avatar1 .body .zipper {
  position: absolute;
  top: 48px;
  left: 86px;
  width: 1px;
  height: 42px;
  background: #5c0011;
}
.avatar1 .body .button-1, .avatar1 .body .button-2, .avatar1 .body .button-3 {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 82px;
  height: 4px;
  width: 2px;
  background: #5c0011;
}
.avatar1 .body .button-2 {
  top: 67px;
}
.avatar1 .body .button-3 {
  top: 82px;
}
.avatar1 .body .hand-left {
  -webkit-border-radius: 60% 160% 50% 100%;
  -moz-border-radius: 60% 160% 50% 100%;
  -ms-border-radius: 60% 160% 50% 100%;
  -o-border-radius: 60% 160% 50% 100%;
  border-radius: 60% 160% 50% 100%;
  position: absolute;
  top: 38px;
  left: -11px;
  width: 29px;
  height: 22px;
  background: #ede40b;
  z-index: 10;
}
.avatar1 .body .hand-right {
  -webkit-border-radius: 60% 50% 50% 70%;
  -moz-border-radius: 60% 50% 50% 70%;
  -ms-border-radius: 60% 50% 50% 70%;
  -o-border-radius: 60% 50% 50% 70%;
  border-radius: 60% 50% 50% 70%;
  position: absolute;
  top: 35px;
  left: 140px;
  width: 29px;
  height: 25px;
  background: #ede40b;
  z-index: 10;
}
.avatar1 .body .hand-right:before {
  -webkit-border-radius: 100% 28%;
  -moz-border-radius: 100% 28%;
  -ms-border-radius: 100% 28%;
  -o-border-radius: 100% 28%;
  border-radius: 100% 28%;
  content: " ";
  position: absolute;
  top: 5px;
  left: -5px;
  width: 29px;
  height: 18px;
  background: #ede40b;
}
.avatar1 .legs {
  -webkit-border-radius: 0 0 10px 10px/37px;
  -moz-border-radius: 0 0 10px 10px/37px;
  -ms-border-radius: 0 0 10px 10px/37px;
  -o-border-radius: 0 0 10px 10px/37px;
  border-radius: 0 0 10px 10px/37px;
  position: absolute;
  left: 22px;
  top: 154px;
  width: 140px;
  height: 23px;
  background: #623919;
  z-index: 5;
}
.avatar1 .legs .foot-left, .avatar1 .legs .foot-right {
  -webkit-border-radius: 50% 50% 0 0/7px;
  -moz-border-radius: 50% 50% 0 0/7px;
  -ms-border-radius: 50% 50% 0 0/7px;
  -o-border-radius: 50% 50% 0 0/7px;
  border-radius: 50% 50% 0 0/7px;
  position: absolute;
  top: 18px;
  left: 2px;
  width: 70px;
  height: 8px;
  background: #21241e;
  z-index: 5;
}
.avatar1 .legs .foot-right {
  left: 69px;
}
</style>
