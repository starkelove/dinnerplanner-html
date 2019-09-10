class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
  }

  render(dishId) { //glöm ej lägga till id="dishSearchView"
    var content = /* template */ `
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
    this.afterRender();
  }
  
  afterRender() {
    this.dishSearchView = document.getElementById("dishSearchView");
  }
}
