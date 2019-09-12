window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();
  const container = document.getElementsByClassName("selectDish-container")[0];
  console.log(container);
  const view = new SearchView(container, model);
  view.render();
  
  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */

};
