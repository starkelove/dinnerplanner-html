class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.overviewView = null;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
      let content = `

      <div id="overviewView">
        <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
        <div class="row">
        <div class="value-num-guests"></div>
          people are coming.
        </div>
        <div class="row">
        They will eat
        <div class="value-main-course-name"></div>
        </div>
        <div class="row">
          It will cost
          <div class="value-total-price">0</div> SEK</div>
        </div>
        <div class="row">
        </div>
          <div class="row">
            <a id="toPrintBtn" class="btn btn-info">
              Print dinner man
            </a>
          </div>
        </div>
      </div>

      `;

      this.container.innerHTML = content;

      document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
      document.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();

      let array = this.model.getFullMenu();
      let title = array.map(dish => dish.title);
      document.getElementsByClassName("value-main-course-name")[0].innerHTML = title;

      this.afterRender();
    }

    afterRender() {
      this.overviewView = document.getElementById("overviewView");
    //  document.getElementById("loader").style.display = "none";
    }

    update(payload) {
      // TODO Lab3
    }
}
