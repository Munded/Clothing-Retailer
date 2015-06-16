describe('ShopTillController', function() {
	beforeEach(module('ShopTill'));

	var ctrl;

	beforeEach(inject(function($controller){
		ctrl = $controller('ShopTillController');
		item1= {
				"id": 1,
				"name": "Almond Toe Court Shoes, Patent Black",
		    "category": "Women’s Footwear",
				"price": 99,
				"quantity": 5
			};
		item2 = {			
				"id": 2,
				"name": "Suede Shoes, Blue",
				"category": "Women’s Footwear",
				"price": 42,
				"quantity": 4
			};
		item3 = {
			"id": 3,
			"name": "Leather Driver Saddle Loafers, Tan",
			"category": "Men’s Footwear",
			"price": 34,
			"quantity": 12
		};
	}));

	describe('when visiting the homepage', function() {

		it('displays items', function() {
			expect(ctrl.inventory).toContain(item1)
		});
	});

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
			expect(ctrl.shoppingCart).toEqual([item1])
		});

		it('can remove an item from the cart', function() {
			ctrl.addItemToCart(item1)
			ctrl.removeItemFromCart(item1)
			expect(ctrl.shoppingCart).toEqual([])
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

		it('can apply a five pound discount', function() {
			ctrl.addItemToCart(item1)
			ctrl.addFiveVoucher()
			expect(ctrl.subTotalPrice).toEqual(99)
			expect(ctrl.totalPrice).toEqual(94)
		});

		it('can apply a ten pound discount', function() {
			ctrl.addItemToCart(item1)
			ctrl.addTenVoucher()
			expect(ctrl.subTotalPrice).toEqual(99)
			expect(ctrl.totalPrice).toEqual(89)
		});

		it('will raise an error if not eligible for 10 pound discount', function(){
			ctrl.addItemToCart(item2)
			expect( function() { ctrl.addTenVoucher() } ).toThrow(new Error("Not Eligible for £10 discount"))
		});
	});
});