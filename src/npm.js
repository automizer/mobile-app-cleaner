const { run } = require('../utils/utils');
const ora = require('ora');

const clean = async () => {
  const spinner = ora('Verify NPM Cache').start();
  run('npm cache verify');
  spinner.succeed();

  const spinner2 = ora('Install NPM Dependencies').start();
  run('npm ci');
  spinner2.succeed();
};

module.exports = { clean };
