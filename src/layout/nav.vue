<template>
    <div class="text-white">
        <template v-for="item in menuroutes" :key="item.path">
            <div class="text-blue-300">
                <p class="py-2">
                    <router-link :to="item.path"><i :class="`iconfont icon-${item?.meta?.iconname} pr-2`"></i>{{ item?.meta?.title }}</router-link>
                </p>
                <template v-if="item?.children?.length > 0 && router.path.includes(item.path)">
                    <nav-child :childs="item.children" :parentPath="item.path"></nav-child>
                </template>
            </div>
        </template>
    </div>
</template>

<script setup name="nav">
import NavChild from './nav-child.vue';
import { menuroutes } from '../router';
import { useRoute } from 'vue-router';

const router = useRoute();
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>