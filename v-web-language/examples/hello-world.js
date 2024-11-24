const VWeb = require('../src/index.js');

// Create new instance
const vweb = new VWeb();

// Initialize with hello world message
console.log('\n=== Hello World Example ===\n');

// Initialize VWeb
const init = vweb.init();
console.log('VWeb Initialized:', init);

// Create a simple project
const project = vweb.createProject('hello-world');
console.log('\nCreated Project:', project);

// Add a greeting component
vweb.addComponent('hello-world', {
    name: 'HelloMessage',
    type: 'greeting'
});

// Add root route
vweb.addRoute('hello-world', {
    path: '/',
    component: 'HelloMessage'
});

// Show final project details
const finalProject = vweb.getProject('hello-world');
console.log('\nFinal Project Details:', finalProject);

// List all projects
console.log('\nAll Projects:', vweb.listProjects()); 