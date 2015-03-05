(function () {
    angular.module('elproduct', [])
        .controller('ProductController', function () {
            this.prodArray = [1, 2, 3, 4, 5, 6];
			this.moused = function(){
				console.log('mouseover');
				alert('I hate you');		
			};
       		this.moarpics = function(){
				console.log('clicked!');	
			
			}; 
		})








    ; // closes module  
})();
