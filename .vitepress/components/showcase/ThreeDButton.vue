<template>
    <button class="three-d">3D button</button>
</template>

<style>
:root {}

.three-d,
.three-d:before,
.three-d:after {
    transition: all 0.2s;
}

.three-d:before,
.three-d:after {
    content: " ";
    position: absolute;
}

.three-d {
    --size: 10px;
    --deg: 45deg;
    --teal: hsla(180, 40%, 50%, 1);
    --plum: hsla(320, 45%, 45%, 1);
    margin-top: 1rem;
    color: white;
    padding: 1rem 2rem;
    background: linear-gradient(90deg,
            var(--teal) 0,
            var(--plum) 100%);
    font-size: 2rem;
    font-family: 'Arial';
    border: none;
    position: relative;
}

.three-d:before {
    left: calc(var(--size) / 2);
    bottom: calc(-1 * var(--size));
    width: 100%;
    height: var(--size);
    background-color: var(--teal);
    transform: skewX(var(--deg));
}

.three-d:after {
    top: calc(var(--size) / 2);
    right: calc(-1 * var(--size));
    width: var(--size);
    height: 100%;
    background-color: var(--plum);
    transform: skewY(var(--deg));
}

.three-d:active {
    --half-size: calc(var(--size) / 2);
    transform: translate(var(--half-size), var(--half-size));
}

.three-d:active:after {
    top: calc(var(--size) / 4);
    right: calc(-1 * var(--size) / 2);
    width: calc(var(--size) / 2);
}

.three-d:active:before {
    left: calc(var(--size) / 4);
    bottom: calc(-1 * var(--size) / 2);
    height: calc(var(--size) / 2);
}
</style>