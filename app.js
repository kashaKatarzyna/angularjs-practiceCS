// DIRECTIVES: a marker on html tag to tell angular to run, its how we bind the behaviour
            // html elements with functionality. its all the ng- on the html
// MODULES: keeps code encapslated, define all dependencies for application in the square bracket, where the app components live
// EXPRESSIONS: insert dynamic expressins into html {{}} how values are displayed on the page
// CONTROLLERS: help get data onto the page. controlls whats displayed, add app behavior, builds a model for the view to display
// FILTERS: |uppercase |lowercase |limitTo:8 |limitTo:3 |orderBy:'-price'
// DIRECTIVES: allow to write html that express a certain behaviur in ur application, look below
// MODULES: best to split them basd on functionality, app.js-top level model attached via ng-app
        // product.js- all the functionality for products and only products
        // make sure that after u create a new module, u put that dependencie in the main app module in the[] brackets
  // 1-new module
  // 2-move all the dependencies
  // 3-add new module ass dependencie
  // 4-include file in index.html

// SERVICES: allow u to get rid of hard coded data and pull it from an api. gives ur controller additional functionality
  // *$http- fetch json data from web service
  // *$log- logging msg to the js console
  // *filter- filtering an array

  // $http service allows for asych req to the server:
  //   $http({methid: "GET", url: '/products.json'});  or:
  //   $http.get('/products.json', {apiKey: 'myApiKey'});
  // Both return a promise object with .success() and or.error()
  // when we tell to fetch in json then it automaticaly comes back as objects and arrays.

// ex/;
  // app.controller('SomeController',['$http', '$log', function($http, $log){
    // when angular loads it sees that controller uses some dependecies, after it loads it gives those dependencies for the controller to use
    // so they become dependency injector that now u can use, thats why u write them as argument in the function().
    // so in [] brackets it lets angular know what dependencies the controller/ app will need
  // }]);

  // other functions:  $http.post('/path/to/resource.json', {param: 'value'}); 
  //                         .put(), 
  //                   $http.delete('/path/to/resource.json'),

  //         $http({method: "OPTIONS", url: '/path/to/resource.json'});
  //         $http({method: "PATCH", url: '/path/to/resource.json'});
  //         $http({method: "TRACE", url: '/path/to/resource.json'});




(function(){

  var app = angular.module('store', ['store-products']);


  app.controller('StoreController', ['$http',function($http){
    var store= this;
    store.products = [];  //initialize products to empty array bc page renders 
                            //before the data from http req comes back and this way we prevent any errors
                            //then when the data comes back it will load into the array even though page has loaded

    this.products = gems;  //normally u would remove this, i left it so there is some data on the page


    $http.get('products.json').success(function(data){
      // do somthing with the data, so create new var store = this and inside callback assign the data to it
      // products is the array

      sore.products= data;
    })
  }]);  


  var gems = [
    {
      name: "rock",
      price: 2.95,
      description: 'some cool description that i have no time to write',
      canPurcahse: true,
      soldOut: true, //if product is sold out then we want to hide it. true is sold out, manipulate in html
      images: [{full:'dodecahedron-01-full.jpg'}]
    },

    {
      name: "diamond",
      price: 10.95,
      description: 'no time to write',
      canPurcahse: false,
      soldOut: true, //if product is sold out then we want to hide it. true is sold out, manipulate in html
      images: [{full:'dodecahedron-02-full.jpg'}],
      reviews: [{stars:5, body:"this sucks", author:"kasha"},
                {stars:4, body:"awesome", author:"yoav"}],
    },
  ]




  app.controller("PanelController", function(){
    this.tab= 1;  //intitializing the tab property

    this.setTab= function(setTab){  //setting the current tab that is clicked to tab with current value
      this.tab = setTab;
    };

    this.isSet= function(isSet){ //paasing in the value of current tab
      return this.tab===isSet; //return if current tab matches previous value
    } ;
  });

  app.controller("ReviewController", function(){
    this.review={};

    this.addReview= function(product){  //passing in the current product we are reviewing
      product.reviews.push(this.review);  //push to products review array
      this.review = {}; //after submitting form it empties the input fields
    };
  });

// in html instead of all panels u just make a new element <product-panels>


})();  //closure function



// OTHER NOTES:
// set current to enetered value, if no vallue then set current to 0:
// this.myFunc = function(value){
  // this.current= value || 0;
// }

// direcives:
 // template-expanding: the simplest, 
 //   define a custom tag or atribute
 //   can include controller logic, 
 //   express omplex ui, 
 //   calling events and resgistering event handlers
 //   reusing common components

// element: <product-title></product-title>  use for ui widgets
// atribute: <h3 product-title></h3>  use for mixin behavior
