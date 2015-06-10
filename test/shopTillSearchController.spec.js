describe('ShopTillSearchController', function() {
	beforeEach(module('ShopTill'));

	var ctrl;

	beforeEach(inject(function($controller) {
		ctrl = $controller('ShopTillSearchController');
	}));

	it('initalises with an empty search result and term', function() {
		expect(ctrl.searchResult).toBeUndefined();
		expect(ctrl.searchTerm).toBeUndefined();
	});

	describe('when searching for an item', function() {

		var inventory = [
			{
				"id": 1,
				"name": "Almond Toe Court Shoes, Patent Black",
		        "category": "Women’s Footwear",
		        "price": 99,
		        "quantity": 5
			},
			{
				"id": 2,
				"name": "Suede Shoes, Blue",
		        "category": "Women’s Footwear",
		        "price": 42,
		        "quantity": 4
			},
			{
				"id": 3,
				"name": "Leather Driver Saddle Loafers, Tan",
		        "category": "Men’s Footwear",
		        "price": 34,
		        "quantity": 12
			},
		]

		it('displays search results', function() {
			ctrl.searchTerm = 'hello';
			ctrl.doSearch();
			expect(ctrl.searchResult.inventory).toEqual(inventory)
		});
	});
});