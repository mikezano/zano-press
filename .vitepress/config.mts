import fs from "fs";
import path from "path";
import prismjs from "vite-plugin-prismjs";
import pugPlugin from "vite-plugin-pug";
import { defineConfig } from "vitepress";

//const markdown = import.meta.globEager("../src/lessons/*.md");
// markdown = import.meta;
//console.log("markdown", markdown);
//Object.entries(markdown).forEach(([path, definition]) => {
//const fileName = path.split("/").pop().replace(".md", "");
//});

function getMarkdownFiles(dir: string): { text: string; link: string }[] {
  const fullPath = path.resolve(__dirname, dir);
  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      console.log("form", dir.replace("../src", ""), file);
      return {
        text: file.replace(".md", ""),
        link: dir.replace("../src", "") + "/" + file,
      };
    });
}

const postFiles = getMarkdownFiles("../src/lessons");
console.log("postFiles", postFiles);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      pugPlugin(),
      prismjs({
        languages: "all",
        // plugins: ["line-numbers", "show-language"],
        theme: "default",
        css: true,
      }),
    ],
  },
  title: "zan0",
  description: "css IS awesome",
  srcDir: "./src",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: postFiles,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
