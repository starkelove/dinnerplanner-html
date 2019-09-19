class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
  }



  render(dishId) { //glöm ej lägga till id="dishSearchView"

    //this.model.setNumberOfGuests(2);
    this.container.innerHTML = content;
    document.getElementsByClassName("value-num-guests")[0].innerHTML = this.model.getNumberOfGuests();
    document.getElementById("number").value = this.model.getNumberOfGuests();

    document.getElementsByClassName("value-total-price")[0].innerHTML = this.model.getTotalMenuPrice();

    let array = this.model.getFullMenu();
    let title = array.map(dish => dish.title);
    document.getElementsByClassName("value-main-course-name")[0].innerHTML = title;
    document.getElementsByClassName("dishItems")[0].innerHTML = title;
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
         <div class="row">
         Find a dish!

         </div>
         <div class="row" style="height: 50px;">
         <div class="col-3">
            <input type="text" id="text" value="" />
            </div>
            <div class="col-3">
            <select>
              <option value="empty"></option>
              <option value="starter">Starter</option>
              <option value="main">Main Course</option>
              <option value="dessert">Dessert</option>
              </select>
            </div>
            <a id="searchBtn" class="btn btn-info">
                Search
            </a>
          </div>

          <div class="row" style="height: 450px;">

          <style type="text/css">
          .tg  {border-collapse:collapse;border-spacing:0;}
          .tg td{font-family:Arial, sans-serif;font-size:14px;padding:16px 12px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
          .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:16px 12px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
          .tg .tg-1235{text-decoration:underline;font-size:13px;border-color:inherit;text-align:left;vertical-align:top}
          .tg .tg-0lax{text-align:left;vertical-align:top}
          </style>
          <table class="tg">
            <tr>
              <th class="tg-1235"><img src="images/meatballs.jpg"></th>
              <th class="tg-0lax"><img src="images/toast.jpg"></th>
              <th class="tg-0lax"><img src="images/icecream.jpg"></th>
              <th class="tg-0lax"><img src="images/sourdough.jpg"></th>
            </tr>
            <tr>
              <td class="tg-0lax"><div class="dishItems" id="dishItems"></div></td>
              <td class="tg-0lax">Meatballs</td>
              <td class="tg-0lax">Various</td>
              <td class="tg-0lax">Various</td>
            </tr>
          </table>

          </div>
             <p class="text-center p-max-width">

                </p>
         </div>
     </div>
 </div>

</div>

`;
