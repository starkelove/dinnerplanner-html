class SearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      var self = this;
      var updateGuests = function() {
        let num = document.getElementsByClassName("input-num-guests")[0].value;
        self.model.setNumberOfGuests(num);
        console.log("hello");
      }

      document.getElementById("number").addEventListener("input", updateGuests, false);
      document.getElementById("number").addEventListener("click", updateGuests, false);

    }

    // TODO Lab 3

}
