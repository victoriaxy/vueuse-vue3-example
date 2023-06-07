<template>
    <div class="py-2 text-pink-700">createInjectionState ---- 创建可以注入到组件中的全局状态</div>
    <div class="ml-4 text-pink-700">
        <p class="text-3xl text-blue-700 ">globalState测试，是否所有组件共享一份数据  ---  {{ count1 }}</p>
        <ul>
            <li>
                count: {{ count }}
            </li>
            <li>
                double: {{ double }}
            </li>
        </ul>
        <div>
            <button @click="increment">
                +
            </button>
            <button @click="decrease">
                -
            </button>
        </div>
        <p class="text-3xl text-green-600 ">{{ x }} ---- {{ y }}</p>
        <div>源码实现分析：provide和inject方法</div>
    </div>
</template>
<script setup>
import {useCounterStoreWithDefaultValue, useSharedMouse, useGlobalState} from '../store-create';
// globalState测试，是否所有组件共享一份数据
const {count: count1} = useGlobalState();

const { count, double, increment, decrease } = useCounterStoreWithDefaultValue();

const {x, y} = useSharedMouse();

</script>