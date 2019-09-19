class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.overviewView = null;
    }

    // An example of creating HTML procedurally. Think about the pros and cons of this approach.
    render() {
      let content = `
      <div id="loader" class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
      </div>
      <style>div{border:0px solid; padding-left: 30px; padding-right: 30px;}</style>
      <div class="header d-flex align-items-center justify-content-center">
          <h1>Dinner Planner</h1>
      </div>
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
      /*
      const paragraph = this.container.appendChild(document.createElement('P'))
      paragraph.innerHTML = "This dinner will be Awesome!";

      const num_people_val = 3;
      const paragraph2 = this.container.appendChild(document.createElement('P'))
      const num_people = paragraph2.appendChild(document.createElement('SPAN'))
      num_people.innerHTML = num_people_val;
      paragraph2.innerHTML += " people are coming!";

      const paragraph3 = this.container.appendChild(document.createElement('P'))
      paragraph3.innerHTML = "We will be eating the following:";

      const list = this.container.appendChild(document.createElement('UL'))

      for(const food of ["Bread!", "Ham!", "Pizza!"]) {
        list.appendChild(document.createElement('UL')).innerHTML = food;
      }
      */
      document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
      //document.getElementById("number").value = this.model.getNumberOfGuests();
      document.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();

      let array = this.model.getFullMenu();
      let title = array.map(dish => dish.title);
      document.getElementsByClassName("value-main-course-name")[0].innerHTML = title;
    //  document.getElementsByClassName("dishItems")[0].innerHTML = title;
      this.afterRender();
    }

    afterRender() {
      this.overviewView = document.getElementById("overviewView");
      document.getElementById("loader").style.display = "none";
    }
}
