import {computed, ref} from 'vue';
import { createGlobalState, createSharedComposable, useMouse } from '@vueuse/core';
import { createInjectionState } from '@vueuse/shared'; 

// 1.全局状态共享----------------------------------------------------------------
export const useGlobalState = createGlobalState(() => {
    const count = ref(0);

    const addCount = () => {
        count.value += 1;
        console.log("add===", count.value);
    };

    const minCount = () => {
        count.value -= 1;
        console.log("min===", count.value);
    };
    return { count , addCount, minCount};
});

// 2.provide和inject状态共享-------------------------------------------------
const [useProvideCounterStore, useCounterStore] = createInjectionState((initValue) => {
    const count = ref(initValue);

    const double = computed(() => count.value * 2);

    const increment = () => {
        count.value++;
    };

    const decrease = () => {
        count.value--;
    }

    return {count, double, increment, decrease};
});

export {useProvideCounterStore, useCounterStore};

export const useCounterStoreWithDefaultValue = () => {
    return useCounterStore() ?? {
        count: ref(0),
        double: ref(0),
        increment: () => {},
        decrease: () => {}
    }
};

export const useCounterStoreOrThrow = () => {
    const counterStore = useCounterStore()
    if (counterStore == null)
        throw new Error('Please call `useProvideCounterStore` on the appropriate parent component')
    return counterStore
};

// 3.状态共享，根据活跃性【是否有组件相应】会自动stop--------------------------------------------
// 参数useMouse可以是任意函数
// export const useSharedMouse = createSharedComposable(useMouse); 
export const useSharedMouse = createSharedComposable(() => {
    const x = ref(0);
    const y = ref(0);
    window.addEventListener('mousemove', (e) => {
        console.log(e);
        x.value = e.pageX;
        y.value = e.pageY;
    });

    return {x, y};
}); 