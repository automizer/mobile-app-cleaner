#!/usr/bin/env node
const { greetings, hasParam } = require('./utils/utils');
const cache = require('./src/cache');
const npm = require('./src/npm');
const ios = require('./src/ios');
const android = require('./src/android');

const cli = async () => {
  await cache.clean();
  await npm.clean();

  hasParam('--ios') && await ios.clean();
  hasParam('--android') && await android.clean();

  if (!hasParam('--ios') && !hasParam('--android')) {
    await ios.clean();
    await android.clean();
  }
};

greetings();
cli();
