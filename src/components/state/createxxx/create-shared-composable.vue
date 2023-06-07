<template>
    <div class="py-2 text-green-600">createSharedComposable ---- 使可组合函数可用于多个Vue实例</div>
    <div class="ml-4 text-green-600">
        <p class="border-t">InjectionState不同组件测试-状态共享</p>
        <p class="text-3xl text-pink-700">count：{{ count }}</p>
        <p class="text-3xl text-pink-700 border-b">double：{{ double }} </p>
        <p>{{ x }} ---- {{ y }}</p>
        <div>源码实现分析：EffectScope</div>
    </div>
</template>
<script setup>
import {useSharedMouse, useCounterStoreWithDefaultValue} from '../store-create';

const {x, y} = useSharedMouse();
const { count, double } = useCounterStoreWithDefaultValue();

</script>