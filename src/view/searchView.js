class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
    this.sideBarView = null;
  }

  render(dishId) {
    this.container.innerHTML = content;
    document.getElementById("number").innerHTML = this.model.getNumberOfGuests();
    console.log(this.container)
    this.afterRender();
  }
  
  afterRender() {
    //this.dishSearchView = this.container.getElementById("dishSearchView");
    this.dishSearchView = document.getElementsByClassName("#dishSearchView");
    this.sideBarView = document.getElementById("sideBarView");
    console.log(this.sideBarView);
  }
  
}

const content = /* template */ `
    <div id="selectDish-container">
    <style>div{border:0px solid; padding-left: 30px; padding-right: 30px;}</style>
    <div class="header d-flex align-items-center justify-content-center">
        <h1>Dinner Planner</h1>
    </div>

    <div class="row">
          <div class="col-3">
              <div id="sideBarView" class="sidebar">
                      <div class="row">
                          <div class="col-9">
                              <h4> My dinner </h4>
                          </div>
                      </div>
                      
                      <div class="row">   
                          <div class="col-4">
                              <form>
                                  <p class="text"> People </p>
                                  <div class="value-num-guests">
                                      <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
                                          <input type="number" id="number" value="0" />
                                      <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>
                                  </div>
                                  
                                  
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
          <div class="col-9">
              <div id="dishSearchView">
                  <p class="text"> FIND A DISH </p>
              </div>
          </div>    
      </div>
  </div> 
    `;
