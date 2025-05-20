<template lang="pug">
div
    #css-snippets.language-css.extra-class
    #typed-container.language-css.extra-class
        pre#typed.language-css
</template>

<script setup>
import Typed from 'typed.js';
import { onMounted, ref } from 'vue';
const cssFiles = import.meta.glob('./CssSnips.css', { query: '?raw', import: 'default' });
const rawCss = cssFiles['./CssSnips.css'];


const cssSnippets = ref([]);
const snippetsLength = ref(0);


onMounted(() => {

    // Extract raw CSS content
    //cssSnippets.value = Object.values(rawCssFiles);
    //snippetsLength.value = cssSnippets.value.length;
    //console.log('Loaded CSS Snippets:', Object.keys(rawCssFiles));

    cssSnippets.value = rawCss.split('/**/');
    snippetsLength.value = cssSnippets.value.length;


    //console.log("cssSnippets.value", cssSnippets.value)

    const options = {
        stringsElement: '#css-snippets',
        strings: cssSnippets.value,
        typeSpeed: 30,
        backDelay: 1000,
        backSpeed: 10,
        smartBackspace: false,
        loop: true,
    };

    start();

    const typed = new Typed('#typed', options);
});

const start = () => {
    const cssSnippetsElement = document.getElementById('css-snippets');
    cssSnippets.value.forEach((snippet) => {
        //const html = Prism.highlight(snippet, Prism.languages.css, 'css');
        const preTag = document.createElement('pre');
        //preTag.classList.add('shiki', 'shiki-themes');
        preTag.innerHTML = snippet;
        cssSnippetsElement.appendChild(preTag);
    });
}

</script>

<style lang="scss">
#typed-container {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.3rem;
    //width: 24rem;
    //padding: 1rem;
    //height: 18rem;
    //left: 50%;
    //margin-left: -13rem;
}

#typing-static {
    white-space: pre;
    font-family: 'Roboto Slab', serif;
}

#typed {
    display: inline;
    padding: 0; //added it to the #typed-container
}

.typed-cursor {
    color: white;
    padding-left: -2rem;
}
</style>