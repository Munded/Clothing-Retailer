describe('ShopTillYouDrop homepage', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000');

    expect(browser.getTitle()).toEqual('Shop Till You Drop');
  });
});