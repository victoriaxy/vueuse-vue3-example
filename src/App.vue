<template>
  <div class="container grid grid-cols-[250px_5fr] w-full h-full overflow-hidden">
    <div class="p-4 bg-blue-950">
      <Nav></Nav>
    </div>
    <div class="p-4">
      <div class="p-2 shadow-xl"><img src="./logo.svg" /></div>
      <div class="p-4"><router-view></router-view></div>
    </div>
  </div>
</template>

<script setup>
import Nav from './layout/nav.vue';

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Serif&display=swap');

html, body, h1, h2, h3, p {
  font-family: 'Noto Serif', serif;
  user-select: none;
}
#app {
  text-align: center;
  color: rgba(0,0,0,0.4);
}
img {
  height: 20px;
}
</style>
