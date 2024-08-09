import RocketLaunch from './modules/components/rocketLaunch.js';
import './modules/data/treeModule.js';
import createElement from './services/createElement.js';
import './services/insertProjects.js';
import { treeModuleUpdated } from './services/insertProjects.js';

const parentContainer = document.querySelector('.link-list');
const rocket = new RocketLaunch('.rocket');
rocket.init();

treeModuleUpdated.root.children.map((project) =>
  createElement(project.key, project.description, parentContainer),
);
