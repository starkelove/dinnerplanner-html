class SearchView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.dishSearchView = null;
    this.model.addObserver(this);
  }

  render(dishId) { //glöm ej lägga till id="dishSearchView"
    this.container.innerHTML = content;

    let array = this.model.getFullMenu();
    let title = array.map(dish => dish.title);
    document.getElementsByClassName("dishItems")[0].innerHTML = title;
    this.afterRender();
  }

  afterRender() {
    this.dishSearchView = document.getElementById("dishSearchView");
  }

  update(payload) {
    if(payload) {}
  }
}

const content =/* template */ `
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
`;
