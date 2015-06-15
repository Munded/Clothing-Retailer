describe('ShopTillYouDrop homepage', function() {
	beforeEach(function(){
    browser.get('http://localhost:3000');
	});
	
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Shop Till You Drop');
  });

	it('inventory has name', function() {
  	expect(element(by.id('wf')).getText()).toContain("Women’s Footwear");
 	});

  it('displays an empty cart when no items added', function() {
  	expect(element(by.id('cart')).getText()).toContain('Your cart is empty');
  });

  describe('it can add items to cart', function() {
		it('can add an item to the shopping basket', function() {
			element.all(by.repeater("item in ctrl.inventory | filter: { category:'Men’s Formalwear'}")).
		  get(1).
		  element(by.linkText('Add to Cart')).click()  
		  expect(element(by.id('cart')).getText()).toContain('175.50');
		 });
	});
});
