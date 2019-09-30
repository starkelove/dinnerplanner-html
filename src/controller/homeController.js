class HomeController {
    constructor(view) {
        this.view = view;
    }

    renderView() {
      this.view.render();

      var notifyGSC = function() {
        changeMyView("homeView");
      }
      
      this.view.startBtn.addEventListener("click", notifyGSC, false);

    }

  
}
