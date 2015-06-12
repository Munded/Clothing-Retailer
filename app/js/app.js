var shopTillYouDrop = angular.module('ShopTill', ['ngResource', 'ngCart', 'ui.router']);
	shopTillYouDrop.config(function($stateProvider) {
		$stateProvider.state("Modal", {
	    views:{
	      "modal": {
	        templateUrl: "modal.html"
	      }
	    },
	    abstract: true
	  });

		$stateProvider.state("Modal.cart", {
    views:{
      "modal": {
        templateUrl: "app/templates/cart.html"
      }
    }
  });

});
	