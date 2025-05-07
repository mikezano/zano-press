<template lang="pug">
div
    h1 Counter: {{ counter }}
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const counter = ref(0);
let interval = null;

const incrementCounter = () => {
    counter.value += 1;
}

onMounted(() => {
    interval = setInterval(incrementCounter, 1000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>