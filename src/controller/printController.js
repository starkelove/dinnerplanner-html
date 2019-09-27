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

    // TODO Lab 3

}
