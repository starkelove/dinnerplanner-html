class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.overviewView = null;
    }
        //<div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
      let content = `

      <div id="overviewView">

        <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
          <div class="row">
            <div class="col-5">My dinner:<div class="value-num-guests"></div>guests</div>
            <div class="col-5">                <a id="returnFromOverview" class="btn btn-info">
                                Go back and edit dinner
                            </a></div>
          </div>

          <div class="show">
            <div class="dishListImg">
                <div class="row">
                  <div class="col">
                  </div>
                </div>
              </div>

                <div class="dishListName">
                <div class="row">
                  <div class="col">
                  </div>
                </div>
              </div>

                <div class="dishListPrice">
                <div class="row">
                  <div class="col">
                  </div>
                </div>
              </div>


          <div class="row">
            <div class="col">
            Total price:
            <div class="value-total-price"></div> SEK</div>
            </div>
          </div>


          <div class="row">
            <div class="col">
            <a id="toPrintBtn" class="btn btn-info">
              Print dinner man
            </a>

            </div>
        </div>
        </div>
      </div>
      `;

      this.container.innerHTML = content;

      this.container.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
      this.container.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();

      this.updateMenuView();

      this.afterRender();

    }

    afterRender() {
      this.overviewView = document.getElementById("overviewView");
      //console.log(this.overviewView);
    }

    updateMenuView(){
      let array = this.model.getFullMenu();
      //let title = array.map(dish => dish.title);
      let tempImg = `<div class="row">`;
      let tempName = `<div class="row">`;
      let tempPrice = `<div class="row">`;
      let title = "";
      let id = 0;
      let price = 0;
      for(let i = 0; i < array.length; i++){
        title = array[i].title;
        id = array[i].id;
        price = array[i].pricePerServing;
      //  console.log(array[i].title);
        //let s = i+1 + ". " +title;
        //console.log(s);
        tempImg += col1;
        tempImg += "<img src=https://spoonacular.com/recipeImages/" + id + "-240x150.jpg>";
        tempImg += col2;
        tempName += col1;
        tempName += title;
        tempName += col2;
        tempPrice += col1;
        tempPrice += price + " SEK";
        tempPrice += col2;
      }

      tempImg += "</div>";
      tempName += "</div>";
      tempPrice += "</div>";
      this.container.getElementsByClassName("dishListImg")[0].innerHTML = tempImg;
      this.container.getElementsByClassName("dishListName")[0].innerHTML = tempName;
      this.container.getElementsByClassName("dishListPrice")[0].innerHTML = tempPrice;
    }

    update(payload) {
      // TODO Lab3
      if(payload == "updateMenu"){
        this.updateMenuView();
        this.overviewView.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
        this.overviewView.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();
      }
    }
}

const col1 =
`
<div class="col">
`

const col2 =
`
</div>
`
