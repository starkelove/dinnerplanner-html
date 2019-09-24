class SearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.pic = [];

        // TODO lab 3
    }

    renderView() {
      this.view.render();

      var self = this;
      var updateGuests = function() {
        let num = document.getElementsByClassName("input-num-guests")[0].value;
        self.model.setNumberOfGuests(num);
        console.log("hello");
      }

      var hej = function(){
        let i = this.id - 1;
        console.log(self.pic);
        changeViewToDetail(self.pic[i]);
      }


      //Updates dishes if search button is pressed based on the textview and drop-down type
      var searchFunc = async function(){
        let s = document.getElementById("textSearch").value;
        let sel = document.getElementById('selector');
        let selValue = sel[sel.selectedIndex].text;
      //  let type = document.getElementById("").value;
        let list = await self.model.getAllDishes(selValue, s);
        let title = list.map(dish => dish.title);
        self.pic = list.map(dish => dish.id);
        let showFood = "";
        if(list.length == 0){
          showFood= "No results for that search!";
        }else{


        showFood =     '<div class="row" style="height: 50px;">';
        for(let i = 0; i < list.length; i++){
          let tempInsert1 = insertFood1;
          let tempInsert2 = insertFood2;
          let tempInsert3 = insertFood3;
          let tempInsert4 = insertFood4;
          tempInsert1 += "<div class=imageFood id="+(i+1)+">";
          tempInsert1 += tempInsert2;
          tempInsert1 += "https://spoonacular.com/recipeImages/" + self.pic[i] + "-240x150.jpg";
          tempInsert1 += tempInsert3;
          tempInsert1 += title[i];
          tempInsert1 += tempInsert4;
          showFood += tempInsert1;
        }

        showFood += '</div>';
        }
        let payload = ["updateSearch", showFood];
        self.view.update(payload);

        for(let i = 0; i < list.length; i++){
          //console.log("imageFood" + (i+1));
          let s = (i+1);
          document.getElementById(s).addEventListener("click", hej, false);
        //  document.getElementById("imageFood " + (i+1)).addEventListener("click", hej, false);
          //document.images[i].addEventListener("click", hej, false);

        }

      }
      //document.getElementById("textSearch").addEventListener("input", updateGuests, false);
      document.getElementById("searchBtn").addEventListener("click", searchFunc, false);

    }

    // TODO Lab 3

}

const insertFood1 = `
<div class="col">
  <div class="row">
    <div class="col" style="cursor: pointer">

`;

const insertFood2 = `
          <img src="
`;


const insertFood3 = `
        ">
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="imageName">
`;

const insertFood4 = `
      </div>
    </div>
  </div>
</div>
`;
