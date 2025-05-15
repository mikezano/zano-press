export interface ShowcaseComponents {
  description: string;
  link: string;
  importPath: () => Promise<any>;
}

type ImportFunction = () => Promise<any>;

const getImportPath = (path: string): ImportFunction => {
  return () => import(`./showcase/${path}.vue`);
};
export const showcaseComponents: ShowcaseComponents[] = [
  {
    description: "Square Spinner",
    importPath: getImportPath("SquareLoader"),
    link: "/markdown/showcase/2025-05-10 Square Loader.html",
  },
  {
    description: "Animated Background",
    importPath: getImportPath("AnimatedBackground"),
    link: "/markdown/showcase/2025-05-10 Square Loader.html",
  },
  {
    description: "3D Button",
    importPath: getImportPath("ThreeDButton"),
    link: "/markdown/showcase/2025-05-10 Square Loader.html",
  },
];
