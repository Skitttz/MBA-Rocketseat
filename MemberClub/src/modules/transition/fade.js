const timeDelayAnimation = 200;

export function fadeImageSrc(imgElement, newSrc, containerElement = null) {
  if (containerElement) {
    containerElement.style.opacity = 0;
  }
  imgElement.style.opacity = 0;

  setTimeout(() => {
    imgElement.setAttribute('src', newSrc);
    if (containerElement) {
      containerElement.style.opacity = 1;
    }
    imgElement.style.opacity = 1;
  }, timeDelayAnimation);
}

export function fadeDivContent(element) {
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.opacity = 1;
  }, timeDelayAnimation);
}

export function fadeAvatar(avatarElement, newSrc) {
  avatarElement.style.transition = 'opacity 0.5s ease-in-out';
  avatarElement.style.opacity = 0;

  avatarElement.addEventListener('transitionend', function handleTransition() {
    avatarElement.setAttribute('src', newSrc);
    avatarElement.style.opacity = 1;
    avatarElement.removeEventListener('transitionend', handleTransition);
  });
}
