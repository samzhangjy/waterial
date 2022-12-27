import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";

/**
 * @type {import('@rollup/plugin-babel').RollupBabelInputPluginOptions}
 */
const babelConfig = {
  babelHelpers: "bundled",
  extensions: [".js", ".ts"],
};

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
  {
    input: "./src/index.ts",
    output: [
      {
        format: "cjs",
        sourcemap: true,
        file: "./dist/waterial-base.min.js",
      },
      {
        format: "es",
        sourcemap: true,
        file: "./dist/waterial-base.min.mjs",
      },
    ],
    plugins: [
      external(),
      typescript(),
      nodeResolve({ browser: true }),
      commonjs(),
      babel(babelConfig),
      terser({ ecma: 2015 }),
    ],
    treeshake: true,
  },
  {
    input: "./dist/src/index.d.ts",
    output: {
      file: "./dist/waterial-base.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
