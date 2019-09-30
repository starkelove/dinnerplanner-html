class DetailView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.detailView = null;
    this.dishLoader = null;
    this.addToMenuBtn = null;
    this.returnSearchBtn = null;
    this.detail = null;

  }

  render(dishId) { 

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
                  <a id="addToMenuBtn" class="btn btn-info">
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
    this.dishLoader = document.getElementById("dishLoader");
    this.addToMenuBtn = document.getElementById("addToMenuBtn");
    this.returnSearchBtn = document.getElementById("returnSearchBtn");
    this.detail = document.getElementById("detail");

    this.dishLoader.style.display = "none";
  }

  update(payload) {
    if(payload[0] == "updateDetail") {
          this.detail.innerHTML = payload[1];
    }
  }
}
