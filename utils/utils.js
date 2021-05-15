const { execSync } = require('child_process');

const hasParam = (param) => process.argv.includes(param);
const greetings = () => {
  console.log(`\x1b[36m
  mobile app  __
        _____/ /__  ____  ____  ___  _____
       / ___/ / _ \\/ __ '/ __ \\/ _ \\/ ___/
      / /__/ /  __/ /_/ / / / /  __/ /    
      \\___/_/\\___/\\__,_/_/ /_/\\___/_/\n\n\x1b[0m`);
};
const run = (command) => {
  execSync(command, { stdio: hasParam('--verbose') ? 'inherit' : 'ignore' });
};

module.exports = { hasParam, greetings, run };
