function setup(){
	console.log("Start")
	const lang = navigator.language || 'nl-NL' //Stel taal waarop hij moet focusen in
	const myRec = new p5.SpeechRec(lang, gotSpeech) // nieuwe P5.SpeechRec object aanmaken

	// Doet de graphische dingen:
	createCanvas(400, 400)
	background(255, 255, 255)
	fill(0, 0, 0, 255)

	// Geef instructies hoe het eruit moet komen te zien:
	textSize(20)
	textAlign(CENTER)
	text("Begin de zin met 'Oké Conny'", width / 2, height / 2)
	myRec.onResult = gotSpeech

	let continuous = true //Bepaal hier of het voor altijd blijft luisteren, nu stopt hij met recorden als je eventjes still bent
	let interin = false //Bepaal hier of er een pauze moet zijn na het praten, of dat hij elk woord gelijk moet opschrijven, wel minder accuraat als je het true is
	myRec.start(continuous, interin)

	//Functie laat de text zien die word besproken
	function gotSpeech(){
		console.log(myRec) //console waar je alles kunt zien dat bij variable hoort, zoals accuraatheid en tekst
		let recorded = myRec.resultString.toLowerCase() //Zet alles wat hij record naar kleine letters

		//Zorgt ervoor dat alles kleine letters wordt, nadat alles kleine letters is zet hij de eerste letter als hoofdletter en achter de zin wordt er een punt gezet
		if (myRec.resultValue == true && recorded.indexOf('oké conny') >= 0) { //Kijkt of zin oke conny bevat voordat het wordt genoteerd
			background(253, 253, 150) //Geel kladpapier kleur als achtergrond

			let result = recorded.replace('oké conny', '') + '.'
			function capitalizeFirstLetter(string) {
				return string.charAt(1).toUpperCase() + string.slice(2);
			}

			text(capitalizeFirstLetter(result), width / 2, height / 2)
			console.log(myRec.resultString)
		}
	}	
}

window.setup = setup