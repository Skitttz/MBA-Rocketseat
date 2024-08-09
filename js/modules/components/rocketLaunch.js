export default class RocketLaunch {
  constructor(targetRocket) {
    this.targetRocket = document.querySelector(targetRocket);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter() {
    this.targetRocket.classList.add('launch');
  }

  launch() {
    this.targetRocket.addEventListener('mouseenter', this.handleMouseEnter);
  }

  init() {
    if (this.targetRocket) {
      this.launch();
    }
  }
}
