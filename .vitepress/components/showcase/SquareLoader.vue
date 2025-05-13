<template>
    <div class="loader">
        <div class="loader__top"></div>
        <div class="loader__right"></div>
        <div class="loader__bottom"></div>
        <div class="loader__left"></div>
    </div>
</template>

<style>
:root {
    --border-size: 10px;
    --size: 100px;
    --color: #0068b5;
    --duration: 1s;
    --delay: calc(var(--duration) / 2);
    --percent: 50%;
    --timing: linear;
}

.loader {
    width: var(--size);
    height: var(--size);
    border: var(--border-size) solid #ddd;
    position: relative;
    box-sizing: border-box;
    animation: rotate var(--timing) calc(var(--duration) * 5) infinite;
}

.loader__top,
.loader__right,
.loader__bottom,
.loader__left {
    position: absolute;
    opacity: 1;
}

.loader__top {
    left: calc(-1 * var(--border-size));
    top: calc(-1 * var(--border-size));
    width: var(--size);
    height: var(--border-size);
    background: linear-gradient(90deg, var(--color) var(--percent), transparent var(--percent));
    background-size: calc(var(--size) * 2) var(--border-size);
    background-position: 0 0;
    animation: loader-top var(--timing) var(--duration) infinite;
}

.loader__right {
    top: calc(-1 * var(--border-size));
    right: calc(-1 * var(--border-size));
    width: var(--border-size);
    height: var(--size);
    background: linear-gradient(var(--color) var(--percent), transparent var(--percent));
    background-size: var(--border-size) calc(var(--size) * 2);
    background-position: 0 0;
    animation: loader-right var(--timing) var(--duration) infinite var(--delay);
}

.loader__bottom {
    right: calc(-1 * var(--border-size));
    bottom: calc(-1 * var(--border-size));
    width: var(--size);
    height: var(--border-size);
    background: linear-gradient(90deg, var(--color) var(--percent), transparent var(--percent));
    background-size: calc(var(--size) * 2) var(--border-size);
    background-position: 0 0;
    animation: loader-bottom var(--timing) var(--duration) infinite;
}

.loader__left {
    left: calc(-1 * var(--border-size));
    bottom: calc(-1 * var(--border-size));
    width: var(--border-size);
    height: var(--size);
    background: linear-gradient(var(--color) var(--percent), transparent var(--percent));
    background-size: var(--border-size) calc(var(--size) * 2);
    background-position: 0 0;
    animation: loader-left var(--timing) var(--duration) infinite var(--delay);
}

@keyframes loader-top {
    100% {
        background-position: calc(var(--size) * 2) 0;
    }
}

@keyframes loader-right {
    100% {
        background-position: 0 calc(var(--size) * 2);
    }
}

@keyframes loader-bottom {
    100% {
        background-position: calc(-2 * var(--size)) 0;
    }
}

@keyframes loader-left {
    100% {
        background-position: 0 calc(var(--size) * -2);
    }
}

@keyframes rotate {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>