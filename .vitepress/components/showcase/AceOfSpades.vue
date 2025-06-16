<template>
    <div class="card-container">
        <main class="card">
            <div class="front">
                <div class="index">A</div>
                <div class="face">♠</div>
                <div class="index flipped">A</div>
            </div>
            <div class="back"></div>
        </main>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap");

.card-container {
    box-sizing: content-box;
    font-family: "Playfair", serif;
    font-optical-sizing: auto;
    font-variation-settings: "wdth" 100;
    margin: 0;
    perspective: 1000px;
    --ratio: 1.4;
    --size: 14rem;
}

.card,
.face {
    display: grid;
    place-content: center;
}

.card {
    width: 10rem;
    height: 14rem;
    transform-style: preserve-3d;
    animation: flip 5s linear infinite;

    & .front,
    & .back {
        grid-area: 1 / 1;
        width: inherit;
        height: inherit;
        backface-visibility: hidden;

        border-radius: 0.5rem;
        box-shadow: 1rem 1rem 2rem hsla(0, 0%, 0%, 0.2);
    }

    & .front {
        display: grid;
        grid-template-rows: 2rem 1fr 2rem;
        transform: rotateZ(36deg);
        background-color: white;
        color: black;
    }

    & .back {
        transform: rotateZ(36deg) rotateY(180deg);
        border: 0.2rem solid darkred;

        background: linear-gradient(45deg,
                red 25.5%,
                transparent 25%,
                transparent 75%,
                red 75%),
            linear-gradient(-45deg,
                red 25.5%,
                transparent 25%,
                transparent 75%,
                red 75%),
            white;

        background-size: 2rem 2rem;
    }

    & .index {
        font-size: 2rem;
        margin: 0 0.5rem;
        position: relative;
    }

    & .index.flipped {
        transform: rotate(180deg);
    }

    & .index::before {
        content: "♠";
        position: absolute;
        bottom: -1rem;
        left: 0;
    }

    & .face {
        font-size: 6rem;
    }
}

@keyframes flip {
    100% {
        transform: rotateY(360deg);
    }
}
</style>