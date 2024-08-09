/**
 * Creates and adds a list item to the specified parent container.
 *
 * @param {string} titleProject - The text of the link item in the list item.
 * @param {string} descriptionProject - The text of the description for the list item.
 * @param {HTMLElement} parentContainer - The parent element where the new list item will be added.
 */

import { sanitizeForHref } from '../modules/utils/sanitize.js';

export default function createElement(
  titleProject,
  descriptionProject,
  parentContainer,
) {
  const projectItem = document.createElement('li');
  projectItem.className = 'container-item';

  const description = document.createElement('p');
  description.className = 'description-item';
  description.textContent = descriptionProject;
  const linkItem = document.createElement('a');
  linkItem.className = 'link';
  linkItem.href = sanitizeForHref(titleProject);
  linkItem.textContent = titleProject;

  projectItem.appendChild(description);
  projectItem.appendChild(linkItem);

  parentContainer.appendChild(projectItem);
}
