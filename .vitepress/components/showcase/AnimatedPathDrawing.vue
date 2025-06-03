<template>
    <div :class="`paper ${id}`">
        <svg class=" drawn-path">
            <path :d="path" pathLength="1" />
        </svg>
        <div class="pencil" />
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
}



.drawn-path {
    height: var(--size);
    width: var(--size);
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
    position: absolute;
    width: 7px;
    height: 24px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAYCAYAAADH2bwQAAAAAXNSR0IArs4c6QAAAdRJREFUOE9tkjtvE0EUhb8hfmQNHW4WEaREonRFg4AKiU0BLYVdIGio+SOho+EPRNBQh4bSQQIa0yVeOyKerJNgB+1slLWJL7qzxgTBSqt9nDPncWfMTCQ0G22LgGQTTDaBbMq30RE33jytGxEJZaNtDXhAXEEajI9Y2VTCTEJebltUQle7KWQ5++NjVjaf1c3CAlNYnCopZzA65rpXEAnjOLZBLcCljjRNcc5hraXVbBYWca9rg9plMiU4h3Mpg/0BzVbrgkJQ80ChkGLtAc2WKmiLYWRNuQr5EMktZpLQ311m9WE2b3H4wEqpiskTyA8gT+jHQUHwLQ4jy9IyTBQs7n43YPWRKsgslOG6NaWKByRPCotuwNofi8iiGSYJnFmfpd/VDKdFSIaRxSskhc1ZQi8OWPvLYt6CXBXU4mKLbmj5meh2La7vY6jfYd5i95onCIIRwMDoBK4qYdGiXPHe/8zBb7fOoVSFadFC8iF7iwzawg+q7AHjhzWv+b8Wv/eit6M1Xd1ooJ23d6Pzc7b0HREwhqVLsn7zcfu9P4oKdN692DLGRPp58mPy4d6TV/f1f0EAGo3GLRE+6dm8Uqne3v7y+aOCC8Kc9FyfXzud1+Lt4BfcN1azblSuCgAAAABJRU5ErkJggg==");
    background-repeat: no-repeat;
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