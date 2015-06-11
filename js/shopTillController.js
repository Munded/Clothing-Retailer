shopTillYouDrop.controller('ShopTillController', ['$http', 'ngCart', function($http, ngCart){
	var self = this;

	// http.get("mongodb://styd:1234@ds043982.mongolab.com:43982/shop-till-you-drop")
	// .success(function(res) {
	// 	self.inventory = res.inventory
	// });

	self.inventory =[{
				id: 1,
				name: "Almond Toe Court Shoes, Patent Black",
        category: "Women’s Footwear",
        price: 99,
        quantity: 5
			},
			{
				id: 2,
				name: "Suede Shoes, Blue",
	  		category: "Women’s Footwear",
        price: 42,
        quantity: 4
			},
			{
				id: 3,
				name: "Leather Driver Saddle Loafers, Tan",
        category: "Men’s Footwear",
        price: 34,
        quantity: 12
			}]
}])