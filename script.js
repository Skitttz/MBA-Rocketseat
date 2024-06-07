class RocketLaunch {
  constructor(classRocket) {
    this.classRocket = document.querySelector(classRocket);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter() {
    this.classRocket.classList.add("launch");
  }

  launch() {
    this.classRocket.addEventListener("mouseenter", this.handleMouseEnter);
  }

  init() {
    if (this.classRocket) {
      this.launch();
    }
  }
}

const rocket = new RocketLaunch(".rocket");
rocket.init();
