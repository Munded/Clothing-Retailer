shopTillYouDrop.controller('ShopTillController', ['$http', 'Inventory', 'Flash', function($http, Inventory, Flash){
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
		var cartItem = {"id": item.id, "name": item.name, "price": item.price, "quantity": 1}
		self.shoppingCart.push(cartItem)
		var shopItem = self.inventory.indexOf(item)
		self.inventory[shopItem].quantity --
		self.setTotal()
	};

	self.increaseQuantity = function(item) {
		findItem = self.shoppingCart.indexOf(item)
		self.shoppingCart[findItem].quantity 
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
    var total = 0;
    for(i=0;i<self.shoppingCart.length;i++){
        total += (self.shoppingCart[i].price * self.shoppingCart[i].quantity);
    }
    return total;
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
		Flash.dismiss()
		self.fivePoundVoucher = true
		self.setTotal()
		self.voucherSuccess()
	}

	self.addTenVoucher = function() {
		Flash.dismiss()
		if(self.subTotalPrice >= 50) {
			self.tenPoundVoucher = true
			self.setTotal()
			self.voucherSuccess()
		}
		else {
			var message = '<strong>Not Eligible for £10 discount!</strong> Only applicable if you are spending over £50';
      Flash.create('danger', message);
		}
	}

	self.addFifteenVoucher = function() {
		Flash.dismiss()
		if(self.subTotalPrice >= 75  && self.containingShoes) {
			self.fifteenPoundVoucher = true;
			self.setTotal();
			self.voucherSuccess()
		}
		else {
			var message = '<strong>Not Eligible for £15 discount!</strong> Only applicable if you are spending over £75 and buying a pair of shoes';
       Flash.create('danger', message);
		}
	}

	self.voucherSuccess = function() {
		var message = '<strong>Enjoy!</strong> Your Voucher has been applied';
		Flash.create('success', message);
	}

	// self.charge = function () {
 //    return stripe.card.createToken(self.payment.card)
 //      .then(function (token) {
 //        console.log('token created for card ending in ', token.card.last4);
 //        var payment = angular.copy(self.payment);
 //        payment.card = void 0;
 //        payment.token = token.id;
 //        return $http.post('https://yourserver.com/payments', payment);
 //      })
 //      .then(function (payment) {
 //        console.log('successfully submitted payment for $', payment.amount);
 //      })
 //      .catch(function (err) {
 //        if (err.type && /^Stripe/.test(err.type)) {
 //          console.log('Stripe error: ', err.message);
 //        }
 //        else {
 //          console.log('Other error occurred, possibly with your API', err.message);
 //        }
 //      });
 //  };

}])

