<template>
  <el-container>
    <el-aside>
      <Nav></Nav>
    </el-aside>
    <div>
      <el-header>
        <img src="./logo.svg" />
      </el-header>
      <el-main>
        <router-view></router-view>

      </el-main>
    </div>
  </el-container>
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
