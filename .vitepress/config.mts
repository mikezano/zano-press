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
        .replace(/^(\d{4}-\d{2}-\d{2})-/, "<span>$1</span><br/>")
        .replace(/-/g, " ")
        .replace(".md", "");
      return {
        text: result,
        link: dir.replace("../src", "") + "/" + file,
      };
    })
    .reverse();
}

const learningLessons = getMarkdownFiles("../src/learning-lessons");
const showcase = getMarkdownFiles("../src/showcase");
//const bugs = getMarkdownFiles("../src/markdown/bugs");

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
  srcDir: "src",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //nav: [],
    sidebar: [
      {
        text: "Showcase",
        collapsed: true,
        items: showcase,
      },
      { text: "Learning Lessons", collapsed: true, items: learningLessons },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/mikezano" }],
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
