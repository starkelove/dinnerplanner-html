class SidebarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.guestsInput = null;
    this.sideBarView = null;
    this.confirmBtn = null;
    this.deleteBtn = null;
    this.number = null;

    this.idMenu = [];

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
                  <div class="col-6"> Menu</div>
              </div>
              <div class="sideBarMenu">
                <div class="row">
                    <div class="col"><div class="value-main-course-name"></div></div>
                </div>
              </div>
              <div class="row">
                  <div class="col-6">Cost</div>
                  <div class="col-6"><div class="value-total-price">0</div> SEK</div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <a id="confirmBtn" class="btn btn-info">
                          Confirm Dinner
                      </a>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12">
                      <a id="deleteBtn" class="btn btn-info" style="background-color:red">
                          Remove all dishes
                      </a>
                  </div>
              </div>
          </div>
    `;
    this.container.innerHTML = content;

    //let array = this.model.getFullMenu();
    //let title = array.map(dish => dish.title);
    let array = this.model.getFullMenu();
    //let title = array.map(dish => dish.title);
    let tempS = "";
    let title = "";
    for(let i = 0; i < array.length; i++){
      title = array[i].title;
      //console.log(array[i].title);
      let s = i+1 + ". " +title;
      //console.log(s);
      tempS += dishMenu1;
      tempS += s;
      tempS += dishMenu2;
    }
    this.container.getElementsByClassName("sideBarMenu")[0].innerHTML = tempS;
    this.container.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();

    //console.log(this.container);
    this.afterRender();
  }

  afterRender() {
    this.sideBarView = document.getElementById("sideBarView");
    this.confirmBtn = document.getElementById("confirmBtn");
    this.deleteBtn = document.getElementById("deleteBtn");
    this.number = document.getElementById("number");
  }

  update(payload) {
    if(payload == "numberOfGuestsUpdate") {
      this.container.getElementsByClassName("input-num-guests")[0].value = this.model.getNumberOfGuests();
      this.container.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();
    }
    if(payload == "menuUpdate"){
      let array = this.model.getFullMenu();
      //let title = array.map(dish => dish.title);
      let tempS = "";
      let title = "";
      for(let i = 0; i < array.length; i++){
        title = array[i].title;
        let s = i+1 + ". " +title;
        this.idMenu[i] = array[i].id;
        tempS += dishMenu1;
        tempS += s;
        tempS += dishMenu2;
      }
      this.container.getElementsByClassName("sideBarMenu")[0].innerHTML = tempS;
      this.container.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();
      //sidebarController.addCross(this.idMenu);
      //this.addCross();
    }
  }

/*
  addCross(){
    console.log(this.idMenu);
    var closebtns = document.getElementsByClassName("close");
    console.log(closebtns);
    for(let i = 0; i < this.idMenu.length; i++){
      closebtns[i].addEventListener("click", this.addCrossToID(), false);
    }
    //document.getElementsByClassName("close").addEventListener("click", this.addCrossToID, false);
  }

  addCrossToID(){
    console.log("poo");
  }*/
}


const dishMenu1 =
`
<div class="row">
    <div class="col"><div class="value-main-course-name">`

const dishMenu2 =
`
</div></div>
</div>`
/*const content = `
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
`;*/
