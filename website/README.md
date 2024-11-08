# V Web Language

A web language package for V programming that helps integrate V with web development.

[![npm version](https://img.shields.io/npm/v/v-web-language.svg)](https://www.npmjs.com/package/v-web-language)
[![npm downloads](https://img.shields.io/npm/dm/v-web-language.svg)](https://www.npmjs.com/package/v-web-language)

## Installation

```bash
npm install v-web-language
```

## Features

- Project Management
  - Create and manage web projects
  - Template-based project creation
  - Component tracking
  - Route management
- Easy Integration with V programming
- Web-specific language utilities
- Template System
- Component Management
- Routing Support

## Usage

```javascript
// Import the package
const VWeb = require('v-web-language');

// Create new instance
const vweb = new VWeb();

// Initialize
vweb.init();

// Create a template
vweb.createTemplate('spa', {
    type: 'Single Page Application',
    features: ['routing', 'components', 'state-management']
});

// Create a project using template
const project = vweb.createProject('my-web-app', 'spa');

// Add components
vweb.addComponent('my-web-app', {
    name: 'Header',
    type: 'navigation'
});

// Add routes
vweb.addRoute('my-web-app', {
    path: '/',
    component: 'Home'
});
```

## API Documentation

### Core Methods

#### `init()`
Initializes the V web environment
```javascript
const status = vweb.init();
// Returns: { status: 'initialized', version: '1.1.0', timestamp: Date }
```

#### `createProject(name, template)`
Creates a new V web project
```javascript
const project = vweb.createProject('my-project', 'spa');
```

#### `createTemplate(name, config)`
Creates a new project template
```javascript
const template = vweb.createTemplate('spa', {
    type: 'Single Page Application',
    features: ['routing', 'components']
});
```

#### `addComponent(projectName, component)`
Adds a component to a project
```javascript
vweb.addComponent('my-project', {
    name: 'Header',
    type: 'navigation'
});
```

#### `addRoute(projectName, route)`
Adds a route to a project
```javascript
vweb.addRoute('my-project', {
    path: '/about',
    component: 'About'
});
```

## Examples

```javascript
const VWeb = require('v-web-language');
const vweb = new VWeb();

// Initialize
vweb.init();

// Create template
vweb.createTemplate('webapp', {
    type: 'Web Application',
    features: ['routing', 'components']
});

// Create project
const project = vweb.createProject('my-app', 'webapp');

// Add components and routes
vweb.addComponent('my-app', { name: 'Header', type: 'nav' });
vweb.addRoute('my-app', { path: '/', component: 'Home' });

// Get project details
console.log(vweb.getProject('my-app'));
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC License - see the [LICENSE](LICENSE) file for details

## Author

ajsuper007

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## Version History

- 1.1.0: Enhanced Features
  - Added template system
  - Added component management
  - Added route management
  - Improved project structure
- 1.0.0: Initial release
  - Basic V web integration features
  - Web development utilities
