<script setup>

import { defineAsyncComponent, ref } from 'vue';

const index = ref(0);

const showCase = [
    () => import('./showcase/SquareLoader.vue'),
    () => import('./showcase/CssSnips.vue'),
    () => import('./showcase/AnimatedBackground.vue'),
    () => import('./showcase/ThreeDButton.vue'),
];
const loadedShowCase = showCase.map((name) => defineAsyncComponent(name));
// console.log('loadedShowCase', loadedShowCase);

// setInterval(() => {
//     index.value = (index.value + 1) % showCase.length;
// }, 5000);


</script>

<template>
    <Suspense>
        <component :is="loadedShowCase[3]" />
    </Suspense>

</template>

<style>
.VPHero .image-container {
    border: 0.1rem solid var(--vp-c-gray-3);
    background-color: var(--vp-c-bg-soft);
    border-radius: 0.4rem;
}
</style>