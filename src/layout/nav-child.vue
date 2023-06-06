<template>
    <div class="ml-6">
        <template v-for="item in childs" :key="item.path">
            <p>
                <router-link :to="`${parentPath}/${item.path}`">{{ item?.meta?.title }}</router-link>
            </p>
        </template>
    </div>
</template>
<script setup>
defineProps({
    parentPath: {
        type: String,
        default: () => ''
    },
    childs: {
        type: Array,
        default: () => []
    }
})
</script>