class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
    this.textSearch = null;
    this.searchBtn = null;
    this.selector = null;
    this.model.addObserver(this);
  }

  render(dishId) {
    this.container.innerHTML = content;

    let array = this.model.getFullMenu();
    let title = array.map(dish => dish.title);
    this.afterRender();
  }

  afterRender() {
    this.dishSearchView = document.getElementById("dishSearchView");
    this.searchBtn = document.getElementById("searchBtn");
    this.textSearch = document.getElementById("textSearch");
    this.selector =  document.getElementById("selector");
    this.container.getElementsByClassName("spinner-border")[0].style.display = "none";
  }

  update(payload) {

    if(payload[0] == "updateSearch") {
          let showFood = "";
          let list = payload[1];
          if(list == undefined){
            showFood= "No results for that search!";
          }else{
            let title = list.map(dish => dish.title);
            self.pic = list.map(dish => dish.id);

            showFood =     '<div class="row" style="height: 50px;">';
            for(let i = 0; i < list.length; i++){
              let tempInsert1 = insertFood1;
              let tempInsert2 = insertFood2;
              let tempInsert3 = insertFood3;
              let tempInsert4 = insertFood4;
              tempInsert1 += "<div class=imageFood id="+(i+1)+">";
              tempInsert1 += tempInsert2;
              tempInsert1 += "https://spoonacular.com/recipeImages/" + self.pic[i] + "-240x150.jpg";
              tempInsert1 += tempInsert3;
              tempInsert1 += title[i];
              tempInsert1 += tempInsert4;
              showFood += tempInsert1;
            }
            showFood += '</div>';
          }

          this.dishSearchView.getElementsByClassName("foodtable")[0].innerHTML = showFood;
    }
  }
}

const content =/* template */ `
  <div id="dishSearchView">

  <div class="container text-center full-vh d-flex align-items-center justify-content-center flex-column">
    <div class="row">
    Find a dish!

    </div>
    <div class="row">
    <div class="col-md-auto">
      <input type="text" id="textSearch" value="" />
      </div>
      <div class="col-md-auto">

      <select id="selector">
        <option value="empty"></option>
        <option value="starter">Starter</option>
        <option value="main">Main Course</option>
        <option value="dessert">Dessert</option>
        </select>
      </div>
      <div class="col-md-auto">
      <a id="searchBtn" class="btn btn-info">
          Search
      </a>
      </div>
    </div>

    <div class="row" style="height: 450px;">

    <style type="text/css">
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{font-family:Arial, sans-serif;font-size:14px;padding:16px 12px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:16px 12px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
    .tg .tg-1235{text-decoration:underline;font-size:13px;border-color:inherit;text-align:left;vertical-align:top}
    .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
    <div id="dishLoader" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div class="foodtable">
    <div class="row" style="height: 50px;">
      Search for dishes!

    </div>
    <!--table class="responsive-lg">
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
    </table-->

    </div>
        <p class="text-center p-max-width">

          </p>
          </div>
          <div class="col-3">
          </div>
    </div>
  </div>
`;

const insertFood1 = `
<div class="col">
  <div class="row">
    <div class="col" style="cursor: pointer">

`;

const insertFood2 = `
          <img src="
`;


const insertFood3 = `
        ">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="imageName">
`;

const insertFood4 = `
      </div>
    </div>
  </div>
</div>
`;
