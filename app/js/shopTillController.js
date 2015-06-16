shopTillYouDrop.controller('ShopTillController', ['$http', function($http){
	var self = this;

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
			},
			{
				id: 4,
				name: "Flip Flops, Red",
        category: "Men’s Footwear",
        price: 19,
        quantity: 6
			},
			{
				id: 5,
				name: "Flip Flops, Blue",
        category: "Men’s Footwear",
        price: 19,
        quantity: 0
			},
			{
				id: 6,
				name: "Gold Button Cardigan, Black",
				category: "Women’s Casualwear",
				price: 167,
				quantity: 6
			},
			{
				id: 7,
				name: "Cotton Shorts, Medium Red",
				category: "Women’s Casualwear",
				price: 30,
				quantity: 5
			},
			{
				id: 8,
				name: "Fine Strip Short Sleeve Shirt, Grey",
				category: "Men’s Casualwear",
				price: 49.99,
				quantity: 9
			},
			{
				id: 9,
				name: "Fine Strip Short Sleeve Shirt, Green",
				category: "Men’s Casualwear",
				price: 39.99,
				quantity: 3
			},
			{
				id: 10,
				name: "Sharkskin Waistcoat, Charcoal",
				category: "Men’s Formalwear",
				price: 75,
				quantity: 2
			},
			{
				id: 11,
				name: "Lightweight Patch Pocket Blazer, Deer",
				category: "Men’s Formalwear",
				price: 175.50,
				quantity: 1
			},
			{
				id: 12,
				name: "Bird Print Dress, Black",
				category: "Women’s Formalwear",
				price: 270,
				quantity: 10
			},
			{
				id: 13,
				name: "Mid Twist Cut-Out Dress, Pink",
				category: "Women’s Formalwear",
				price: 540,
				quantity: 5
			},
			{
				id: 14,
				name: "Five Pounds Off",
				category: "Voucher",
				price: -5
			}]

	self.shoppingCart = [];
	self.subTotalPrice = 0;
	self.totalPrice = 0;
	self.fivePoundVoucher = false;

	self.addItemToCart = function(item) {
		self.shoppingCart.push(item)
		self.setTotal()
	};

	self.removeItemFromCart = function(item) {
		for(i=0; i < self.shoppingCart.length; i++){
			if(self.shoppingCart[i] === item){
				self.shoppingCart.splice(i, 1);
			}
		}
		self.setTotal()
	};

	self.calcSubTotal = function() {
		return self.shoppingCart.map(function(item) {
			return parseFloat(item.price);
		}).reduce(function(old, now) {
			return old + now;
		},0);
	};

	self.setSubTotal = function() {
		self.subTotalPrice = self.calcSubTotal();
	}

	self.setTotal = function() {
		self.setSubTotal()
		if(self.fivePoundVoucher){
			self.totalPrice = self.subTotalPrice - 5
		}
	}

	self.addFiveVoucher = function() {
		self.fivePoundVoucher = true
		self.setTotal()
	}


}])

