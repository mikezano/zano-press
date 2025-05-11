<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <div id="bottom-right-dots"></div>
  <Layout>
    <template #home-hero-image>
      <CssSnips />
    </template>
  </Layout>
</template>
