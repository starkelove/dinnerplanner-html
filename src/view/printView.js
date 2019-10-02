class PrintView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.printView = null;
        this.printMenu = null;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
      let content = `
      <div id="printView">
      <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
      <div class="row">
        <div class="col">
          <div id="printMenu">
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col">
            <a id="returnFromPrint" class="btn btn-info">
                                Go back and edit dinner
                            </a></div>
          </div>
        </div>
        </div>
      </div>
      `;
      this.container.innerHTML = content;

      this.afterRender();
    }

    afterRender() {
      this.printView = document.getElementById("printView");
      this.printMenu = document.getElementById("printMenu");
    }

    update(payload){
      if(payload[0] == "updatePrint"){
        this.printMenu.innerHTML = payload[1];
        console.log(this.printView.getElementsByClassName("printMenu").innerHTML);
      }
    }


}
