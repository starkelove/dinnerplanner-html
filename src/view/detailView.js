class DetailView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.detailView = null;
  }



  render(dishId) { //glöm ej lägga till id="dishSearchView"

    //this.model.setNumberOfGuests(2);
    let content =/* template */ `

          <div id="detailView">
            <div class="row align-items-center">
               <div class="detail" id="detail">
                 <div id="dishLoader" class="spinner-border" role="status">
                     <span class="sr-only">Loading...</span>
                 </div>

               </div>
               <div class="row">
                  <div class="col">
                  <a id="addToMenuhBtn" class="btn btn-info">
                      Add to menu
                  </a>
                </div>
                <div class="col">
                <a id="returnSearchBtn" class="btn btn-info">
                    Return to search
                </a>
                </div>
           </div>
         </div>


    `;
    this.container.innerHTML = content;
    this.afterRender();
  }

  afterRender() {
    this.detailView = document.getElementById("detailView");
    this.container.getElementsByClassName("spinner-border")[0].style.display = "none";

  }

  update(payload) {

    if(payload[0] == "updateDetail") {
          this.detailView.getElementsByClassName("detail")[0].innerHTML = payload[1];
    }
  }
}
