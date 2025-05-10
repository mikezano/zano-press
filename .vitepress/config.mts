import fs from "fs";
import path from "path";
import prismjs from "vite-plugin-prismjs";
import pugPlugin from "vite-plugin-pug";
import { defineConfig } from "vitepress";

function getMarkdownFiles(dir: string): { text: string; link: string }[] {
  const fullPath = path.resolve(__dirname, dir);

  return fs
    .readdirSync(fullPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const result = file
        .replace(/^(\d{4}-\d{2}-\d{2})\s+/, "<span>$1</span><br/>")
        .replace(".md", "");
      return {
        text: result,
        link: dir.replace("../src", "") + "/" + file,
      };
    })
    .reverse();
}

const learningLessons = getMarkdownFiles("../src/markdown/learning-lessons");
const showcase = getMarkdownFiles("../src/markdown/showcase");
const bugs = getMarkdownFiles("../src/markdown/bugs");

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
        text: "Showcase",
        collapsed: true,
        items: showcase,
      },
      {
        text: "Experiments",
        collapsed: true,
        items: bugs,
      },
      { text: "Learning Lessons", collapsed: true, items: learningLessons },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    search: {
      provider: "local",
      options: {
        detailedView: true,
        async _render(src, env, md) {
          let html = await md.render(src);
          html = html.replaceAll("{{$frontmatter.title}}", "");

          return html;
        },
      },
    },
  },
});
