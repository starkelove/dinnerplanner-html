class SidebarController {
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
      }

      document.getElementById("number").addEventListener("input", updateGuests, false);
      document.getElementById("number").addEventListener("click", updateGuests, false);

      var notifyGSC = function() {
        changeMyView("sidebarView");
      }

      document.getElementById("confirmBtn").addEventListener("click", notifyGSC, false);

    }

    // TODO Lab 3

}
