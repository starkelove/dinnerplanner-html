window.onload = function () {
  console.log("start");
  //We instantiate our model
  const model = new DinnerModel();

  //console.log(document.getElementsByClassName("page-content")[0]);
  //const container = document.getElementsByClassName("page-content")[0];

  const container = document.getElementById("selectDish-container");
  const view = new SideBarView(container, model);
  //console.log(document.getElementById("number").defaultValue);
  console.log(document.getElementById("value-num-guests").value);
  view.render();
  
  /**
   * IMPORTANT: app.js is the only place where you are allowed to
   * query for elements in the whole document.
   * In other places you should limit the search only to the children
   * of the specific view you're working with (see exampleView.js).
   */

};
