<template>
    <div>
      <h3>Mouse: {{x}} x {{y}}</h3>
      <h3>
        Counter: {{count}}
        <a @click='inc()' style='margin-right:10px'>+</a>
        <a @click='dec()'>-</a>
      </h3>
      <br/><br/>
    </div>
  </template>
  
  <script setup>
  import { useMouse, useCounter } from '@vueuse/core';
  
  const { x, y } = useMouse();
  const { count, inc, dec } = useCounter();

  </script>
  
  <style scoped>
  </style>
  