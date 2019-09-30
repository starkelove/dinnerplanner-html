class DetailView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
  }



  render(dishId) { //glöm ej lägga till id="dishSearchView"

    //this.model.setNumberOfGuests(2);
    this.container.innerHTML = content;
    //document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
    //document.getElementById("number").value = this.model.getNumberOfGuests();
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
    //document.getElementsByClassName("dishItems")[0].innerHTML = title;
    this.afterRender();
  }

  afterRender() {
    this.dishSearchView = document.getElementById("dishSearchView");
    //document.getElementById("loader").style.display = "none";

  }
}

const content =/* template */ `


<div class="row">

     <div class="col-9">
         <div id="detailView">
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

`;
