class SidebarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.model.addObserver(this);
    this.guestsInput = null;
    this.sideBarView = null;

  }

  render() {
    var content = /* template */ `
    <div id="sidebarView">
      <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
        <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
          <input type="number" class="input-num-guests" id="number" value="1" />
        <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>
      </div>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.startBtn = this.container.getElementsByClassName("value-num-guests");
  }

  update(payload) {
    if(payload == "numberOfGuestsUpdate") {
      document.getElementsByClassName("input-num-guests")[0].value = this.model.getNumberOfGuests();
    }
  }

}
