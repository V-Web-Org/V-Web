const VWeb = require('../src/index.js');

// Create new instance
const vweb = new VWeb();

// Initialize with hello world message
console.log('Hello World from VWeb!');
console.log('Initialization:', vweb.init());

// Create a hello world template
const template = vweb.createTemplate('hello', {
    type: 'Simple Page',
    features: ['greeting']
});
console.log('Created Template:', template);

// Create a project with hello template
const project = vweb.createProject('hello-world', 'hello');
console.log('Created Project:', project);

// Add hello component
vweb.addComponent('hello-world', {
    name: 'Greeting',
    type: 'message'
});

// Add home route
vweb.addRoute('hello-world', {
    path: '/',
    component: 'Greeting'
});

// Get project details
console.log('Project Details:', vweb.getProject('hello-world')); 