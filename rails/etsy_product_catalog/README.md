# Etsy Product Catalog on Rails

We're going to use the Etsy API to build a storefront for Etsy, with all of the features we talked about on Monday - displaying trending items, categories, product details, all the way through adding items to a cart and checkout. 

We don't want to lean on the API too heavily, though. Making a call to it every time somebody visits our site would be slow. Fortunately, Etsy is pretty liberal in their terms of service, and they'll let us store their data in our database. (Some sites consider that "harvesting data", and will revoke API keys over it. Etsy figures their data is pretty useless unless we end up sending customers back to buy from their vendors, and they're right.) 

We have an idea about what kinds of information should show up on several product-related pages. Now we need to fetch that information from the API and populate our db with it. While that's going on, we also need to get the structure of the pages themselves sorted out - what the view templates should look like, how to populate the instance variables those templates use, how to route to the pages...that's about it. 