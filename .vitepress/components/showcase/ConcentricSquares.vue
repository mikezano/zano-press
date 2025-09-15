<template>
    <main id="concentric-squares" class="showcase">
        <div class="layer-a"></div>
        <div class="layer-b"></div>
    </main>
</template>

<style>
#concentric-squares.showcase {
    --size: 200px;
    display: grid;
    width: var(--size);
    height: var(--size);
    place-content: center;
    border: 0.1rem solid orange;
    padding: 0;
    margin: 0;

    & .layer-a,
    & .layer-b {
        grid-area: 1/1;
        place-self: center;
    }

    & .layer-a {
        border: 0.1rem solid green;
        width: calc(var(--size)/1.5);
        height: calc(var(--size)/1.5);
    }

    & .layer-b {
        border: 0.1rem solid blue;
        width: calc(var(--size)/3);
        height: calc(var(--size)/3);
    }
}
</style>