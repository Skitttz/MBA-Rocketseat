import { parentContainer } from '../script.js';
import createElement from './createElement.js';
import { treeModuleUpdated } from './insertProjects.js';
import {
  getCurrentLanguage,
  updateLanguageStorage,
} from './languageStorage.js';

const buttons = [
  document.getElementById('ptbr'),
  document.getElementById('en'),
];

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    updateLanguageStorage(event.target.id);
    updateTexts();
  });
});

function updateTexts() {
  parentContainer.innerHTML = '';
  treeModuleUpdated.root.children.forEach((project) => {
    createElement(
      project.key,
      project.description[getCurrentLanguage()],
      parentContainer,
    );
  });
}
