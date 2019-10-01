class SearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.pic = [];
    }

    renderView() {
      this.view.render();
      var self = this;
      var goToDetailView = function(){
        let i = this.id - 1;
        console.log(self.pic);
        changeViewToDetail(self.pic[i]);
      }


      //Updates dishes if search button is pressed based on the textview and drop-down type
      var searchFunc = async function(){
        let s = self.view.textSearch.value;
        let sel = self.view.selector;
        let selValue = sel[sel.selectedIndex].text;
        window.localStorage.setItem('searchType', selValue);
        window.localStorage.setItem('searchQuery', s);
        let list = await self.model.getAllDishes(selValue, s);
        //let title = list.map(dish => dish.title);
        self.pic = list.map(dish => dish.id);

        //self.view.update(payload);

        for(let i = 0; i < list.length; i++){
          //console.log("imageFood" + (i+1));
          let s = (i+1);
          document.getElementById(s).addEventListener("click", goToDetailView , false);

        }

      }
      this.view.searchBtn.addEventListener("click", searchFunc, false);

    }


}
