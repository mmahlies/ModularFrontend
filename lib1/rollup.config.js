import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import path from 'path';
import alias from "@rollup/plugin-alias"
console.log ("__dirname " + __dirname);
export default {
    input: 'src/main.js', // Path relative to package.json
    output: {
        name: 'lib1',
        exports: 'named',
    },
    plugins: [
        alias({
                entries:{
                    '@':path.resolve(__dirname, 'src')
                }
        }),
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
    ],
};