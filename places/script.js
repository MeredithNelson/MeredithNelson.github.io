function arrayLoop(){

	var place = ["<img src='images/beach.jpg'>"]
        
        for (var i = 0; i < place.length; i++) {
            $("body").append("<p>" + place[i] + "</p>");

}
}


