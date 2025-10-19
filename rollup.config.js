import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts', // or wherever your entry is
    output: {
        file: 'dist/index.esm.js',
        format: 'esm',          // <-- browser-friendly ESM
        sourcemap: true
    },
    plugins: [
        resolve({ browser: true }), // resolve node_modules
        commonjs(),                 // convert CJS to ESM
        typescript({ tsconfig: './tsconfig.json' }),
        terser()                    // optional: minify
    ],
};
