export function clearData(...elements) {
  elements.forEach((element) => {
    if (element instanceof HTMLElement) {
      element.innerHTML = '';
    } else if (element instanceof NodeList) {
      element.forEach((node) => {
        if (node instanceof HTMLElement) {
          node.innerHTML = '';
        }
      });
    }
  });
}
