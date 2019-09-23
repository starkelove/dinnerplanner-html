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
          <div id="sidebarView" class="sidebar">
                  <div class="row">
                      <div class="col-9">
                          <h4> My dinner </h4>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-4">
                          <form>
                              <p class="text"> People </p>
                              <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
                                <input type="number" class="input-num-guests" id="number" value="1" />
                              <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>
                          </form>
                      </div>

                  </div>

                  <div class="row">
                      <div class="col-6"> Dish Name</div>
                      <div class="col-6"> Cost </div>
                  </div>
                  <div class="row">
                      <div class="col-6"><div class="value-main-course-name"></div></div>
                      <div class="col-6"><div class="value-total-price">0</div> SEK</div>
                  </div>
                  <div class="row">
                      <div class="col-12">
                          <a id="confirmBtn" class="btn btn-info">
                              Confirm Dinner
                          </a>
                      </div>
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
