var wins=0;
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

	if (newArray.length===0) {
		for (var i=0; i<info["band"+wins].length;i++) {
			newArray.push("-");
		}
	}
	console.log(newArray);
	for (var i=0; i<info["band"+wins].length;i++){
		if (info["band"+wins][i].indexOf(userChoice)!=-1) {
			newArray[i]=userChoice;
			info["band"+wins][i]=".";
			console.log(newArray);
			document.querySelector("#guessing").innerHTML=newArray;
			counter=counter+1;  //If this counter is 0, it will reduce the remaining guesses
			miniPoint++; //This will be used later to compare with the lenght and obtain a win
		}
	}
	if (counter===0) {
			if (guessed.search(userChoice)==-1) {
			guesses--;
			guessed=guessed+userChoice+", ";
		}
	}
	if (miniPoint===info["band"+wins].length) {
		wins++;
		guesses=12;
		miniPoint=0;
		guessed="";
		newArray=[];
		info["band"+wins];
	}
	if (guesses===0) {
		looses++;
		guesses=12;
		console.log(looses);
	}
		document.querySelector("#guessing").innerHTML=newArray;
		document.querySelector("#guessed").innerHTML=guessed;
		document.querySelector("#winsNumber").innerHTML=wins;
		document.querySelector("#gLeft").innerHTML=guesses;

}

