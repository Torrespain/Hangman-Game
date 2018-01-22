var wins=0; //I will use the variable wins to also iterate between the different bands
var miniPoint=0;
var looses=0;
var userChoice;
var guessed="";
var	newArray=[];
var guesses=12;
var counter=0;

var info={

	band0:[
		"T","H","E"," ","B","E","A","T","L","E","S"
	],
	band1:[
		"R","A","D","I","O","H","E","A","D"
	],
	band2:[
		"L","I","N","K","I","N"," ","P","A","R","K"
	],
	band3:[
		"M","O","D","E","S","T"," ","M","O","U","S","E"
	]
}

document.onkeyup= function(event){
	userChoice=((event.key).toString()).toUpperCase();
	console.log(info["band"+wins]);
	counter=0;

	if (newArray.length===0) {  		//This part will be used to start the game by determining if the variable is empty
		for (var i=0; i<info["band"+wins].length; i++) {		 //I use the wins to iterate between the different bands
			newArray.push("-"); 		//I create a new array with the similar length of the selected band
		}
	}
	console.log(newArray);
	for (var i=0; i<info["band"+wins].length;i++){ //I use the loop only for the right words!! This is important to avoid the program repeats everything if the letter is not correct
		if (info["band"+wins][i].indexOf(userChoice)!=-1) { //Activate if the letter selected is inside the array
			newArray[i]=userChoice;				//Then that space (i) will be replaced by the letter
			info["band"+wins][i]=".";			//I replace the original letter with a "." so it does not find it if the same letter is pressed again
			console.log(newArray);
			document.querySelector("#guessing").innerHTML=newArray;
			counter=counter+1;  		//If this counter is 0, it will reduce the remaining guesses in the next "if"
			miniPoint++;					 //This will be used later to compare with the lenght and obtain a win
		}
	}
	if (counter===0) {		//If the letter was not previously found do this
			if (guessed.search(userChoice)==-1) {		//If the pressed key was not previously pressed
			guesses--;
			guessed=guessed+userChoice+", "; 		//I create a string adding the letter, a coma and a space
		}
	}
	if (miniPoint===info["band"+wins].length) {  //If the miniPoints are = to the length of the band it means we completed it and we wan
		wins++;
		guesses=12;
		miniPoint=0;	//We have to reset everything
		guessed="";
		newArray=[]; //We have to reset the newArray to create a new one in the first part of the program
		
	}
	if (guesses===0) {		//Similar to the wins but increasing the looses
		looses++;
		guesses=12;
		miniPoint=0;
		guessed="";
		newArray=[];
	
		
	}
		document.querySelector("#guessing").innerHTML=newArray;		//Sending everything back to the HTML
		document.querySelector("#guessed").innerHTML=guessed;
		document.querySelector("#winsNumber").innerHTML=wins;
		document.querySelector("#loosesNumber").innerHTML=looses;
		document.querySelector("#gLeft").innerHTML=guesses;

}

