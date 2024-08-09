import { dataProjects } from '../modules/data/dataProjects.js';
import { treeModule } from '../modules/data/treeModule.js';

dataProjects.forEach((project) => {
  treeModule.insert('Module One', project.name, project.description);
});

export { treeModule as treeModuleUpdated };
