class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
  }



  async render(dishId) { //glöm ej lägga till id="dishSearchView"

    //this.model.setNumberOfGuests(2);
    this.container.innerHTML = content;
    document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
    document.getElementById("number").value = this.model.getNumberOfGuests();
    document.getElementsByClassName("value-main-course-name")[0].innerHTML = this.model.getFullMenu()[0].title;
    document.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();

    let array = this.model.getFullMenu();
    let title = array.map(dish => dish.title);

    this.afterRender();
  }

  afterRender() {
    this.dishSearchView = document.getElementById("dishSearchView");
    document.getElementById("loader").style.display = "none";

  }
}

const content =/* template */ `

<div id="loader" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
</div>
<style>div{border:0px solid; padding-left: 30px; padding-right: 30px;}</style>
<div class="header d-flex align-items-center justify-content-center">
    <h1>Dinner Planner</h1>
</div>
<div class="row">
     <div class="col-3">
         <div id="sideBarView" class="sidebar">
                 <div class="row">
                     <div class="col-9">
                         <h4> My dinner </h4>
                     </div>
                 </div>

                 <div class="row">
                     <div class="col-4">
                         <form>
                             <p class="text"> People </p>
                             <!-- <div class="value-num-guests">
                                 <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
                                     <input type="number" id="number" value="0" />
                                 <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>
                             </div> -->
                             <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value"></div>
                                 <input type="number" class="value-num-guests" id="number" value="0" />
                             <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value"></div>

                         </form>
                     </div>

                 </div>

                 <div class="row">
                     <div class="col-6"> Dish Name</div>
                     <div class="col-6"> Cost </div>
                 </div>
                 <div class="row">
                     <div class="col-6"><div class="value-main-course-name"></div></div>
                     <div class="col-6"><div class="value-total-price">0</div> SEK</div>
                 </div>
                 <div class="row">
                     <div class="col-12">
                         <a id="confirmBtn" class="btn btn-info">
                             Confirm Dinner
                         </a>
                     </div>
                 </div>
             </div>
     </div>
     <div class="col-9">
         <div id="dishSearchView">

             <p class="text-center p-max-width">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel laoreet orci. Nullam ut iaculis diam. Aliquam
                    magna nulla, congue ut elementum hendrerit, dignissim at mauris. Quisque ac felis sed nibh elementum euismod a sit amet
                    arcu. Maecenas a efficitur leo.
                </p>
         </div>
     </div>
 </div>

</div>

`;
