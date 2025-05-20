export interface ShowcaseComponents {
  description: string;
  link: string;
  component: string;
}

// export const createDynamicComponent = (componentName: string) => {
//   return defineComponent({
//     name: componentName,
//     render() {
//       return h(componentName);
//     },
//   });
// };
export const showcaseComponents: ShowcaseComponents[] = [
  {
    description: "Square Spinner",
    component: "SquareLoader",
    link: "/markdown/showcase/2025-05-10 Square Loader.html",
  },
  {
    description: "Animated Background",
    component: "AnimatedBackground",
    link: "/markdown/showcase/2025-05-10 Square Loader.html",
  },
  {
    description: "3D Button",
    component: "ThreeDButton",
    link: "/markdown/showcase/2025-05-10 Square Loader.html",
  },
];
