# Etsy Product Catalog via Angular JS

Using the [Esty API](http://etsy.com/developers), we're going to build a reasonable facsimile of [Etsy.com](http://etsy.com) that's responsive and showcases the [Trending Items](https://www.etsy.com/trending) and [listing pages](https://www.etsy.com/search/toys-and-games) for [select categories](https://www.etsy.com/categories). Then we'll take a crack at trying to _buy_ stuff!

To help us with User Interface interactions, we'll build out a few Codrops. Let's use the [Horizontal Slide-Out Menu](http://tympanus.net/bBlueprints/HorizontalSlideOutMenu/) for the primary navigation, since we'll have so many nice pictures to show off. We don't need to display _every_ category in Etsy, just a select few. It would be nice if we had a more [Responsive Product Grid](http://tympanus.net/Blueprints/ProductGridLayout/) than theirs. Showing product options right in the listing would be great, but it might be a little cluttered. If we use a [View Mode Switch](http://tympanus.net/Blueprints/ViewModeSwitch/), we can toggle between that data-dense grid and a slimmer list view.

Additionally, we've been dancing around this problem of keeping our `bower_components` in source control for a while now, so let's deal with that. In order to deploy this project, we want to properly build a _distribution bundle_ that contains the concatenated and minified versions of our vendor libraries and application code. Therefore, we'll put our human-friendly _source_ files into `src/`, and the build artifacts will live in `dist/` (eventually). Those will _never_ be committed into source control, so `dist/` is _ignored_... along with the usual suspects.

Now to keep us on track, we should write out some _User Stories_ and create some _Issues_ for ourselves:

## User Stories

> ### A Smurf can smurf so that Smurfs can smurf (XX)
>
> * smurfing is hard
> * always remember to smurf!
> * don't forget to smurf the smurfs after smurfing


### A Shopper can browse Products so that Sellers can sell Products and Buyers can find something that they like
* Responsive layout : sm, med. and Lg 
* toggling between list and grid view

#### A Shopper can Browse list view
* link to the layout
* add details about what can be seen in list mode

#### A Shopper can Browse by Grid
* link to the layout
* add details about what can be seen in list mode

### A Shopper can Browse Products by category so that the shopper can narrow their search options.
* Responsive layout : sm, med. and Lg 
* toggling between list and grid view

### A Shopper can view Details of that Product so that the Shopper can better understand the Product
* put product details of Details mode HERE
* price, description, title, image...

### A Shopper can view options for a Product so that Shopper can see what is available
* sizes, colors...variations

### A shopper can view images for a Product so that they can see what Product is being purchased.
* images: display in an easily navigable way 
* something that is responsive and usable on mobile 
* thumbnails so that Shopper can view Product Details
    
### A Shopper can add products to their shopping cart...(EPIC!)
* Selecting options for a Product is a part of Placing an order
* adding a Line Item to an order...
* API approval for OAuth1.0
* otherwise, guest-cart/local-storage/firebase
