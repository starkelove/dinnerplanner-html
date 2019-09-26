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

      /*
      document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
      document.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();

      document.getElementsByClassName("value-total-priceinview")[0].innerHTML = this.model.getTotalMenuPrice();


      let array = this.model.getFullMenu();
      let title = array.map(dish => dish.title);
      let ingredients = array.map(dish => dish.extendedIngredients);
      ingredients = array.map(dish => dish.extendedIngredients).map(dishen => dishen.map(item => item.name));
      let pic = array.map(dish => dish.image);

      let imgString = "<img src=" + pic[0] + ">"
      document.getElementsByClassName("value-main-course-name")[0].innerHTML = title;
      document.getElementsByClassName("value-main-course-nameinview")[0].innerHTML = title;
      document.getElementsByClassName("value-main-ingredients")[0].innerHTML = ingredients;
      document.getElementsByClassName("value-picture")[0].innerHTML = imgString; */



      this.afterRender();
    }

    afterRender() {
      this.printView = document.getElementById("printView");
      document.getElementById("loader").style.display = "none";
    }
}
