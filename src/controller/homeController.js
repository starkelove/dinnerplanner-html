class HomeController {
    constructor(view) {
        this.view = view;
        //this.model = model;

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      //var self = this;
    /*  var updateGuests = function() {
        let num = document.getElementsByClassName("input-num-guests")[0].value;
        self.model.setNumberOfGuests(num);
        console.log("hello");
      }*/

      //document.getElementById("startBtn").addEventListener("input", updateGuests, false);
      document.getElementById("startBtn").addEventListener("click", changeView(1), false);

    }

    // TODO Lab 3

}
