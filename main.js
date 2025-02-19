document.getElementById('speakButton').addEventListener('click', () => {
    // Hel qoraalka
    const text = document.getElementById('inputText').value;
    
    if (text !== '') {
        // U isticmaal Web Speech API SpeechSynthesis
        const speech = new SpeechSynthesisUtterance(text);
        
        // U dooro luqada iyo codka
        speech.lang = 'so-SO'; // Tani waxay tahay luqadda Ingiriisiga, waxaad ka beddeli kartaa si ay u noqoto luqad kale
        speech.rate = 1; // Xawaaraha hadalka (0.1 ilaa 10)
        speech.pitch = 1; // Codka sare iyo hoose (0 - 2)
        
        // Orod codka
        window.speechSynthesis.speak(speech);
    } else {
        alert('Fadlan wax qor si aad u dhageesato !');
    }
});
