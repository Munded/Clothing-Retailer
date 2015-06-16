shopTillYouDrop.controller('ShopTillController', ['$http', 'Inventory', function($http, Inventory){
	var self = this;

	self.inventory = []

var setInventory = function(data) {
	self.inventory = data;
};

Inventory.getItems().success(setInventory);

	self.shoppingCart = [];
	self.subTotalPrice = 0;
	self.totalPrice = 0;
	self.fivePoundVoucher = false;
	self.tenPoundVoucher = false;
	self.fifteenPoundVoucher = false;
	self.containingShoes = false;
	self.emptyCart = true


	self.isEmpty = function() {
		if(self.shoppingCart.length > 0){
			self.emptyCart = false
		}
	}

	self.checkForShoes = function() {
		for(j=0; j < self.shoppingCart.length; j++){
			if(self.shoppingCart[j].category === 'Women’s Footwear'){
				self.containingShoes = true;
			};
		};
	};

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
			return parseFloat(item.price)
		}).reduce(function(old, now) {
			return old + now;
		},0);
	};

	self.setSubTotal = function() {
		self.subTotalPrice = self.calcSubTotal();
	}

	self.setTotal = function() {
		self.setSubTotal()
		self.checkForShoes()
		self.isEmpty()
		if(self.fivePoundVoucher){
			self.totalPrice = self.subTotalPrice - 5
		} else if(self.tenPoundVoucher){
			self.totalPrice = self.subTotalPrice - 10
		} else if(self.fifteenPoundVoucher){
			self.totalPrice = self.subTotalPrice - 15
		}
		else{
			self.totalPrice = self.subTotalPrice
		}
	}

	self.addFiveVoucher = function() {
		self.fivePoundVoucher = true
		self.setTotal()
	}

	self.addTenVoucher = function() {
		if(self.subTotalPrice >= 50) {
			self.tenPoundVoucher = true
			self.setTotal()
		}
		else {
			throw new Error("Not Eligible for £10 discount")
		}
	}

	self.addFifteenVoucher = function() {
		if(self.subTotalPrice >= 75  && self.containingShoes) {
			self.fifteenPoundVoucher = true;
			self.setTotal();
		}
		else {
			throw new Error("Not Eligible for £15 discount")
		}
	}


}])

