class DetailController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.id = null;

    }

    renderView() {
      this.view.render();

      var self = this;
      var addToMenu = async function(){
        let dish = await self.model.getDish(self.id);
        self.model.addDishToMenu(dish);

      }
      var returnToSearch = function() {
        changeViewToSearch("detailView");
      }

      this.view.addToMenuBtn.addEventListener("click", addToMenu, false);
      this.view.returnSearchBtn.addEventListener("click", returnToSearch, false);

    }

    async newDish(id){
      this.view.detail.innerHTML = loader;
      this.id = id;
      let dish = await this.model.getDish(id);
      let title = dish.title;
      let ingredients = dish.extendedIngredients;
      ingredients = ingredients.map(dishen => dishen.original);
      //let pic = array.map(dish => dish.image);

      let imgString = "<img src=https://spoonacular.com/recipeImages/" + id + "-312x231.jpg>";
      let totalPrice = dish.pricePerServing;

      let showDish = "";
      showDish += detailCont1;
      showDish += title;
      showDish += detailCont2;
      showDish += ingredients;
      showDish += detailCont3;
      showDish += imgString;
      showDish += detailCont4;
      showDish += totalPrice;
      showDish += detailCont5;

      let payload = ["updateDetail", showDish];
      this.view.update(payload);
    }

}

const detailCont1 =/* template */ `
         <div class="row align-items-center">
         Dish
         <div class="value-main-course-nameinview">
`;

const detailCont2 =/* template */ `
                </div>
         </div>
         <div class="row">
         <div class="col-md-5">
         Ingredients
         <div class="value-main-ingredients">
`;


const detailCont3 =/* template */ `
            </div>
         </div>
         <div class="col-md-5">
         <div class="value-picture">
`;

const detailCont4 =/* template */ `
            </div>
         </div>
         </div>
         <div class="row">
         Total price per serving:
         <div class="value-total-priceinview">
`;

const detailCont5 =/* template */ `
</div>
         </div>
          </div>
             <p class="text-center p-max-width">

                </p>
         </div>
`;

const loader = `
<div id="loader" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
</div>
`
