class OverviewController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      var self = this;

      var returnToSearch = function(){
        changeMyView("overviewView");
      }

      var goToPrint = function(){
        changeToPrint("overviewView");
      }

      /*
      let butt = this.view.overviewView.firstChild;
      console.log(butt);
      let bitt = (butt.getElementById("returnFromOverview"));
      bitt.addEventListener("click", returnToSearch, false);*/
      //this.view.returnFromOverview.addEventListener("click", returnToSearch, false);
      document.getElementById("returnFromOverview").addEventListener("click", returnToSearch, false);
      document.getElementById("toPrintBtn").addEventListener("click", goToPrint, false);


    }

    // TODO Lab 3

}
