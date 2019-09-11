class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
    // this.sideBarView = null;
    // this.sideBarView = new SideBarView(this.containter, this.model);
    //
    // this.sideBarView.render();
    //const view = new SideBarView(container, model);
    //view.render();
  }

  render(dishId) { //glöm ej lägga till id="dishSearchView"
    var content = /* template */ `
    <div class="col-3">
        <div id="sideBarView" class="sidebar">
                <div class="row">
                    <div class="col-9">
                        <h4> My dinner </h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3"> People </div>
                        <div class="col-9">
                            <form>
                                <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
                                    <input type="number" id="value-num-guests" value="0" />
                                <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>
                            </form>
                        </div>
                </div>

                <div class="row">
                    <div class="col-6"> Dish Name</div>
                    <div class="col-6"> Cost </div>
                </div>
                <div class="row">
                    <div class="col-6"> </div>
                    <div class="col-6"> SEK </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <a id="confirmBtn" class="btn btn-info">
                            Confirm Dinner
                        </a>
                    </div>
                </div>
            </div>
    </div>
    <div class="header d-flex align-items-center justify-content-center">
      <h1>Dinner Planner</h1>
    </div>

    <div class="row">
      <div class="col-3">
      <div id="dishSearchView">
        FIND A DISH
      </div>
      </div>
    </div>

    `;
    this.container.innerHTML = content;
    document.getElementById("value-num-guests").value = this.model.getNumberOfGuests();
    //console.log(document.getElementById("value-num-guests").value);
    this.afterRender();
  }

  afterRender() {
    this.dishSearchView = document.getElementById("dishSearchView");
  //  this.model.setNumberOfGuests(2);
    //document.getElementById("loader").style.display = "none";

    document.getElementById("value-num-guests").value = this.model.getNumberOfGuests();

  }
}
