class HomeController {
    constructor(view) {
        this.view = view;
        //this.model = model;

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      var notifyGSC = function() {
        changeMyView("homeView");
      }
      
      document.getElementById("startBtn").addEventListener("click", notifyGSC, false);

    }

    // TODO Lab 3

}
