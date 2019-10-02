class DetailController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.id = null;

    }

    renderView(dishId) {
      this.view.render(dishId);

      var self = this;
      var addToMenu = function(){
        self.model.addDishToMenu(self.view.savedDish);

      }
      var returnToSearch = function() {
        changeViewToSearch("detailView");
      }

      this.view.addToMenuBtn.addEventListener("click", addToMenu, false);
      this.view.returnSearchBtn.addEventListener("click", returnToSearch, false);

    }

}
