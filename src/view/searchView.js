class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.sideBarView = null;
  }

  render(dishId) {
    var content = /* template */ `
    <div class="header d-flex align-items-center justify-content-center">
      <h1>Dinner Planner</h1>
    </div>

    <style>div{border:0px solid;text-align:center;}</style>

    <div class="row">
      <div class="col-lg-3">
        <div class="sidebar">
          <div class="row">
            <div class="col-lg-9">
              <h4> My dinner </h4>
            </div>
          </div>

          <div class="row">
            <div class="col-3" style="padding-left: 30px"> People </div>
            <div class="col-9">
              <form>
                <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
                <input type="number" id="number" value="0" />
                <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">Level 1: .col-9</div>
    </div>
    `;
    this.container.innerHTML = content;
    this.afterRender();
  }
  
  afterRender() {
    this.sideBarView = document.getElementById("sideBarView");
  }
}
