var colortring = "yellow, blue, red, green, white, black, silver, brown, gold, purple, orange, indigo, magenta"

console.log(colorstring)

var colorArray = [1, 2, 3, 5, 5, null, true]

console.log(colorArray)
console.log(colorArray.toString() )

var nameArray = colorstring.split(",")
console.log(colorArray)


var container = document.querySelector(".output ul")

// for(var i = 0; i < nameArray.length; i++) {
// 	console.log(nameArray[i])
// }

colorArray.forEach(function(theElement, itsIndex, theOriginalArray) {
	console.log(theElement + " is in position " + itsIndex)
})


colorArray.forEach(make_a_list);


function make_a_list(el, ix) {
	var listItem = document.createElement("li")

	listItem.textContent = el + ": index " + ix

	container.appendChild(listItem)
}


var color = document.querySelectorAll(".output ul li")
console.log(names)


names.forEach(changecolor)

function changeBackground(el) {
	el.style.changeBackground = "rgba(100,20,200," + Math.random() + ")";
}


