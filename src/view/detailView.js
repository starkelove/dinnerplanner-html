class DetailView {
  constructor(container, model) {
    this.container = container;
    this.model = model;

    this.detailView = null;
    this.dishLoader = null;
    this.addToMenuBtn = null;
    this.returnSearchBtn = null;
    this.detail = null;
    this.savedDish = null;

  }

  render(dishId) {

    let content =/* template */ `

          <div id="detailView">
            <div class="row align-items-center">
               <div class="detail" id="detail">
                 <div id="dishLoader" class="spinner-border" role="status">
                     <span class="sr-only">Loading...</span>
                 </div>

               </div>
               <div class="row">
                  <div class="col">
                  <a id="addToMenuBtn" class="btn btn-info">
                      Add to menu
                  </a>
                </div>
                <div class="col">
                <a id="returnSearchBtn" class="btn btn-info">
                    Return to search
                </a>
                </div>
           </div>
         </div>


    `;
    this.container.innerHTML = content;

    document.getElementById("detail").innerHTML = loader;
    if(dishId == -1){
      //Do nothing
    }else{
      this.showDetails(dishId);
    }

    this.afterRender();
  }

  afterRender() {
    this.detailView = document.getElementById("detailView");
    this.dishLoader = document.getElementById("dishLoader");
    this.addToMenuBtn = document.getElementById("addToMenuBtn");
    this.returnSearchBtn = document.getElementById("returnSearchBtn");
    this.detail = document.getElementById("detail");

    //this.dishLoader.style.display = "none";
  }

  update(payload) {
    if(payload[0] == "updateDetail") {
          this.detail.innerHTML = payload[1];
    }
  }

  async showDetails(dishId) {

    let dish = await this.model.getDish(dishId);
    this.savedDish = dish;
    let title = dish.title;
    let ingredients = dish.extendedIngredients;
    ingredients = ingredients.map(dishen => dishen.original);

    let imgString = "<img src=https://spoonacular.com/recipeImages/" + dishId + "-312x231.jpg>";
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

    document.getElementById("detail").innerHTML = showDish;

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
