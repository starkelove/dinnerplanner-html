class SidebarController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
      //  this.idMenu = [];

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      var self = this;
      var updateGuests = function() {
        let num = self.view.container.getElementsByClassName("input-num-guests")[0].value;
        self.model.setNumberOfGuests(num);
      }

      var cross = function(){
        let i = this.id - 1;
        console.log(self.idMenu);
        //changeViewToDetail(self.pic[i]);
        self.model.removeDishFromMenu(self.idMenu[i]);
      }

      var deleteMenu = function(){
        console.log("hej");
        self.model.removeAllDishes();

      }

      var notifyGSC = function() {
        changeMyView("sidebarView");
      }

      console.log(this.view.container);
      this.view.number.addEventListener("input", updateGuests, false);
      this.view.number.addEventListener("click", updateGuests, false);
      this.view.confirmBtn.addEventListener("click", notifyGSC, false);
      this.view.deleteBtn.addEventListener("click", deleteMenu, false);

    }

    // TODO Lab 3
    /*
    updateMenu(){
      let array = this.model.getFullMenu();
      //let title = array.map(dish => dish.title);
      let tempS = "";
      let title = "";
      for(let i = 0; i < array.length; i++){
        title = array[i].title;
        console.log(array[i].title);
        let s = i+1 + ". " +title;
        console.log(s);
        this.idMenu[i] = array[i].id;
        console.log(this.idMenu[i]);
        tempS += dishMenu1;
        tempS += s;
        tempS += dishMenu2;
    }*/

    addCross(idMenu){
      console.log(idMenu);
    }



}
