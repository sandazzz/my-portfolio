<script setup></script>
<template>
  <div class="absolute w-full h-[100vh] overflow-hidden">
    <div class="bubbles relative flex">
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 24"></span>
      <span style="--i: 10"></span>
      <span style="--i: 14"></span>
      <span style="--i: 23"></span>
      <span style="--i: 18"></span>
      <span style="--i: 16"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
      <span style="--i: 22"></span>
      <span style="--i: 25"></span>
      <span style="--i: 18"></span>
      <span style="--i: 21"></span>
      <span style="--i: 13"></span>
      <span style="--i: 15"></span>
      <span style="--i: 26"></span>
      <span style="--i: 17"></span>
      <span style="--i: 13"></span>
      <span style="--i: 28"></span>
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 24"></span>
      <span style="--i: 10"></span>
      <span style="--i: 14"></span>
      <span style="--i: 23"></span>
      <span style="--i: 18"></span>
      <span style="--i: 16"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
      <span style="--i: 22"></span>
      <span style="--i: 25"></span>
      <span style="--i: 18"></span>
      <span style="--i: 21"></span>
      <span style="--i: 13"></span>
      <span style="--i: 15"></span>
      <span style="--i: 26"></span>
      <span style="--i: 17"></span>
      <span style="--i: 13"></span>
      <span style="--i: 28"></span>
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 24"></span>
      <span style="--i: 10"></span>
      <span style="--i: 14"></span>
      <span style="--i: 23"></span>
      <span style="--i: 18"></span>
      <span style="--i: 16"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
      <span style="--i: 22"></span>
      <span style="--i: 25"></span>
      <span style="--i: 18"></span>
      <span style="--i: 21"></span>
      <span style="--i: 13"></span>
      <span style="--i: 15"></span>
      <span style="--i: 26"></span>
      <span style="--i: 17"></span>
      <span style="--i: 13"></span>
      <span style="--i: 28"></span>
    </div>
  </div>
</template>
<style>

.bubbles span {
  position: relative;
  min-width: 30px;
  height: 30px;
  background: #4fc3dc;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
  margin: 0 4px;
  animation: animate 15s linear infinite;
  animation-duration: calc(75s / var(--i));
}

.bubbles span:nth-child(even) {
  background: #ff2d75;
  box-shadow: 0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75;
}

@keyframes animate {
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
}
</style>
