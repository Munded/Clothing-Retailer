describe('ShopTillController', function() {
	beforeEach(function(){
		module('ShopTill');
		module('flash');
	});


	var ctrl;

	beforeEach(inject(function($controller){
		ctrl = $controller('ShopTillController');
		item1= {
				"id": 1,
				"name": "Almond Toe Court Shoes, Patent Black",
		    "category": "Female Footwear",
				"price": 99,
				"quantity": 2
			};
		item2 = {			
				"id": 2,
				"name": "Suede Shoes, Blue",
				"category": "Female Footwear",
				"price": 42,
				"quantity": 2
			};
		item3 = {
			"id": 3,
			"name": "Leather Driver Saddle Loafers, Tan",
			"category": "Men’s Footwear",
			"price": 34,
			"quantity": 0
		};
	}));

	describe('the shopping cart', function() {
		it('starts with an empty cart', function() {
			expect(ctrl.shoppingCart).toEqual([])
		});

		it('initalises with a total price of £0', function() {
			expect(ctrl.subTotalPrice).toEqual(0)
			expect(ctrl.totalPrice).toEqual(0)
		});

		it('can add an item to the cart', function() {
			ctrl.addItemToCart(item1)
			expect(ctrl.shoppingCart).toEqual([item1]);
			expect(ctrl.shoppingCart[0].quantity).toEqual(1);
		});

		it('adding item to inventory will decrease quantity of item in inventory', function() {
			ctrl.addItemToCart(item1)
			expect(ctrl.shoppingCart).toEqual([item1]);
			expect(item1.quantity).toEqual(1);
		});

		it('cannot add an item to the cart if item is out of stock', function() {
			ctrl.addItemToCart(item3)
			expect(ctrl.shoppingCart).toEqual([]);
			expect(item3.quantity).toEqual(0);
		});

		it('can remove an item from the cart', function() {
			ctrl.addItemToCart(item1)
			ctrl.removeItemFromCart(item1)
			expect(ctrl.shoppingCart).toEqual([])
		});

		it('removing an item from cart will increase inventory quantity', function() {
			ctrl.addItemToCart(item1)
			ctrl.removeItemFromCart(item1)
			expect(item1.quantity).toEqual(2)
		})

		it('if 2 items in car, remove only the specified item', function() {
			ctrl.addItemToCart(item1)
			ctrl.addItemToCart(item2)
			ctrl.removeItemFromCart(item1)
			expect(ctrl.shoppingCart).toEqual([item2])
		});

		it('can calculate the subtotal', function() {
			ctrl.addItemToCart(item1)
			ctrl.addItemToCart(item2)
			expect(ctrl.subTotalPrice).toEqual(141)
		});
		
		it('can adjust subtotal when item is removed', function() {
			ctrl.addItemToCart(item1)
			ctrl.addItemToCart(item2)
			ctrl.removeItemFromCart(item1)
			expect(ctrl.subTotalPrice).toEqual(42)
		})
	});

	describe('Applying Vouchers: it ', function() {
		it('can apply a five pound discount', function() {
			ctrl.addItemToCart(item1)
			ctrl.addFiveVoucher()
			expect(ctrl.subTotalPrice).toEqual(99)
			expect(ctrl.totalPrice).toEqual(94)
		});

		it('can apply a ten pound discount', function() {
			ctrl.addItemToCart(item1);
			ctrl.addTenVoucher();
			expect(ctrl.subTotalPrice).toEqual(99);
			expect(ctrl.totalPrice).toEqual(89);
		});

		it('will not apply the £10 voucher if not eligible', function() {
			ctrl.addItemToCart(item2);
			ctrl.addTenVoucher();
			expect(ctrl.subTotalPrice).toEqual(42);
			expect(ctrl.totalPrice).toEqual(42);
		})

		it('can apply a 15 pound discount', function() {
			ctrl.addItemToCart(item1);
			ctrl.addFifteenVoucher();
			expect(ctrl.subTotalPrice).toEqual(99);
			expect(ctrl.totalPrice).toEqual(84);
		});

		it('will not apply the £15 voucher if not eligible', function() {
			ctrl.addItemToCart(item2);
			ctrl.addTenVoucher();
			expect(ctrl.subTotalPrice).toEqual(42);
			expect(ctrl.totalPrice).toEqual(42);
		})

	});
});