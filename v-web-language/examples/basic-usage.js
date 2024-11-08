const VWeb = require('../src/index.js');

// Create new instance
const vweb = new VWeb();

// Initialize
console.log('Initialization:', vweb.init());

// Create a project
console.log('Project Creation:', vweb.createProject('my-v-project')); 