const livescript = require('rollup-plugin-livescript');
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'app/app.ls',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  plugins: [
    livescript(),
    // commonjs before bultins      
    commonjs({ 
        extensions: ['.js', '.ls']
        }), // import commonjs from 'rollup-plugin-commonjs';
    builtins(), //  import builtins from 'rollup-plugin-node-builtins';
    resolve({ 
        extensions: ['.js', '.ls'] 
        }),
    ]
};
