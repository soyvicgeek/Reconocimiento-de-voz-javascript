let rec;
    if (!("webkitSpeechRecognition" in window)) {
    	alert("Sorry, you can't use the service.");
    } else {
    	rec = new webkitSpeechRecognition();
    	rec.lang = "es-MX";
    	rec.continuous = true;
    	rec.interim = true;
    	rec.addEventListener("result",iniciar);
    }
function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
         document.getElementById('text').innerHTML = event.results[i][0].transcript;
	}
}


rec.start();