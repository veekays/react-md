import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/js/index.js',
  format: 'umd',
  dest: 'bunlde.js',
  external: ['react', 'react-dom'],
  plugins: [
    commonjs({
      include: ['node_modules/**'],
    }),
    babel({
      exclude: 'node_modues/**',
    }),
    resolve(),
  ],
  exports: 'named',
  sourceMap: true,
  moduleName: 'ReactMD',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
