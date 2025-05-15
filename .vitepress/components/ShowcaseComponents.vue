<script setup>

import { defineAsyncComponent, ref } from 'vue';
import { showcaseComponents } from './ShowcaseComponents';

const index = ref(0);
const loadedShowCase =
    showcaseComponents.map((component) =>
        defineAsyncComponent(component.importPath)
    );

setInterval(() => {
    index.value = (index.value + 1) % showcaseComponents.length;
}, 5000);


</script>

<template>
    <Suspense>
        <component :is="loadedShowCase[index]" />
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
    ;
}
</style>