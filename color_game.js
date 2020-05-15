var colors = generateRandomColors(6);

var numSquares = 6;
var square = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedcolor;
	//change colors of squares
	for (var i=0;i<square.length; i++){
		if(colors[i]){
		square[i].style.backgroundColor = colors[i];
	}
		else{
			square[i].style.display = "none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedcolor;
	//change colors of squares
	for (var i=0;i<square.length; i++){
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedcolor= pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedcolor;
	this.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i=0;i<square.length; i++){
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent= pickedcolor;

for(var i=0; i<square.length; i++){
	square[i].style.backgroundColor = colors[i];

	square[i].addEventListener("click", function(){
		var clickedColor= this.style.backgroundColor;

		if(clickedColor ===pickedcolor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColor(color){
	//loop through all squares
	for(var i=0;i<square.length; i++){
		//change each color to match given color
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() *colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i=0; i<num; i++){
		//get random color and push into array
		arr.push(randomColors());
	} 
	//return that array
	return arr;

}

function randomColors(){
	// pick a red from 0-255
	var r= Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g= Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b= Math.floor(Math.random() * 256);
	// return "rgb(r, b, g)"
	return "rgb(" + r + ", " + g + ", " + b + ")";

}