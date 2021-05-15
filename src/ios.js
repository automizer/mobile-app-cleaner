const { run } = require('../utils/utils');
const ora = require('ora');

const clean = async () => {
  const cwd = process.cwd();

  const spinner = ora('Clean iOS Folders').start();
  run(`rm -rf ${cwd}/ios/build ${cwd}/ios/Pods`);
  spinner.succeed();

  const spinner2 = ora('Install iOS Pod').start();
  run(`cd ${cwd}/ios && pod install && cd ${cwd}`);
  spinner2.succeed();
};

module.exports = { clean };
