(function () {
    angular.module('elproduct', [])
        .controller('ProductController', function () {
            this.prodArray = [1, 2, 3, 4, 5, 6];
			this.moused = function(){
				console.log('mouseover');
			};
			this.pics = [
			'http://www.q-tees.co.uk/image/cache/data/t-shirts2/html%20green-542x700.jpg',
			'http://www.gekius.com/image/cache/data/products/sourcecontrol/github/code%20sucks-600x800.jpg'		
			];
			this.imgnum = 0;
       		this.morepics = function(){
				console.log('clicked!');
				this.imgnum++;
				if (this.imgnum === this.pics.length){
					this.imgnum = 0;	
				}	
			}; 
		})








    ; // closes module  
})();
