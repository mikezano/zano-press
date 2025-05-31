<template>
    <div id="paper">
        <svg id="drawn-path" viewBox="0 0 200 200">
            <path :d="path" pathLength="1" />
        </svg>
        <div id="pencil">✏️</div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps<{
    path: string;
}>();

onMounted(() => {
    const paper = document.getElementById('paper');
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
#paper {
    --duration: 2s;
    --size: 200px;
    /* --path: ""; set in JS */
    position: relative;
    display: grid;
    place-content: center;
    width: var(--size);
    height: var(--size);
    box-shadow: 0 0 1rem #bbb;

    background: linear-gradient(to bottom, white 10px, lightblue 11px, white 12px);
    background-size: 100% 20px;
    background-repeat: repeat-y;

}

#drawn-path,
#pencil {
    position: absolute;
    grid-column: 1;
    grid-row: 1;
    height: var(--size);
    width: var(--size);
}

#drawn-path {
    transform: translate(-50%, -50%);

    & path {
        fill: none;
        stroke: gray;
        stroke-width: 2;
        stroke-linejoin: round;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        animation: draw var(--duration) linear infinite;
    }
}

#pencil {
    transform: translateY(-20px) translateX(-4px);
    offset-path: var(--path);
    offset-rotate: 0deg;
    animation: move-me var(--duration) linear infinite;

}


@keyframes move-me {
    from {
        offset-distance: 0%;
    }

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