class DetailController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.id = null;
        this.savedDish = null;

    }

    renderView() {
      this.view.render();

      var self = this;
      var addToMenu = async function(){
        //let dish = await self.model.getDish(self.id);
        console.log(self.savedDish);
      //  await self.model.getDish(self.id).then(data => {self.model.addDishToMenu(data)});
        self.model.addDishToMenu(self.savedDish);

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
      this.savedDish = dish;
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

