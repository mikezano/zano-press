<template>
    <div id="view-transition-gallery">
        <main id="grid" ref="gridRef" @click="handleGridClick">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </main>
        <main id="zoom" ref="zoomRef" @click="handleZoomClick"
            :style="{ display: zoomVisible ? 'block' : 'none', backgroundColor: zoomColor }">
        </main>
    </div>
</template>

<style>
#view-transition-gallery {
    display: grid;
    --size: 200px;
}

#grid,
#zoom {
    grid-area: 1/1;
}

#grid {
    display: grid;
    width: var(--size);
    height: var(--size);
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 10px;
}

#grid div {
    transition: box-shadow 0.2s ease-in-out;
}

#grid div:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

#grid div:nth-child(1) {
    background-color: #ffd1dc;
}

#grid div:nth-child(2) {
    background-color: #c3fbd8;
}

#grid div:nth-child(3) {
    background-color: #c1f0f6;
}

#grid div:nth-child(4) {
    background-color: #ffe8a1;
}

#zoom {
    display: none;
    height: calc(var(--size) * 0.8);
    width: calc(var(--size) * 0.8);
    margin: calc(var(--size) * 0.1);
    view-transition-name: zoom;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.2s ease-in-out;
}

#zoom:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

::view-transition-new(zoom) {
    animation: zoom-in 0.5s ease-in-out;
}

::view-transition-old(zoom) {
    animation: zoom-out 0.5s ease-out;
}

@keyframes zoom-in {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@keyframes zoom-out {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(0);
    }
}
</style>

<script setup>
import { ref } from 'vue';

const gridRef = ref(null);
const zoomRef = ref(null);
const zoomColor = ref('');
const zoomVisible = ref(false);

const handleGridClick = async (event) => {
    if (event.target.tagName !== 'DIV') {
        return; // Only handle clicks on the grid divs
    }
    const transition = document.startViewTransition(() => {
        zoomColor.value = getComputedStyle(event.target).backgroundColor
        zoomVisible.value = true;
    });
    await transition.ready;

}

const handleZoomClick = async (event) => {
    const transition = document.startViewTransition(() => {
        zoomVisible.value = false;;
    });
    await transition.ready;
}

// document.getElementById("grid").addEventListener('click', async (el) => {
//     const transition = document.startViewTransition(() => {
//         if (el) {
//             const color = getComputedStyle(el.target).backgroundColor;
//             const zoomEl = document.getElementById("zoom");
//             zoomEl.style.backgroundColor = color;
//             zoomEl.style.display = "block";
//         }
//     })
//     await transition.ready;
// })

// document.getElementById("zoom").addEventListener('click', async (e) => {
//     const transition = document.startViewTransition(() => {
//         e.target.style.display = "none";
//     });
//     await transition.ready;
// });

</script>