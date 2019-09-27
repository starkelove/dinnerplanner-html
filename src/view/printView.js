class PrintView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.printView = null;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
      let content = `
      <div id="printView">
        <div class="row">
          <div class="col">
            Hejsan
            <a id="returnFromPrint" class="btn btn-info">
                                Go back and edit dinner
                            </a></div>
          </div>
        </div>
      </div>
      `;
      this.container.innerHTML = content;

      this.afterRender();
    }

    afterRender() {
      this.printView = document.getElementById("printView");
      //this.container.getElementsByClassName("spinner-border")[0].style.display = "none";
    }
}
