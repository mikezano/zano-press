<template>
    <main id="concentric-squares" class="showcase">
        <div class="content-a"></div>
        <div class="content-b"></div>
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

    & .content-a,
    & .content-b {
        grid-area: 1/1;
        place-self: center;
    }

    & .content-a {
        border: 0.1rem solid green;
        width: calc(var(--size)/1.5);
        height: calc(var(--size)/1.5);
    }

    & .content-b {
        border: 0.1rem solid blue;
        width: calc(var(--size)/3);
        height: calc(var(--size)/3);
    }
}
</style>