//DinnerModel class
class DinnerModel {



  constructor() {
    this.dishes = dishesConst;
    this.noGuests = 0;
    this.menu = [];
    this.apiDishes = [];
    this.key = '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767';
    function handleHTTPError(response) {
      if(response.ok)
         return response;
      throw Error(response.statusText);
    }

    // implement the data structure that will hold number of guests
    // and selected dishes for the dinner menu

  }


  setNumberOfGuests(num) {
    if(num >= 0){
        this.noGuests = num;
    }
  }

  getNumberOfGuests() {
    return this.noGuests;
  }

  //Returns the dish that is on the menu for selected type
  getSelectedDish(type) {
    //this.menu = this.menu.filter(obj => (obj.dishTypes != id));

    for(let i = 0; i < this.menu.length; i++){
      for(let j = 0; j < this.menu[i].dishTypes.length; j++){
        if(this.menu[i].dishTypes[j] == type){
          return this.menu[i];
        }
      }
    }
  }

  //Returns all the dishes on the menu.
  getFullMenu() {
    return this.menu;
  }

  //Returns all ingredients for all the dishes on the menu.
  getAllIngredients() {
    var ingredients = this.menu.map(function (meny) {
        return meny.ingredients;
      });
    return ingredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  getTotalMenuPrice() {
    let guests = this.noGuests;
    let ingredients = this.getAllIngredients();

    // var accPrice = ingredients.map(function(subarray) {
    //   return subarray.map(function(meny) {
    //     return meny.price;
    //     })
    //     .reduce((acc, total) => acc + total, 0);
    // });

    var accPrice = ingredients.map(subarray => subarray.map(
      meny => meny.price).reduce((acc, total) => acc + total, 0)
    );

    var totalPrice = accPrice.reduce((acc, total) => acc + total, 0);


    return totalPrice*guests;
  }


  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  addDishToMenu(data) {
    //let dish = this.getDish(id);
    let types = data.dishTypes;
    let type;

    if(types.includes("starter")){
      type = "starter";
    }else if(types.includes("main dish" || "main course")){
      type = "main dish";
    }else if(types.includes("dessert")){
      type = "dessert";
    }
    //this.getDish(id).then((data) => data.dishTypes.filter((names)=> names == 'main dish' || names == 'main course'));
    for(let i = 0; i < this.menu.length; i++){
      if(this.menu[i].dishTypes.includes(type)){
        let dish = this.getSelectedDish(type);
        this.removeDishFromMenu(dish.id);
      }
    }


    this.menu.push(data);
  }

  //Removes dish from menu
  removeDishFromMenu(id) {
    //let pos = 0;
  //  stopSpinning();
    //let id = data.id;
    this.menu = this.menu.filter(obj => (obj.id != id));
    // for(let i = 0; i < this.menu.length; i++){
    //   if(this.menu[i].id == id){
    //     this.menu.splice(i,1);
    //   }
    // }

  }


  //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
  //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
  //if you don't pass any query, all the dishes will be returned
  getAllDishes(type, query) {
  	let url = 'http://sunset.nada.kth.se:8080/iprog/group/10/recipes/search';
  	let dishesAPI = [];
  	let type_url = [];

  	if(type) {
  		type_url = type.split(' ');
  	}

  	// if query passed return specific type and query
    document.getElementById("loader").style.display = "block";
  	if(query) {
  		if(type_url.length > 1){
  			url = url + '?' + 'type=' + type_url[0] + '%20course&query=' + query;
  			console.log(url);
  		} else {
  			url = url + '?' + 'type=' + type_url[0] + '&query=' + query;
  			console.log(url);
  		}
    } else if(type && query == null){ // if only type, return all of that specific type
    	if(type_url.length > 1) {
    		url = url + '?' + 'type=' + type_url[0] + '%20course';
    		console.log(url);
    	} else {
    		url = url + '?' + 'type=' + type_url[0];
    		console.log(url);
    	}
    }
    return fetch(url, {headers: {'X-Mashape-Key' :this.key}})
    .then(this.handleErrors)
    .then(response => response.json())
    .then(data => {
      dishesAPI = data.results;
      console.log(dishesAPI);
      document.getElementById("loader").style.display = "none";
      return dishesAPI;

    });

  }


  //Returns a dish of specific ID
  getDish(id) {
  /*  if(this.apiDishes[id] != null){
      return this.apiDishes[id];
    }*/
    document.getElementById("loader").style.display = "block";
    return fetch("http://sunset.nada.kth.se:8080/iprog/group/10/recipes/" + id + "/information", {headers:{"X-Mashape-Key":this.key}})
    .then(this.handleHTTPError)
    .then(response => response.json())
    .then(data => {
      this.apiDishes[id] = (data);
      document.getElementById("loader").style.display = "none";
      return this.apiDishes[id];
    });
    //.then(console.log)
    //.catch(console.error);

  }
}

// the dishes constant contains an array of all the
// dishes in the database. Each dish has id, name, type,
// image (name of the image file), description and
// array of ingredients. Each ingredient has name,
// quantity (a number), price (a number) and unit (string
// defining the unit i.e. "g", "slices", "ml". Unit
// can sometimes be empty like in the example of eggs where
// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
const dishesConst = [{
  'id': 1,
  'name': 'French toast',
  'type': 'starter',
  'image': 'toast.jpg',
  'description': "In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
  'ingredients': [{
    'name': 'eggs',
    'quantity': 0.5,
    'unit': '',
    'price': 10
  }, {
    'name': 'milk',
    'quantity': 30,
    'unit': 'ml',
    'price': 6
  }, {
    'name': 'brown sugar',
    'quantity': 7,
    'unit': 'g',
    'price': 1
  }, {
    'name': 'ground nutmeg',
    'quantity': 0.5,
    'unit': 'g',
    'price': 12
  }, {
    'name': 'white bread',
    'quantity': 2,
    'unit': 'slices',
    'price': 2
  }]
}, {
  'id': 2,
  'name': 'Sourdough Starter',
  'type': 'starter',
  'image': 'sourdough.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'active dry yeast',
    'quantity': 0.5,
    'unit': 'g',
    'price': 4
  }, {
    'name': 'warm water',
    'quantity': 30,
    'unit': 'ml',
    'price': 0
  }, {
    'name': 'all-purpose flour',
    'quantity': 15,
    'unit': 'g',
    'price': 2
  }]
}, {
  'id': 3,
  'name': 'Baked Brie with Peaches',
  'type': 'starter',
  'image': 'bakedbrie.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'round Brie cheese',
    'quantity': 10,
    'unit': 'g',
    'price': 8
  }, {
    'name': 'raspberry preserves',
    'quantity': 15,
    'unit': 'g',
    'price': 10
  }, {
    'name': 'peaches',
    'quantity': 1,
    'unit': '',
    'price': 4
  }]
}, {
  'id': 100,
  'name': 'Meat balls',
  'type': 'main dish',
  'image': 'meatballs.jpg',
  'description': "Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
  'ingredients': [{
    'name': 'extra lean ground beef',
    'quantity': 115,
    'unit': 'g',
    'price': 20
  }, {
    'name': 'sea salt',
    'quantity': 0.7,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'small onion, diced',
    'quantity': 0.25,
    'unit': '',
    'price': 2
  }, {
    'name': 'garlic salt',
    'quantity': 0.7,
    'unit': 'g',
    'price': 2
  }, {
    'name': 'Italian seasoning',
    'quantity': 0.6,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'dried oregano',
    'quantity': 0.3,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'crushed red pepper flakes',
    'quantity': 0.6,
    'unit': 'g',
    'price': 3
  }, {
    'name': 'Worcestershire sauce',
    'quantity': 6,
    'unit': 'ml',
    'price': 7
  }, {
    'name': 'milk',
    'quantity': 20,
    'unit': 'ml',
    'price': 4
  }, {
    'name': 'grated Parmesan cheese',
    'quantity': 5,
    'unit': 'g',
    'price': 8
  }, {
    'name': 'seasoned bread crumbs',
    'quantity': 15,
    'unit': 'g',
    'price': 4
  }]
}, {
  'id': 101,
  'name': 'MD 2',
  'type': 'main dish',
  'image': 'bakedbrie.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ingredient 1',
    'quantity': 1,
    'unit': 'pieces',
    'price': 8
  }, {
    'name': 'ingredient 2',
    'quantity': 15,
    'unit': 'g',
    'price': 7
  }, {
    'name': 'ingredient 3',
    'quantity': 10,
    'unit': 'ml',
    'price': 4
  }]
}, {
  'id': 102,
  'name': 'MD 3',
  'type': 'main dish',
  'image': 'meatballs.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ingredient 1',
    'quantity': 2,
    'unit': 'pieces',
    'price': 8
  }, {
    'name': 'ingredient 2',
    'quantity': 10,
    'unit': 'g',
    'price': 7
  }, {
    'name': 'ingredient 3',
    'quantity': 5,
    'unit': 'ml',
    'price': 4
  }]
}, {
  'id': 103,
  'name': 'MD 4',
  'type': 'main dish',
  'image': 'meatballs.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ingredient 1',
    'quantity': 1,
    'unit': 'pieces',
    'price': 4
  }, {
    'name': 'ingredient 2',
    'quantity': 12,
    'unit': 'g',
    'price': 7
  }, {
    'name': 'ingredient 3',
    'quantity': 6,
    'unit': 'ml',
    'price': 4
  }]
}, {
  'id': 200,
  'name': 'Chocolat Ice cream',
  'type': 'dessert',
  'image': 'icecream.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ice cream',
    'quantity': 100,
    'unit': 'ml',
    'price': 6
  }]
}, {
  'id': 201,
  'name': 'Vanilla Ice cream',
  'type': 'dessert',
  'image': 'icecream.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ice cream',
    'quantity': 100,
    'unit': 'ml',
    'price': 6
  }]
}, {
  'id': 202,
  'name': 'Strawberry',
  'type': 'dessert',
  'image': 'icecream.jpg',
  'description': "Here is how you make it... Lore ipsum...",
  'ingredients': [{
    'name': 'ice cream',
    'quantity': 100,
    'unit': 'ml',
    'price': 6
  }]
}
];

// Deepfreeze
// https://github.com/substack/deep-freeze/blob/master/index.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
}

deepFreeze(dishesConst);
