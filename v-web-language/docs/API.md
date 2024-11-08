# V Web Language API Reference

## Class: VWeb

The main class for V Web Language functionality.

### Constructor

```javascript
const vweb = new VWeb();
```

### Methods

#### init()
Initializes the V web environment.

**Returns:**
- `Object`
  - `status` (string): Initialization status
  - `version` (string): Current version

#### createProject(name)
Creates a new project.

**Parameters:**
- `name` (string): The name of the project

**Returns:**
- `Object`
  - `projectName` (string): Project name
  - `created` (boolean): Creation status
  - `timestamp` (Date): Creation time

#### listProjects()
Lists all projects.

**Returns:**
- `Array`: List of project objects

#### getProject(name)
Gets a specific project's details.

**Parameters:**
- `name` (string): The name of the project

**Returns:**
- `Object|undefined`: Project object if found, undefined otherwise

#### deleteProject(name)
Deletes a project.

**Parameters:**
- `name` (string): The name of the project

**Returns:**
- `boolean`: True if deleted, false if not found