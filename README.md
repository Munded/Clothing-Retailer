[![Build Status](https://travis-ci.org/Munded/Clothing-Retailer.svg?branch=master)](https://travis-ci.org/Munded/Clothing-Retailer)
[![Code Climate](https://codeclimate.com/github/Munded/Clothing-Retailer/badges/gpa.svg)](https://codeclimate.com/github/Munded/Clothing-Retailer)
[![Test Coverage](https://codeclimate.com/github/Munded/Clothing-Retailer/badges/coverage.svg)](https://codeclimate.com/github/Munded/Clothing-Retailer/coverage)
#Shop Till You Drop


![Shop Till You Drop](https://github.com/Munded/Clothing-Retailer/blob/master/app/public/images/Screen%20Shot%202015-06-18%20at%2019.06.08.png)

This is a test-driven single page Clothing-Retailer app designed in angular js with a simple node express server.

**User Stories**
```
As a User, I can add a product to my shopping cart.

As a User I can remove a product from my shopping cart.

As a User I can view the total price for the products in my shopping cart.

As a User I can apply a voucher to my shopping cart.

As a User, I can view the total price for the products in my shopping cart with discounts applied

6. As a User, I am alerted when I apply an invalid voucher to my shopping cart

7. As a User, I am unable to purchase Out of Stock products to the shopping cart
 ```

**Technologies Used:**

- AngularJS
- Angular-Flash
- Nodejs

**Testing done with:**

- Unit testing: Karma
- Feature testing: Protractor

**How to Run**
- Clone this repo and run 
  ``$ node server.js``
- and visit ``http://localhost:3000``
  
**How to Test**

*-Unit Testing:*
- host server with ``$ node server.js``
- run tests with ``$ karma start test/karma.conf.js``

*-Feature Testing:*
- run server with ``$ node server.js``
- run selium server with ``$ webdriver-manager start``
- run tests with ``$ protractor test/e2e/conf.js``
 
**Things To Improve**
- Mock out Flash in unit tests instead of injecting flash module
- Work out how to test appearance of flash message on page
- Sort out resizing of CSS
- Add checkout system using stripe or paypal

 


