# Interaction Programing - Lab 3
=================================================

This branch contains new tests for lab 3. For more details on how to complete the assignment follow the instructions on the [course website](https://www.kth.se/social/course/DH2642).

Implement the GSC in `src/app.js` and make index.html contain all the views.

## Testing

Open `index.html` in the browser and tests should run automatically


=======
## What's in this repo
-----

* [index.html](/index.html) - open to run the tests.
* [src/model/dinnerModel.js](/src/model/dinnerModel.js) - write code here. This is a skeleton for the model of the application, but it does not yet support the functionality needed (number of guests, selected dishes, et.c.). It also contains a first dummy hardcoded "database" to use as test data.
* [src/model/dinnerModel.test.js](/src/model/dinnerModel.test.js) - tests for the model. You do not need to modify these, but study how they are written. You might be asked to write more tests in the future. In your opinion, do these tests cover the most important areas, or would you have written them differently?

* [src/app.js](/src/app.js) - this is the overall code of the application. It is responsible for initial setup of the app (when the page loads for the first time). You will find it more relevant when you start working with views in future labs.
* [images/](/images) - folder contains some pictures you can use for your dishes.

* A config file is needed it resides in [src/model/config.js] and has this setup:
this.apiKey = 'insert apikey';
this.endpoint = 'insert endpoint address';
