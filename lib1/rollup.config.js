
import vue from "rollup-plugin-vue";

import packageJson from "./package.json";

export default {
  input: "src/main.js",
  output: [
    {
        format: "esm", //'dist/library.ssr.js'
        file: packageJson.module,
        sourcemap: true
      },
    {
      format: "cjs",
      file: packageJson.main,//'src/index.js',
      sourcemap: true
    }
   
  ],
  plugins: [ vue()]
};