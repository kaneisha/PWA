/*
	PWA1: Goal7:  Simple Library

	var test = document.querySelectorAll('#test a');

	ryu(test).each(function(){
	
	});
*/

var libs = function(elems){

    return new libs.prototype.init(elems);

};

libs.prototype = {

    init: function(elems){

    	this.elements = elems; //Pass the existing array 
	},

    elements: [],

    each: function(callback){
    	for(var i = 0, max = this.elements.length; i < max; i++){
    		callback.call(this.elements[i]);
    		console.log(this.elements[i]);
            this.elements[i].style.backgroundColor = 'gray';
          
    	}
    }

}; // end prototype

libs.prototype.init.prototype = libs.prototype;