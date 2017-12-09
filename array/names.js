function arrayLoop(){

	var names = ["sarah", "brad", "charlie", "kris", "alexander", "matthew", "lilly", "emily", "leo", "blake", "mary", "kate"];
        
        for (var i = 0; i < names.length; i++) {
            $("body").append("<p>" + names[i] + "</p>");
}
}