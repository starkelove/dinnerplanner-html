class OverviewController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

    }

    renderView() {
      this.view.render();

      var returnToSearch = function(){
        changeMyView("overviewView");
      }

      var goToPrint = function(){
        changeToPrint("overviewView");
      }

      this.view.returnFromOverview.addEventListener("click", returnToSearch, false);
      this.view.toPrintBtn.addEventListener("click", goToPrint, false);


    }


}
