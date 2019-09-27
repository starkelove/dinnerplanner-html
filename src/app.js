let detailController = null;
let overviewView = null;
window.onload = function () {
  //We instantiate our model
  let model = new DinnerModel();

  model.setNumberOfGuests(1);

  let homeView = null;
  let searchView = null;
  let printView = null;
  let sidebarView = null;
  let detailView = null;
  let sidebarController = null;
  let homeController = null;
  let searchController = null;

  let overviewController = null;
  let printController = null;



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
  detailController.renderView();


  overviewView = new OverviewView(document.getElementsByClassName("overview-container")[0], model);
  overviewController = new OverviewController(overviewView, model);
  overviewController.renderView();

  printView = new PrintView(document.getElementsByClassName("print-container")[0], model);
  printController = new PrintController(printView, model);
  printController.renderView();

  //document.cookie = "";
  //document.cookie = "sidebarView";

  for(let i = 0; i < pages.length; i++){
    let x = document.getElementById(pages[i]);
    x.style.display = "none";
  }

  if(document.cookie != ""){
    if(document.cookie == "dishSearchView"){
      x = document.getElementById("sidebarView");
      x.style.display = "block";
      x = document.getElementById("dishSearchView");
      x.style.display = "block";
    }
  }else{
    x = document.getElementById("homeView");
    x.style.display = "block";
  }

  //Remove loader when done
  document.getElementById("loader").style.display = "none";


  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};

function changeMyView(id){
  //Hide the view currently used
  let x = document.getElementById(id);
  x.style.display = "none";

  //If homeview was the current view, load sidebarview and dishsearchview
  if(id == "homeView" || id == "overviewView" || id == "printView"){
    x = document.getElementById("sidebarView");
    x.style.display = "block";
    x = document.getElementById("dishSearchView");
    x.style.display = "block";
    x = document.getElementById("dishLoader")
    x.style.display = "none";
    document.cookie="dishSearchView";
  }

  //if leaving sidebarview for overview, hide hide dishsearch or detailview and show overview
  if(id == "sidebarView"){
    x = document.getElementById("dishSearchView");
    x.style.display = "none";
    x = document.getElementById("detailView");
    x.style.display = "none";
    overviewView.update("updateMenu");
    x = document.getElementById("overviewView");
    x.style.display = "block";
  }
};

function changeViewToDetail(id){
  //Hide the view currently used
  let x = document.getElementById("dishSearchView");
  x.style.display = "none";
  detailController.newDish(id);
  x = document.getElementById("detailView");
  x.style.display = "block";

//  detailController.newDish(id);
};

function changeViewToSearch(id){
  //Hide the view currently used
  let x = document.getElementById(id);
  x.style.display = "none";
  x = document.getElementById("dishSearchView");
  x.style.display = "block";
  //detailController.newDish(id);
//  detailController.newDish(id);
};

function changeToPrint(id){
  //Hide the view currently used
  let x = document.getElementById(id);
  x.style.display = "none";
  x = document.getElementById("printView");
  x.style.display = "block";
  //detailController.newDish(id);
//  detailController.newDish(id);
};

const pages = ["homeView","sidebarView", "dishSearchView", "detailView", "overviewView", "printView"];
