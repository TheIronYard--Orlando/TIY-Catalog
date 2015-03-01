# Etsy Product Catalog on Rails

We're going to use the Etsy API to build a storefront for Etsy, with all of the features we talked about on Monday - displaying trending items, categories, product details, all the way through adding items to a cart and checkout. 

We don't want to lean on the API too heavily, though. Making a call to it every time somebody visits our site would be slow. Fortunately, Etsy is pretty liberal in their terms of service, and they'll let us store their data in our database. (Some sites consider that "harvesting data", and will revoke API keys over it. Etsy figures their data is pretty useless unless we end up sending customers back to buy from their vendors, and they're right.) 

We have an idea about what kinds of information should show up on several product-related pages. Now we need to fetch that information from the API and populate our db with it. While that's going on, we also need to get the structure of the pages themselves sorted out - what the view templates should look like, how to populate the instance variables those templates use, how to route to the pages...that's about it. 

## User Stories

### Feature: Display products
*  In order to visualize inventory
*  As a customer
*  I want to be able to view available products 

### Feature: Sign in
*  In order to access my account information
*  As a returning customer(? site member?)
*  I want to be able to sign in

### Feature: Product details
*  In order to decide whether to buy a product
*  As a customer
*  I want to be able to view everything about a product

### Feature: Add to cart
*  In order to make a purchase
*  As a customer
*  I want to be able to put products into a cart

### Feature: Checkout (send back to Etsy w full cart)
*  In order to purchase my products
*  As a customer
*  I want to be able to purchase products in my cart

### Feature: View popular/trending products
*  In order to keep up with the times
*  As a customer
*  I want to be able to see what products other people are buying

### Feature: View newest items
*  In order to view the most recently added items
*  As a customer
*  I want to be able to conveniently find the newest products

### Feature: Display categories (nice to have)
*  In order to navigate the site easier
*  As a customer
*  I want to be able to view products by category

### Feature: Search for products (last thing)
*  In order to find products
*  As a customer
*  I want to be able to search for products
