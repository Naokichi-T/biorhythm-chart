import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { visualizer } from "rollup-plugin-visualizer";
// import purgecss from "@fullhuman/postcss-purgecss";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      preact(),
      mode === "analyze" &&
        visualizer({
          open: true,
          filename: "dist/stats.html",
          gzipSize: true,
          brotliSize: true,
        }),
    ],
    // css: {
    //   postcss: {
    //     plugins: [
    //       mode === "production" &&
    //         purgecss({
    //           content: ["dist/*.html", "dist/assets/*.js"],
    //         }),
    //     ],
    //   },
    // },
    resolve: {
      alias: {
        react: "preact/compat",
        "react-dom": "preact/compat",
      },
    },
  };
});
