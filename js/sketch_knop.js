const lang = navigator.language || 'nl-NL' //Stel taal waarop hij moet focusen in
const myRec = new p5.SpeechRec(lang) // nieuwe P5.SpeechRec object aanmaken
let button;

function setup()
{
	// Doet de graphische dingen:
	createCanvas(400, 400)
	background(255, 255, 255)
	fill(0, 0, 0, 255)
	
	// Geef instructies hoe het eruit moet komen te zien:
	textSize(20)
	textAlign(CENTER)
	text("zeg iets", width/2, height/2)
	button = createButton('click me')
	button.position(100, 400)
	button.style('font-size', '60px')
	myRec.onResult = showResult

	//Functie die het recorden van je stem start
	function startRec(){
		myRec.start()
	}

	//Wanneer de knop wordt gedrukt begint hij met recorden
	button.mousePressed(startRec)
}

//Functie laat de text zien die word besproken
function showResult()
{
	if(myRec.resultValue==true) {
		background(192, 255, 192) //Achtergrond wordt zoals een kladpapier geel
		text(myRec.resultString, width/2, height/2) //Veranderd de text naar wat de microfoon ziet
		console.log(myRec.resultString) //Je ziet het resultaat nog een keer in de console
	}
}

//Laad dit bestand zodra de window opstart
window.setup = setup

