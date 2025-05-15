<template>
    <button class="three-d">3D button</button>
</template>

<style>
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
    --half-size: calc(var(--size) / 2);
    --quarter-size: calc(var(--size) / 4);
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
    left: var(--half-size);
    bottom: calc(-1 * var(--size));
    width: 100%;
    height: var(--size);
    background-color: var(--teal);
    transform: skewX(var(--deg));
}

.three-d:after {
    top: var(--half-size);
    right: calc(-1 * var(--size));
    width: var(--size);
    height: 100%;
    background-color: var(--plum);
    transform: skewY(var(--deg));
}

.three-d:active {
    transform: translate(var(--half-size), var(--half-size));
}

.three-d:active:before {
    left: var(--quarter-size);
    bottom: calc(-1 * var(--half-size));
    height: var(--half-size);
}

.three-d:active:after {
    top: var(--quarter-size);
    right: calc(-1 * var(--half-size));
    width: var(--half-size);
}
</style>