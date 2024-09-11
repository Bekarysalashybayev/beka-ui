import typescript from 'rollup-plugin-typescript2';
import vue from '@vitejs/plugin-vue';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';

export default {
    input: 'src/index.ts',
    output: [
        {
            format: 'es',
            file: 'dist/index.esm.js',
        },
        {
            format: 'cjs',
            file: 'dist/index.cjs.js',
            exports: 'named',
        },
    ],
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true, // Ensure the declaration files are output
            tsconfigOverride: {
                compilerOptions: {
                    declaration: true,
                    declarationDir: 'dist/types',
                },
            },
        }),
        vue(),
        nodeResolve(),
        postcss({
            extract: true,
        }),
        url({
            include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'],
            limit: 8192,
        }),
    ],
    external: ['vue'],
};
