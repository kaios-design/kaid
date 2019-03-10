module.exports = function (api) {
  const isTest = api.env('test');
  const type = isTest ? 'auto' : 'false';

  const presets = [
    ["@babel/preset-env", { "modules": type }],
    "@babel/preset-react"
  ];
  const plugins = [
    "@babel/plugin-proposal-class-properties"
  ]

  return {
    presets,
    plugins
  };
}
