// scripts/run-setup.js
const setup = require('./setup');

setup()
  .then(() => {
    console.log('Setup script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Setup script failed:', error);
    process.exit(1);
  });