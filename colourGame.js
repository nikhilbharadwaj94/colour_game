var numSquares = 6;
var head1 = document.querySelector("h1");
var coloursMatrix = randomColourGenerator(numSquares);
console.log("JS is loaded");
var index = Math.floor(Math.random() * numSquares);
var pickedColour = coloursMatrix[index];
var squares = document.querySelectorAll(".colourChoice");


//i have placed display color in a span tag so that i can change only how much is required
var displayColor = document.getElementById("displayColour");
var msg = document.getElementById("colorMsg");
var newColourButton = document.getElementById("newColourButton");
var easyMode = document.getElementById("easyMode");
var hardMode = document.getElementById("hardMode");

	//now we will be handling events for easy mode
	easyMode.addEventListener("click", function(){
		numSquares = 3;
		newColourButton.textContent = "New colours";
		easyMode.classList.add("selected");
		hardMode.classList.remove("selected");
		coloursMatrix =randomColourGenerator(numSquares);
		index = Math.floor(Math.random() * numSquares);
		pickedColour = coloursMatrix[index];
		console.log(coloursMatrix);
		displayColor.textContent = pickedColour;
		squares[3].style.display = "none";
		squares[4].style.display = "none";
		squares[5].style.display = "none";
		for(var i = 0; i < squares.length; i++)
		{
			
		//this for loop is to set the different colours to the different squares
			squares[i].style.backgroundColor = coloursMatrix[i];
		
		} 

		
	});

	//now we will be handling events for hard mode
	hardMode.addEventListener("click", function(){
		numSquares = 6;
		newColourButton.textContent = "New colours";
		hardMode.classList.add("selected");
		easyMode.classList.remove("selected");
		coloursMatrix =randomColourGenerator(numSquares);
		index = Math.floor(Math.random() * numSquares);
		pickedColour = coloursMatrix[index];
		console.log(coloursMatrix);
		displayColor.textContent = pickedColour;
		for(var i = 0; i < squares.length; i++)
		{
			
		//this for loop is to set the different colours to the different squares
			squares[i].style.backgroundColor = coloursMatrix[i];
			squares[i].style.display = "block";
		} 

	});


		
		console.log(pickedColour);
		displayColor.textContent = pickedColour;

		
		for(var i = 0; i < squares.length; i++){
			
		//this for loop is to set the different colours to the different squares
			squares[i].style.backgroundColor = coloursMatrix[i];

			//this Event listener is to detect clicks and then compare if the guess is right or wrong
			squares[i].addEventListener("click",function(){

				//since we use "this", clickedColour will have the style background.
				var clickedColour =this.style.backgroundColor;

				//if is used to check if the guess is right
				if(clickedColour === pickedColour)
				{
					msg.textContent = "correct guess";
					newColourButton.textContent = "Play again?";
					changeAllColours(pickedColour);
				}
				else{
					this.style.backgroundColor="#232323";
					msg.textContent = "try again!!";
				}

			});
		}


//this function is to change all the queare colours to the picked colour once we make the proper guess
function changeAllColours(color)
{
		for( var i=0; i< squares.length; i++)
		{
			squares[i].style.backgroundColor = color;
		}
		head1.style.backgroundColor = color;

}

//this function is to generate 6 random colours by individually generating R G B values for individual colours.
function randomColourGenerator(no){

	//first create an array variable which will hold the different R G B values
		var ranArray = [];
		console.log("generating new colours");
	//generate random colours and store them in the array
		for (var i = 0; i < no; i++) {
			//console.log("generating r");
			var r= Math.floor(Math.random() * 256);
			//console.log("generating g");
			var g= Math.floor(Math.random() * 256);
			//console.log("generating b");
			var b= Math.floor(Math.random() * 256);

			ranArray[i]="rgb(" + r + ", " +g + ", " + b + ")";
			//console.log("inside randomColourGenerator for loop");
		}

	//return the array
		console.log("returning generated colours");
		return ranArray;
		

}
newColourButton.addEventListener("click",function(){

	newColourButton.textContent = "New colour";
	head1.style.backgroundColor = "steelblue";
	coloursMatrix = randomColourGenerator(numSquares);
	index = Math.floor(Math.random() * numSquares);	
	pickedColour = coloursMatrix[index];
	displayColor.textContent = pickedColour;
	msg.textContent = "";
	for(var i = 0; i < squares.length; i++){
			
		//this for loop is to set the different colours to the different squares
			squares[i].style.backgroundColor = coloursMatrix[i];
	}


});