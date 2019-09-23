window.onload = async function () {
  console.log("start");
  //We instantiate our model
  let model = new DinnerModel();
  await model.getDish(559251).then(data => {
    model.addDishToMenu(data);
  });
  model.setNumberOfGuests(1);
  /*const container = document.getElementsByClassName("overView-container")[0];
  const view = new OverviewView(container, model);
  view.render();*/
//  let model = null;
  let homeView = null;
  let searchView = null;
  let overviewView = null;
  let sidebarView = null;
  let sidebarController = null;
  let homeController = null;

  homeView = new HomeView(document.getElementsByClassName("home-container")[0]);
  //homeView.render();

  homeController = new HomeController(homeView);
  homeController.renderView();
  var x = document.getElementById("homeView");
  x.style.display = "none";
  //x.style.display = "block";

  sidebarView = new SidebarView(document.getElementsByClassName("sidebar-container")[0], model);
  sidebarView.render();
  x = document.getElementById("sidebarView");
  x.style.display = "none";
  searchView = new SearchView(document.getElementsByClassName("mainpage-container")[0], model);
  searchView.render();
  x = document.getElementById("dishSearchView");
  x.style.display = "none";

  x = document.getElementById("homeView");
//  x.style.display = "block";
  //document.cookie = "";
  //document.cookie = "sidebarView";
  if(document.cookie != ""){
    //console.log("hej");
    //console.log(document.cookie);
    //x = document.getElementById(document.cookie);
    //x.style.display = "block";
    if(document.cookie == "dishSearchView"){
      x = document.getElementById("sidebarView");
      x.style.display = "block";
      x = document.getElementById("dishSearchView");
      x.style.display = "block";
    }
  }
  document.getElementById("loader").style.display = "none";


  function changeView(id){
    console.log("hejhejhej");
  }



/*
  searchView = new SearchView(document.querySelector("#page-content"), model);
  overviewView = new OverviewView(document.querySelector("#page-content"), model);
  sidebarView = new SidebarView(document.querySelector("#page-content"), model);

/*
  if(document.getElementsByClassName("home-container")[0]){
    const container = document.getElementsByClassName("home-container")[0];
    const view = new HomeView(container, model);
    view.render();
  }


  if(document.getElementsByClassName("selectDish-container")[0]){
    const container = document.getElementsByClassName("selectDish-container")[0];
    const view = new SearchView(container, model);
    view.render();
    var x = document.getElementById("sideBarView");
    x.style.display = "none";
  }

  if(document.getElementsByClassName("overView-container")[0]){
    const container = document.getElementsByClassName("overView-container")[0];
    const view = new OverviewView(container, model);
    view.render();
  }

  if(document.getElementsByClassName("detailDish-container")[0]){
    const container = document.getElementsByClassName("detailDish-container")[0];
    const view = new DetailView(container, model);
    view.render();
  }

  if(document.getElementsByClassName("printView-container")[0]){
    const container = document.getElementsByClassName("printView-container")[0];
    const view = new PrintView(container, model);
    view.render();
  }

  const container = document.getElementsByClassName("page-content")[0]
  const view = new OverviewView(container, model);
  view.render()

  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with.
   */

};

function changeMyView(id){
  console.log("hejhejhej");
  var x = document.getElementById(id);
  x.style.display = "none";
  if(id == "homeView"){
    x = document.getElementById("sidebarView");
    x.style.display = "block";
    x = document.getElementById("dishSearchView");
    x.style.display = "block";
    document.cookie="dishSearchView";
  }
};
