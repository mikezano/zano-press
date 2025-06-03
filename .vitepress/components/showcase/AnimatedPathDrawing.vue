<template>
    <div :class="`paper ${id}`">
        <svg class=" drawn-path">
            <path :d="path" pathLength="1" />
        </svg>
        <img class="pencil"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAt9JREFUSEuNVktPE1EYPXc6zFigRWmIBRJCWyOaGInvuBAwwbgFY1zaBhdEDGyNe/kDoKi4sLN2UWNcaFxA6lLrwsSFUUmMSDGN0ZAwtsN0xsyjnXu5d4qTNL1zH9/jfOd8dwiaDwFgC97Y+WC/P3KX6T277ASv4ZvCgqDnCWwqPPYEEBakP/8/runM6KAJnSGXrRgPdpYAdvLBI1K+Oc0sUME1wXTT3APy3XCZ/fe1SDJ6Hf2dy+T5NdcJk3EQtcCyACLXgT+/sLiY75Xjx668bB+W+qIyfuhNJ94e4v75B8Ks0WwJ4tdXEoXXP2+fRHRooEeJlc49rAxLG7qMdX2ZlG/5cDUccDachQZc/NgqKnmoVtZSI2ulrcdy+XfXgLHxpzQ5v/1RXp/J0ll6GYRRmisy4BgnipXFPgtQLdSrytqLT3fl75XoyuzcbM7h6m7WiTEQGLeLah5qPesYdn+1CFAj+Kt3PWu/+GvSO8JCTdVA4IcKxXZgiVhZSAToNIE6gV2TQGqSRkZ2coHQ+I7AQkRH4Y/tYlseip1FxCGGDVIngEWAHWhk1AhgCSFiyxpwsGy1AXUAJtHIiJFrwEK3itY1oORsv1HycArq4K1YgOFhDkPSyIWdnNscm3xv9CLWPMMiuq7V1UxBjX6bCAoqATXJwV2TaFg4SFleMkVu+P6wMLEaGzqT6kssmUrHRtotZlUCDKJJI0au0U7ETTC0yMFCaX70rdzZrcePnB7sTdwz1XolDZ8tLe8MrsiMkr3VmauXD904Uf3sJCp3dBfjR08N9qlP3qtjX12e7x01rXxvP/OMXxqf2q/a03fOm2cBvGuLdW8fnyuMMSLiRMjD4sEoyCCTzhRT6VT+8IFIcenpqy8CQQvSEDigdNscJpMHezY3NyuOBfpuCI6HGfL3+4xiGyUlM07ulCbC+oz3mdAiA9oGHan4Ehf0AkFrYQQYdoSVS0BODi62eXIl+wdgD0cxMIk2FgAAAABJRU5ErkJggg==" />
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
    --half-size: calc(var(--size) / 2);
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
    transform: translate(calc(-1 * var(--half-size)),
            calc(-1 * var(--half-size)));
}



.drawn-path {
    height: var(--size);
    width: var(--size);


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
    top: -6px;
    left: 6px;
    width: 21px;
    height: 21px;
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