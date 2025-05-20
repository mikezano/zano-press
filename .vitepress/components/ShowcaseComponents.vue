<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import { showcaseComponents } from './ShowcaseComponents';

const index = ref(0);
let intervalId;

onMounted(() => {
    intervalId = setInterval(() => {
        index.value = (index.value + 1) % showcaseComponents.length;
    }, 5000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});

</script>

<template>
    <Suspense>
        <component :is="showcaseComponents[index].component" />
    </Suspense>
    <a class="description" :href="showcaseComponents[index].link">
        {{ showcaseComponents[index].name }}
        {{ showcaseComponents[index].description }}
    </a>
</template>

<style>
.VPHero .image-container {
    border: 0.1rem solid var(--vp-c-gray-3);
    background-color: var(--vp-c-bg-soft);
    border-radius: 0.4rem;
}

.VPHero .description {
    position: absolute;
    bottom: -2rem;
    right: 0;
    text-decoration: underline;
}
</style>