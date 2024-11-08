const VWeb = require('../src/index.js');

// Create new instance
const vweb = new VWeb();

// Initialize
console.log(vweb.init());

// Create a project
console.log(vweb.createProject('my-v-project')); 