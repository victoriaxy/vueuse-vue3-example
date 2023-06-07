<template>
  <div class="w-full h-full flex flex-row overflow-hidden">
    <div class="p-4 bg-blue-950 w-[250px]">
      <Nav></Nav>
    </div>
    <div class="p-4 w-full">
      <div class="p-2 shadow-xl"><img src="./logo.svg" /></div>
      <div class="p-4"><router-view></router-view></div>
    </div>
  </div>
</template>

<script setup>
import Nav from './layout/nav.vue';

</script>

<style scoped>
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
