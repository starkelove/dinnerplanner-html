class DetailView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.detailView = null;
  }



  render(dishId) { //glöm ej lägga till id="dishSearchView"

    //this.model.setNumberOfGuests(2);
    let content =/* template */ `

          <div id="detailView">
            <div class="row align-items-center">
               <div class="detail" id="detail">
                 <div id="dishLoader" class="spinner-border" role="status">
                     <span class="sr-only">Loading...</span>
                 </div>

               </div>
               <div class="row">
                  <div class="col">
                  <a id="addToMenuhBtn" class="btn btn-info">
                      Add to menu
                  </a>
                </div>
                <div class="col">
                <a id="returnSearchBtn" class="btn btn-info">
                    Return to search
                </a>
                </div>
           </div>
         </div>


    `;
    this.container.innerHTML = content;
    /*
    document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
    document.getElementById("number").value = this.model.getNumberOfGuests();
    */
    //document.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();
    /*
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
    document.getElementsByClassName("value-picture")[0].innerHTML = imgString;*/
    //document.getElementsByClassName("dishItems")[0].innerHTML = title;
    this.afterRender();
  }

  afterRender() {
    this.detailView = document.getElementById("detailView");
    document.getElementById("loader").style.display = "none";

  }

  update(payload) {

    if(payload[0] == "updateDetail") {
          console.log(document.getElementsByClassName("detail")[0]);
          document.getElementsByClassName("detail")[0].innerHTML = payload[1];
    }
  }
}
