var shopTillYouDrop = angular.module('ShopTill', ['ngResource', 'angular-stripe']);

	shopTillYouDrop.config(function (stripeProvider) {
		stripeProvider.setPublishableKey('pk_test_c794w6gPwRzg5GIr6woBkdKw')
	})