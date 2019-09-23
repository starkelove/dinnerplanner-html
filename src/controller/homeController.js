class HomeController {
    constructor(view) {
        this.view = view;
        //this.model = model;

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      //var self = this;
      var updateGuests = function() {
        //console.log("hello");
        changeMyView("homeView");
      }

      //document.getElementById("startBtn").addEventListener("input", updateGuests, false);
      document.getElementById("startBtn").addEventListener("click", updateGuests, false);

    }

    // TODO Lab 3

}
