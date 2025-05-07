import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./global.css";
import "./prism-overrides.css";

export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    const components = import.meta.glob("../components/*.vue", { eager: true });
    Object.entries(components).forEach(([path, definition]) => {
      const componentName = path.split("/").pop().replace(".vue", "");
      app.component(componentName, definition.default || definition);
    });
  },
} satisfies Theme;
