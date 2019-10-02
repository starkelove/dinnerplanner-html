class PrintView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.overviewView = null;
    }

    render() {

      this.container.innerHTML = content;

      document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
      document.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();
      document.getElementsByClassName("value-total-priceinview")[0].innerHTML = this.model.getTotalMenuPrice();

      let array = this.model.getFullMenu();
      let title = array.map(dish => dish.title);
      let ingredients = array.map(dish => dish.extendedIngredients);
      ingredients = array.map(dish => dish.extendedIngredients).map(dishen => dishen.map(item => item.name));
      let pic = array.map(dish => dish.image);

      let imgString = "<img src=" + pic[0] + ">"
      document.getElementsByClassName("value-main-course-name")[0].innerHTML = title;
      document.getElementsByClassName("value-main-course-nameinview")[0].innerHTML = title;
      document.getElementsByClassName("value-main-ingredients")[0].innerHTML = ingredients;
      document.getElementsByClassName("value-picture")[0].innerHTML = imgString;

      this.afterRender();
    }

    afterRender() {
      this.overviewView = document.getElementById("overviewView");
      document.getElementById("loader").style.display = "none";
    }
}
const content = `
<div id="loader" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
</div>
<style>div{border:0px solid; padding-left: 30px; padding-right: 30px;}</style>
<div class="header d-flex align-items-center justify-content-center">
    <h1>Dinner Planner</h1>
</div>
<div id="overviewView">
  <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
  <div class="row">
  <div class="value-num-guests"></div>
    people are coming.
  </div>
  <div class="row">
  They will eat
  <div class="value-main-course-name"></div>
  </div>
  <div class="row">
    It will cost
    <div class="value-total-price">0</div> SEK</div>
  </div>
  <div class="row">
  </div>
    <div class="row">
    <div class="row align-items-center">
    Dish
    <div class="value-main-course-nameinview"></div>
    </div>
    <div class="row">
    <div class="col-md-5">
    Ingredients
    <div class="value-main-ingredients"></div>
    </div>
    <div class="col-md-5">
    <div class="value-picture"></div>
    </div>
    </div>
    <div class="row">
    Total price per serving:
    <div class="value-total-priceinview"></div>
    </div>
     </div>
        <p class="text-center p-max-width">

           </p>
    </div>
    </div>
  </div>
</div>

`;
