<template>
    <!-- <el-menu
        default-active="/"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
    >
        <el-sub-menu index="1">
            <template #title>
                <i class="iconfont icon-shouye w-5 px-5 text-14"></i>
                <span>State用法</span>
            </template>
            <el-menu-item index="/">
                useCounter
            </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
            <i class="iconfont icon-lianluzhuizong w-5 p-[10px]"></i>
            <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="iconfont icon-duoweijiansuo w-5"></i>
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="iconfont icon-xitongguanli w-5"></i>
            <span>Navigator Four</span>
        </el-menu-item>
    </el-menu> -->
    <div><i class="iconfont icon-xitongguanli pr-5"></i>导航</div>
</template>

<script setup name="nav">
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>