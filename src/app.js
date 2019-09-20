window.onload = async function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  await model.getDish(559251).then(data => {
    model.addDishToMenu(data);
  });
  model.setNumberOfGuests(1);
  /*const container = document.getElementsByClassName("overView-container")[0];
  const view = new OverviewView(container, model);
  view.render();*/
  if(document.getElementsByClassName("home-container")[0]){
    const container = document.getElementsByClassName("home-container")[0];
    const view = new HomeView(container, model);
    view.render();
  }


  if(document.getElementsByClassName("selectDish-container")[0]){
    const container = document.getElementsByClassName("selectDish-container")[0];
    const view = new SearchView(container, model);
    view.render();
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
