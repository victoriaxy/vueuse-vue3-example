<template>
    <div class="ml-6">
        <template v-for="item in childs" :key="item.path">
            <p :class="`py-1 ${router.path === `${parentPath}/${item.path}`? 'text-white' : ''}`">
                <router-link :to="`${parentPath}/${item.path}`">{{ item?.meta?.title }}</router-link>
            </p>
        </template>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';

const router = useRoute();
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