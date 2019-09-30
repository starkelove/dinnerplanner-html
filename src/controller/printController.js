class PrintController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      var self = this;

      var returnToSearch = function(){
        changeMyView("printView");
      }

      var goToPrint = function(){

      }

      document.getElementById("returnFromPrint").addEventListener("click", returnToSearch, false);

    }

    printMenu(){
      let menu = this.model.getFullMenu();
      let completeMenu = "";
      let tempMenu = "";
      for(let i = 0; i < menu.length; i++){
        tempMenu = this.newDish(menu[i]);
        completeMenu += tempMenu;
      }
      let payload = ["updatePrint", completeMenu];
      this.view.update(payload);
    }
    // TODO Lab 3
    newDish(dish){
      //this.view.detail.innerHTML = loader;
      //this.id = id;
      //let dish = await this.model.getDish(id);
      let title = dish.title;
      let id = dish.id;
      let ingredients = dish.extendedIngredients;
      ingredients = ingredients.map(dishen => dishen.original);
      //let pic = array.map(dish => dish.image);

      let imgString = "<img src=https://spoonacular.com/recipeImages/" + id + "-312x231.jpg>";
      let totalPrice = dish.pricePerServing;

      let showDish = "";
      showDish += detailDish1;
      showDish += title;
      showDish += detailDish2;
      showDish += ingredients;
      showDish += detailDish3;
      showDish += imgString;
      showDish += detailDish4;
      showDish += totalPrice;
      showDish += detailDish5;

      return showDish;
  //    let payload = ["updateDetail", showDish];
    //  this.view.update(payload);
    }
}

const detailDish1 =/* template */ `
         <div class="row align-items-center">
         Dish: 
         <div class="value-main-course-nameinview">
`;

const detailDish2 =/* template */ `
                </div>
         </div>
         <div class="row">
         <div class="col-md-5">
         Ingredients
         <div class="value-main-ingredients">
`;


const detailDish3 =/* template */ `
            </div>
         </div>
         <div class="col-md-5">
         <div class="value-picture">
`;

const detailDish4 =/* template */ `
            </div>
         </div>
         </div>
         <div class="row">
         Total price per serving:
         <div class="value-total-priceinview">
`;

const detailDish5 =/* template */ `
</div>
         </div>
          </div>
             <p class="text-center p-max-width">

                </p>
         </div>
`;
