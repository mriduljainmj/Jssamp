var colors = generateRandomColors(numsquare);
var numsquare = 6;
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var result = document.getElementById("result");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easybtn");
var hard = document.querySelector("#hardbtn");
colorDisplay.textContent = pickedColor;

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsquare = 3;
	colors = generateRandomColors(numsquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
		squares[i].style.display = "none";
	}
}
});

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numsquare = 6;
	colors = generateRandomColors(numsquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
}
});


reset.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
	h1.style.backgroundColor = "steelblue" ;
}
});
colors = generateRandomColors(numsquare);
for(var i =0;i<squares.length;i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){

			result.textContent = "Correct";
			reset.textContent = "Play Again"
			changeColors(clickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			result.textContent = "Try Again";
		}
	});
} 


function changeColors(color){

	for(var i =0;i<colors.length;i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr =[];

	for(var i =0;i<num;i++){
		arr.push(randomcolor());
	}

	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256); 

	return "rgb(" + r + ", " + g + ", " + b + ")";
}