class DetailController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.id = null;
        this.savedDish = null;

    }

    renderView(dishId) {
      this.view.render(dishId);

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

}

