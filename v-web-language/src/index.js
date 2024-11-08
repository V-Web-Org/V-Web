class VWeb {
    constructor() {
        this.version = '1.1.0';
        this.projects = new Map();
        this.templates = new Map();
    }

    // Initialize V web environment
    init() {
        return {
            status: 'initialized',
            version: this.version,
            timestamp: new Date()
        };
    }

    // Create a new V web project
    createProject(name, template = 'default') {
        const project = {
            projectName: name,
            created: true,
            template: template,
            timestamp: new Date(),
            components: [],
            routes: []
        };
        this.projects.set(name, project);
        return project;
    }

    // New Methods
    addComponent(projectName, component) {
        const project = this.projects.get(projectName);
        if (project) {
            project.components.push({
                name: component.name,
                type: component.type,
                created: new Date()
            });
            return true;
        }
        return false;
    }

    addRoute(projectName, route) {
        const project = this.projects.get(projectName);
        if (project) {
            project.routes.push({
                path: route.path,
                component: route.component,
                created: new Date()
            });
            return true;
        }
        return false;
    }

    createTemplate(name, config) {
        this.templates.set(name, {
            name,
            config,
            created: new Date()
        });
        return this.templates.get(name);
    }

    getProject(name) {
        return this.projects.get(name);
    }

    listProjects() {
        return Array.from(this.projects.values());
    }

    listTemplates() {
        return Array.from(this.templates.values());
    }

    deleteProject(name) {
        return this.projects.delete(name);
    }
}

module.exports = VWeb; 