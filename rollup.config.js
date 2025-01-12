import terser from "@rollup/plugin-terser";

export default {
  input: "src/mathy.js",
  output: {
    name: "mathy",
    file: "dist/bundle.js",
    format: "umd",
    plugins: [terser()]
  }
};
