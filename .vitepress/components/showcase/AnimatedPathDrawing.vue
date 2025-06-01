<template>
    <div :class="`paper ${id}`">
        <svg class=" drawn-path">
            <path :d="path" pathLength="1" />
        </svg>
        <div class="pencil">✏️</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

interface Props {
    path?: string;
    id?: string;
}
const props = withDefaults(defineProps<Props>(), {
    path: "M 90 60 L 90 80 L 110 100 L 130 80 L 130 60 L 90 20 L 50 60 L 50 80 L 90 120 L 90 140 L 90 120 L 70 100 L 50 120 L 50 150 L 90 180 L 130 150 L 130 120 L 110 100",
    id: "cool-s"
});

onMounted(() => {
    const paper = document.querySelector(`.${props.id} .pencil`);
    if (paper) {
        //Can't set only the path value and use it later in offset-path wrapped in path
        //need to set the property with the whole function wrapped
        //https://developer.mozilla.org/en-US/docs/Web/CSS/offset-path
        //paper.style.setProperty('--path', props.path);
        paper.style.setProperty('--path', `path("${props.path}")`);

    }
});
</script>

<style scoped>
.paper {
    --duration: 2s;
    --size: 200px;
    /* --path: ""; set in JS */
    position: relative;
    display: grid;
    place-content: center;
    width: var(--size);
    height: var(--size);
    box-shadow: 0 0 1rem hsla(0, 0%, 0%, 0.3);

    background: linear-gradient(to bottom, white 19px, deepskyblue 20px);
    background-size: 100% 20px;
    background-repeat: repeat-y;
}

.drawn-path,
.pencil {
    position: absolute;
    grid-column: 1;
    grid-row: 1;
    height: var(--size);
    width: var(--size);
}

.drawn-path {
    transform: translate(-50%, -50%);

    & path {
        fill: none;
        stroke: gray;
        stroke-width: 2;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: draw var(--duration) linear infinite;

    }
}

.pencil {
    transform: translateY(-20px) translateX(-4px);
    offset-path: var(--path);
    offset-rotate: 0deg;
    offset-distance: 0;
    animation: write var(--duration) linear infinite;
}


@keyframes write {
    to {
        offset-distance: 100%;
    }
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
</style>