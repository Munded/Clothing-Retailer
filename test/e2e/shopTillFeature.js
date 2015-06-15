describe('ShopTillYouDrop homepage', function() {
	beforeEach(function(){
    browser.get('http://localhost:3000');
    var voucher = browser.findElement(protractor.By.model('voucher'))
	});
	
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shop Till You Drop');
  });

	it('inventory has name', function() {
  	expect(element(by.id('wf')).getText()).toContain("Women’s Footwear");
 	});


  describe('it can add items to cart', function() {

	 	it('displays an empty cart when no items added', function() {
			expect(element(by.id('cart')).getText()).toContain('Your cart is empty');
	  });

		it('can add an item to the shopping basket', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Women’s Footwear'}")).
			get(0).
			element(by.linkText('Add to Cart')).click()  
		  expect(element(by.id('cart')).getText()).toContain('99');
		 });

		it('can remove an item from the basket', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Women’s Footwear'}")).
			get(0).
			element(by.linkText('Add to Cart')).click()
			element(by.css('.glyphicon-remove')).click()
			expect(element(by.id('cart')).getText()).toContain('Your cart is empty');
		});

		it('can calculate total', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Women’s Footwear'}")).
			get(0).
			element(by.linkText('Add to Cart')).click()
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Women’s Footwear'}")).
			get(1).
			element(by.linkText('Add to Cart')).click()
			expect(element(by.id('cart')).getText()).toContain('141');
		})
	});

	describe('it can add vouchers to final purchase', function() {
		it('can take 5 pounds off', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Women’s Footwear'}")).
			get(0).
			element(by.linkText('Add to Cart')).click()
			voucher.sendKeys('5poundsoff')
			expect(element(by.id('cart')).getText()).toContain('94');
		});
	});
});
