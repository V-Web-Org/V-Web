# Getting Started with V Web Language

## Installation

```bash
npm install v-web-language
```

## Basic Usage

```javascript
const VWeb = require('v-web-language');

// Create new instance
const vweb = new VWeb();

// Initialize
vweb.init();

// Create a project
vweb.createProject('my-v-project');
```

## API Reference

### init()
Initializes the V web environment

### createProject(name)
Creates a new V web project with the specified name 