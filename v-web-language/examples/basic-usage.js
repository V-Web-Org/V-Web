const VWeb = require('../src/index.js');

// Create new instance
const vweb = new VWeb();

// Initialize
console.log('Initialization:', vweb.init());

// Create a template
const template = vweb.createTemplate('spa', {
    type: 'Single Page Application',
    features: ['routing', 'components', 'state-management']
});
console.log('Created Template:', template);

// Create a project with template
const project = vweb.createProject('my-web-app', 'spa');
console.log('Created Project:', project);

// Add components
vweb.addComponent('my-web-app', {
    name: 'Header',
    type: 'navigation'
});

vweb.addComponent('my-web-app', {
    name: 'Footer',
    type: 'static'
});

// Add routes
vweb.addRoute('my-web-app', {
    path: '/',
    component: 'Home'
});

vweb.addRoute('my-web-app', {
    path: '/about',
    component: 'About'
});

// Get project details
console.log('Project Details:', vweb.getProject('my-web-app'));

// List all projects
console.log('All Projects:', vweb.listProjects()); 