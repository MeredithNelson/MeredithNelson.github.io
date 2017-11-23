function arrayLoop(){

	var aboutMe = ["I've lived in so many states and so many enviorments.", 
	"Ranging from the hot heat in Florida to the bitter cold winters in Colorado.", 
	"In memory of all the states I have lived in I wanted to create a bakery.", 
	"Each cupcake on the menu represents a place I once called home."];
        
        for (var i = 0; i < aboutMe.length; i++) {
            $("body").append("<p>" + aboutMe[i] + "</p>");

}
}

function arrayLoop2(){

	var menu = ["<img src='images/menu.png'>"];
        
        for (var i = 0; i < menu.length; i++) {
            $("body").append("<p>" + menu[i] + "</p>");

}

}