const { run } = require('../utils/utils');
const ora = require('ora');

const clean = async () => {
  const cwd = process.cwd();

  const spinner = ora('Clean Android Folder').start();
  run(`rm -rf ${cwd}/android/build`);
  spinner.succeed();

  const spinner2 = ora('Clean Android Gradlew').start();
  run(`cd ${cwd}/android && ./gradlew clean && cd ${cwd}`);
  spinner2.succeed();
};

module.exports = { clean };
