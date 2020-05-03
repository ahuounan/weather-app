const isProd = String(process.env.NODE_ENV) === 'production';
const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { targets: '> 0.25%, not dead', modules: isTest ? 'commonjs' : false }
    ],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    'transform-inline-environment-variables',
    [
      'babel-plugin-jsx-pragmatic',
      {
        export: 'jsx',
        module: '@emotion/core',
        import: '___EmotionJSX'
      }
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: '___EmotionJSX',
        pragmaFrag: 'React.Fragment'
      }
    ],
    [
      'emotion',
      {
        useBuiltIns: false,
        hoist: isProd,
        sourceMap: !isProd,
        autoLabel: !isProd,
        labelFormat: '[local]',
        throwIfNamespace: true
      }
    ]
  ]
};
