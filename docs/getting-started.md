# Getting Started with V Web Language

## Installation

Install the package using npm: 
```bash
npm install v-web-language
```

## Basic Usage

1. **Import and Initialize**
```javascript
const VWeb = require('v-web-language');

// Create new instance
const vweb = new VWeb();

// Initialize
vweb.init();

// Create a project
vweb.createProject('my-v-project');
```

2. **Create a Template**
```javascript
const template = vweb.createTemplate('spa', {
    type: 'Single Page Application',
    features: ['routing', 'components']
});
```

3. **Create a Project**
```javascript
const project = vweb.createProject('my-app', 'spa');
```

## API Reference

### init()
Initializes the V web environment

### createProject(name)
Creates a new V web project with the specified name 