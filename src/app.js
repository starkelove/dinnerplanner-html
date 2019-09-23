window.onload = async function () {
  //We instantiate our model
  let model = new DinnerModel();
  await model.getDish(559251).then(data => {
    model.addDishToMenu(data);
  });
  model.setNumberOfGuests(1);

  let homeView = null;
  let searchView = null;
  let overviewView = null;
  let sidebarView = null;
  let detailView = null;
  let sidebarController = null;
  let homeController = null;
  let searchController = null;
  let detailController = null;


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

  document.cookie = "";
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


  function changeView(id){
    console.log("hejhejhej");
  }

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

const pages = ["homeView","sidebarView", "dishSearchView", "detailView"];
