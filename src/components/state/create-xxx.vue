<template>
    <create-global-state></create-global-state>
    <hr class="my-2"/>
    <create-injection-state></create-injection-state>
    <hr class="my-2"/>
    <create-shared-composable></create-shared-composable>
</template>
<script setup>
import {useProvideCounterStore} from './store-create';
import CreateGlobalState from './createxxx/create-global-state.vue';
import CreateInjectionState from './createxxx/create-injection-state.vue';
import CreateSharedComposable from './createxxx/create-shared-composable.vue';

useProvideCounterStore(0);
</script>