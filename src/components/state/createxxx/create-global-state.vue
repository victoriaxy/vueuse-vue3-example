<template>
    <div class="py-2 text-blue-700">createGlobalState ---- 将状态保留在全局作用域中，以便跨Vue实例重用</div>
    <div class="ml-4 text-blue-700">
        <p class="text-3xl">{{ count }}</p>
        <button type="button" class="mx-4 border rounded-sm" @click="addCount">加1</button>
        <button type="button" class="mx-4 border rounded-sm" @click="minCount">减1</button>
        <div>源码实现分析：EffectScope</div>
    </div>
</template>
<script setup>
import { useGlobalState, useProvideCounterStore } from '../store-create';

useProvideCounterStore(0);
const {count, addCount, minCount} = useGlobalState();

</script>