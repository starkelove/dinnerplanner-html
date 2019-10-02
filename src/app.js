let detailController = null;
let overviewView = null;
let printController = null;
let model = null;
window.onload = function () {
  //We instantiate our model
  model = new DinnerModel();


  let homeView = null;
  let searchView = null;
  let printView = null;
  let sidebarView = null;
  let detailView = null;
  let sidebarController = null;
  let homeController = null;
  let searchController = null;
  let overviewController = null;



  homeView = new HomeView(document.getElementsByClassName("home-container")[0]);
  homeController = new HomeController(homeView);
  homeController.renderView();


  sidebarView = new SidebarView(document.getElementsByClassName("sidebar-container")[0], model);
  sidebarController = new SidebarController(sidebarView, model)
  sidebarController.renderView();

  searchView = new SearchView(document.getElementsByClassName("mainpageSearch-container")[0], model);
  searchController = new SearchController(searchView, model)
  searchController.renderView();

  detailView = new DetailView(document.getElementsByClassName("mainpageDetail-container")[0], model);
  detailController = new DetailController(detailView, model);
  //detailController.renderView();


  overviewView = new OverviewView(document.getElementsByClassName("overview-container")[0], model);
  overviewController = new OverviewController(overviewView, model);
  overviewController.renderView();

  printView = new PrintView(document.getElementsByClassName("print-container")[0], model);
  printController = new PrintController(printView, model);
  printController.renderView();

  hideAllViews();

  model.setNumberOfGuests(window.localStorage.getItem('numberOfGuests'));
  console.log(window.localStorage.getItem('dish1'));
  dish1 = window.localStorage.getItem('dish1');
  dish2 = window.localStorage.getItem('dish2');
  dish3 = window.localStorage.getItem('dish3');

  console.log(dish1);
  if(dish1 != null){
    addStoredDish(dish1);
  }
  if(dish2 != null){
    addStoredDish(dish2);
  }
  if(dish3 != null){
    addStoredDish(dish3);
  }


let stringCurrent = window.localStorage.getItem('currentView');
  if(stringCurrent != null){
    console.log(stringCurrent);
    if(stringCurrent == "dishSearchView"){

      changeViewToSearch(1);
    }else if(stringCurrent == 'detailView'){
      let id = window.localStorage.getItem('currentDish');
      changeViewToDetail(id);
    }else if(stringCurrent == 'overviewView'){
      changeMyView('sidebarView');
    }else if(stringCurrent == 'printView'){
      changeToPrint(1);
    }
  }else{
    document.getElementById("homeView").style.display = "block";
  }




  //Remove loader when done
  document.getElementById("loader").style.display = "none";

  async function addStoredDish(id){
    let data = await model.getDish(id);
    model.addDishToMenu(data);
  }
  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};



function hideAllViews(){
  document.getElementById("homeView").style.display = "none";
  document.getElementById("sidebarView").style.display = "none";
  document.getElementById("dishSearchView").style.display = "none";
  document.getElementById("dishLoader").style.display = "none";
  document.getElementById("overviewView").style.display = "none";
  document.getElementById("printView").style.display = "none";
  if(document.getElementById("detailView") != null){
    document.getElementById("detailView").style.display = "none";
  }
}

function changeMyView(id){
  //Hide the view currently used

  hideAllViews();

  //If homeview was the current view, load sidebarview and dishsearchview
  if(id == "homeView" || id == "overviewView" || id == "printView"){
    window.localStorage.setItem('currentView', 'dishSearchView');
    document.getElementById("sidebarView").style.display = "block";
    document.getElementById("dishSearchView").style.display = "block";

  }

  //if leaving sidebarview for overview, hide dishsearch or detailview and show overview
  if(id == "sidebarView"){
    console.log("updating menu");
    overviewView.update("updateMenu");
    window.localStorage.setItem('currentView', 'overviewView');
    document.getElementById("overviewView").style.display = "block";
  }
};

function changeViewToDetail(id){
  //Hide the view currently used
  hideAllViews();
  window.localStorage.setItem('currentView', 'detailView');
  window.localStorage.setItem('currentDish', id);
  detailController.renderView(id);
  document.getElementById("sidebarView").style.display = "block";
  document.getElementById("detailView").style.display = "block";

};

function changeViewToSearch(id){
  //Hide the view currently used
  hideAllViews();
  window.localStorage.setItem('currentView', 'dishSearchView');
  document.getElementById("sidebarView").style.display = "block";
  document.getElementById("dishSearchView").style.display = "block";
};

function changeToPrint(id){
  //Hide the view currently used
  hideAllViews();
  window.localStorage.setItem('currentView', 'printView');
  printController.printMenu();
  document.getElementById("printView").style.display = "block";
};

const pages = ["homeView","sidebarView", "dishSearchView", "detailView", "overviewView", "printView"];
