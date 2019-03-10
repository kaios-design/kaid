import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from "rollup-plugin-commonjs";
import scss from 'rollup-plugin-scss';

export default {
  input: 'components/index.js',
  output: {
    file: 'lib/kaid.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    resolve(),
    commonjs(),
    scss({
      output: 'lib/style.css'
    })
  ],
  external: id => /^react/.test(id)
};
