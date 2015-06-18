describe('ShopTillYouDrop homepage', function() {
	beforeEach(function(){
    browser.get('http://localhost:3000');
 
	});
	
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shop Till You Drop');
  });

	it('inventory has name', function() {
  	expect(element(by.id('wf')).getText()).toContain("Women's Footwear");
 	});


  describe('it can add items to cart', function() {

	 	it('displays an empty cart when no items added', function() {
			expect(element(by.id('cart')).getText()).toContain('There are no items in your Cart');
	  });

		it('can add an item to the shopping basket', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(0).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()  
		  expect(element(by.id('cart')).getText()).toContain('99');
		 });

		it('can remove an item from the basket', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(0).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			element(by.css('.glyphicon-remove')).click()
			expect(element(by.id('cart')).getText()).toContain('There are no items in your Cart');
		});

		it('can calculate total', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(0).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(1).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			expect(element(by.id('cart')).getText()).toContain('141');
		})
	});

	describe('it can add vouchers to final purchase', function() {
		it('can take 5 pounds off', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(0).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			element(by.id('five-pound-voucher')).click();
			expect(element(by.id('cart')).getText()).toContain('94');
		});

		it('can take 10 pounds off', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(0).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			element(by.id('ten-pound-voucher')).click();
			expect(element(by.id('cart')).getText()).toContain('89');
		});

		it('will raise an error if not eligible for 10 pound discount', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(1).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			element(by.id('ten-pound-voucher')).click();
			expect(element(by.id('message')).getText()).toContain('Not Eligible for £10 discount!');
		});

		it('can take 15 pounds off', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(0).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			element(by.id('fifteen-pound-voucher')).click();
			expect(element(by.id('cart')).getText()).toContain('84');
		});

		it('will raise an error if not eligible for 15 pound discount', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Female Footwear'}")).
			get(1).
			element(by.css('[ng-click="ctrl.addItemToCart(item)"')).click()
			element(by.id('fifteen-pound-voucher')).click();
			expect(element(by.id('message')).getText()).toContain('Not Eligible for £15 discount!');
		});
	});
});
