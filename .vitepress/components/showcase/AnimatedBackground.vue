<template>
    <div class="animated-background"></div>
</template>

<style>
.animated-background {
    width: 200px;
    height: 200px;
    background:
        linear-gradient(45deg, black 25.5%, transparent 25%, transparent 75%, black 75%, black 0),
        linear-gradient(45deg, black 25.5%, transparent 25%, transparent 75%, black 75%, black 0), orange;
    background-repeat: repeat, repeat;
    background-position: 0 0, 50px 50px;
    background-size: 100px 100px, 100px 100px;
    animation: move-background 10s linear infinite;
}

@keyframes move-background {
    100% {
        background-position: 0 -400px, 50px -350px;
    }
}
</style>