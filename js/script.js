import './services/languageStorage.js';
import './services/switchLanguage.js';
import './modules/data/treeModule.js';
import './services/insertProjects.js';
import RocketLaunch from './modules/components/rocketLaunch.js';
import createElement from './services/createElement.js';
import { treeModuleUpdated } from './services/insertProjects.js';
import { getCurrentLanguage } from './services/languageStorage.js';

export const parentContainer = document.querySelector('.link-list');
const languageLocal = getCurrentLanguage();
const rocket = new RocketLaunch('.rocket');
rocket.init();

treeModuleUpdated.root.children.map((project) =>
  createElement(
    project.key,
    project.description[languageLocal],
    parentContainer,
  ),
);
