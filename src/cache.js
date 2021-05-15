const { run } = require('../utils/utils');
const ora = require('ora');

const clean = async () => {
  const spinner = ora('Clean Cache').start();

  run(`rm -rf $TMPDIR/react-*`);
  run(`rm -rf $TMPDIR/metro-*`);
  run(`watchman watch-del-all`);

  spinner.succeed();
};

module.exports = { clean };
