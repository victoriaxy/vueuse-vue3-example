<template>
    <div class="text-white">
        <template v-for="item in menuroutes" :key="item.path">
            <div>
                <p><i :class="`iconfont icon-${item?.meta?.iconname} pr-2`"></i>{{ item?.meta?.title }}</p>
                <template v-if="item?.children?.length > 0">
                    <nav-child :childs="item.children" :parentPath="item.path"></nav-child>
                </template>
            </div>
        </template>
    </div>
</template>

<script setup name="nav">
import NavChild from './nav-child.vue';
import { menuroutes } from '../router';

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>