window.onload = async function () {
  console.log("start");
  const model = new DinnerModel();
  await model.getDish(559251).then(data => {
    model.addDishToMenu(data);
  });
  model.setNumberOfGuests(1);

  if(document.getElementsByClassName("home-container")[0]){
    const container = document.getElementsByClassName("home-container")[0];
    const view = new HomeView(container, model);
    view.render();
  }

  if(document.getElementsByClassName("selectDish-container")[0]){
    sidebarView = new SidebarView(document.getElementsByClassName("sidebar-container")[0], model);
    sidebarView.render();
    searchView = new SearchView(document.getElementsByClassName("mainpageSearch-container")[0], model);
    searchView.render();
  }

  if(document.getElementsByClassName("overView-container")[0]){
    const container = document.getElementsByClassName("overView-container")[0];
    const view = new OverviewView(container, model);
    view.render();
  }

  if(document.getElementsByClassName("detailDish-container")[0]){
    sidebarView = new SidebarView(document.getElementsByClassName("sidebar-container")[0], model);
    sidebarView.render();
    detailView = new DetailView(document.getElementsByClassName("detail-container")[0], model);
    detailView.render();
  }

  if(document.getElementsByClassName("printView-container")[0]){
    const container = document.getElementsByClassName("printView-container")[0];
    const view = new PrintView(container, model);
    view.render();
  }

};
