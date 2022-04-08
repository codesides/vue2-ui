import vue from "rollup-plugin-vue";
import node from "rollup-plugin-node-resolve";
import cjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import image from "@rollup/plugin-image";

import fs from "fs";
import path from "path";

import pack from "./package.json";

const babelConfig = {
  exclude: "node_modules/**",
  runtimeHelpers: true,
  babelrc: false,
  presets: [["@babel/preset-env", { modules: false }]],
};

const bannerTxt = `/*! Components 组件的 v${pack.version} | js备注 */`;
// 文件路径
const baseFolder = "./src/";
// 组件
const componentsFolder = "components/";

const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter((f) =>
    fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
  );

const entries = {
  index: "./src/index.js",
  helpers: "./src/utils/helpers.js",
  config: "./src/utils/ConfigComponent.js",
  ...components.reduce((obj, name) => {
    obj[name] = baseFolder + componentsFolder + name;
    return obj;
  }, {}),
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const vuePluginConfig = {
  template: {
    isProduction: true,
    compilerOptions: {
      whitespace: "condense",
    },
  },
};

export default () => {
  const mapComponent = (name) => {
    return [
      {
        input: baseFolder + componentsFolder + `${name}/index.js`,
        external: ["vue"],
        output: {
          format: "umd",
          name: capitalize(name),
          file: `packages/lib/components/${name}/index.js`,
          banner: bannerTxt,
          exports: "named",
          globals: {
            vue: "Vue",
          },
        },
        plugins: [
          node({
            extensions: [".vue", ".js"],
          }),
          cjs(),
          vue(vuePluginConfig),
          babel(babelConfig),
          image(),
        ],
      },
    ];
  };

  let config = [
    {
      input: entries,
      external: ["vue"],
      output: {
        format: "esm",
        dir: `packages/esm`,
      },
      plugins: [
        node({
          extensions: [".vue", ".js"],
        }),
        vue(vuePluginConfig),
        babel(babelConfig),
        cjs(),
        image(),
      ],
    },
    {
      input: entries,
      external: ["vue"],
      output: {
        format: "cjs",
        dir: "packages/cjs",
        exports: "named",
      },
      plugins: [
        node({
          extensions: [".vue", ".js"],
        }),
        vue(vuePluginConfig),
        babel(babelConfig),
        cjs(),
        image(),
      ],
    },
    {
      input: "src/index.js",
      external: ["vue"],
      output: {
        format: "umd",
        name: capitalize("buefy"),
        file: "packages/hcui.js",
        exports: "named",
        banner: bannerTxt,
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        node({
          extensions: [".vue", ".js"],
        }),
        vue(vuePluginConfig),
        babel(babelConfig),
        cjs(),
        image(),
      ],
    },
    {
      input: "src/index.js",
      external: ["vue"],
      output: {
        format: "esm",
        file: "packages/hcui.esm.js",
        banner: bannerTxt,
      },
      plugins: [
        node({
          extensions: [".vue", ".js"],
        }),
        vue(vuePluginConfig),
        babel(babelConfig),
        cjs(),
        image(),
      ],
    },
    // individual components
    ...components.map((f) => mapComponent(f)).reduce((r, a) => r.concat(a), []),
  ];

  if (process.env.MINIFY === "true") {
    config = config.filter((c) => !!c.output.file);
    config.forEach((c) => {
      c.output.file = c.output.file.replace(/\.js/g, ".min.js");
      c.plugins.push(
        terser({
          output: {
            comments: "/^!/",
          },
        })
      );
    });
  }
  return config;
};
