#!/usr/bin/env node
// Small wrapper to start webpack-dev-server programmatically and sanitize devServer options
require('ts-node/register');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

function sanitize(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(sanitize);
  const out = {};
  for (const key of Object.keys(obj)) {
    if (key.startsWith('_')) continue; // drop internal underscored props
    out[key] = sanitize(obj[key]);
  }
  return out;
}

(async function start() {
  try {
    const webpackConfigFactory = require(path.resolve(__dirname, '..', 'webpack.config.ts')).default;
    const env = { mode: process.env.NODE_ENV || 'development', port: process.env.PORT || 3000 };
    const config = webpackConfigFactory(env);

    const devServerOptions = sanitize(config.devServer || {});

    // eslint-disable-next-line no-console
    console.log('Starting dev server with sanitized devServer options:', JSON.stringify(devServerOptions, null, 2));

    const compiler = webpack(config);
    const server = new WebpackDevServer(devServerOptions, compiler);

    await server.start();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to start dev server:', err);
    process.exit(1);
  }
})();
