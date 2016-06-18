 (function(){

    var app= angular.module("store-products", []);


   app.directive('productTitle', function(){
      return {
        restrict: "E",
        templateUrl: "product-title.html",
      };
    });


  app.directive("productPanels", function(){
    return {
      restrict: 'E',
      temlateUrl: "product-panels.html",
      controller: function(){
        
        this.tab= 1;  //intitializing the tab property

        this.setTab= function(setTab){  //setting the current tab that is clicked to tab with current value
          this.tab = setTab;
        };

        this.isSet= function(isSet){ //paasing in the value of current tab
          return this.tab===isSet; //return if current tab matches previous value
        };

      },
      controllerAs: "panels"
    };
  });

})();
