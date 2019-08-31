//DinnerModel class
class DinnerModel {

  constructor() {
    this.dishes = dishesConst;
    this.noGuests = 0;
    this.menu = [];
    this.allIngredients = [];
    
    function handleErrors(response) {
    	if (response.ok) {
    		return response;
    	}
    	throw Error(response.statusText);
    	
	}

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
    if(type == 'starter') {
        return this.menu[0];
    }
    if(type == 'main dish') {
        return this.menu[1];
    }
    if(type == 'dessert') {
        return this.menu[2];
    }
  }

  //Returns all the dishes on the menu.
  getFullMenu() {
    return this.menu;
  }


  getAllIngredients() {
    this.allIngredients = this.menu.map(dish => dish.ingredients);
    return this.allIngredients;

  }

  getTotalMenuPrice(){
      let subPrices = this.allIngredients.map(subarray => subarray.map(obj => obj.price).reduce((acc, scalar) => acc + scalar, 0));
      let totalPrice = subPrices.reduce((acc, scalar) => acc + scalar, 0);
      return this.noGuests*totalPrice;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  addDishToMenu(id) {
    let dish = this.getDish(id);
    let pos = 0;

    if(id < 100) {
        pos = 0;
    }
    else if(100 <= id < 200) {
        pos = 1;
    }
    else if(id >= 200) {
        pos = 2;
    }
    this.menu[pos] = dish;

  }

  //Removes dish from menu
  removeDishFromMenu(id) {
    let dish = this.getDish(id);
    let pos = 0;

    if(id < 100) {
        pos = 0;
    }
    else if(100 <= id < 200) {
        pos = 1;
    }
    else if(id >= 200) {
        pos = 2;
    }
    this.menu.splice(pos, 1);

  }


  //Returns all dishes of specific type (i.e. "starter", "main dish" or "dessert").
  //query argument, text, if passed only returns dishes that contain the query in name or one of the ingredients.
  //if you don't pass any query, all the dishes will be returned
  getAllDishes(type, query) {
  	let url = 'http://sunset.nada.kth.se:8080/iprog/group/10/recipes/search';
  	let dishesAPI = [];
  	let type_url = [];
  	let url_w_query = '';
	let url_w_type = '';
	
  	if(type) {
  		type_url = type.split(' ');
  	}
  	
  	// if query passed return specific type and query
  	if(query) {
  		if(type_url.length > 1){
  			url_w_query = url + '?' + 'type=' + type_url[0] + '%20course&query=' + query;
  			console.log(url_w_query);
  		} else {
  			url_w_query = url + '?' + 'type=' + type_url[0] + '&query=' + query;
  			console.log(url_w_query);	
  		}
  		
    	return fetch(url_w_query, {headers: {'X-Mashape-Key' : '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
    	.then(this.handleErrors)
    	.then(response => response.json())
    	.then(data => {
    		dishesAPI = data.results;
    		console.log(dishesAPI);
    		return dishesAPI;
    	
    	}); 
    } else if(type && query == null){ // if only type, return all of that specific type
    	if(type_url.length > 1) {
    		url_w_type = url + '?' + 'type=' + type_url[0] + '%20course';
    		console.log(url_w_type);	
    	} else {
    		url_w_type = url + '?' + 'type=' + type_url[0];
    		console.log(url_w_type);
    	}
    	return fetch(url_w_type, {headers: {'X-Mashape-Key' : '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
    	.then(this.handleErrors)
    	.then(response => response.json())
    	.then(data => {
    		dishesAPI = data.results;
    		console.log(dishesAPI);
    		return dishesAPI;
    	
    	}); 	
    } else {
		// if you dont pass any query all the dishes will be returned
	  	 return fetch(url, {headers: {'X-Mashape-Key' : '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
		.then(this.handleErrors)
		.then(response => response.json())
		.then(data => {
			dishesAPI = data.results;
			console.log(dishesAPI);
			return dishesAPI;
			
		});
    
    }
  	
  }

  //Returns a dish of specific ID
  getDish(id) {
    let url = 'http://sunset.nada.kth.se:8080/iprog/group/10/recipes/' + id + '/information';  
    return fetch(url, {headers: {'X-Mashape-Key' : '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}})
    .then(this.handleErrors)
    .then(response => response.json());
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
