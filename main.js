document.getElementById('speakButton').addEventListener('click', () => {
    
    const text = document.getElementById('inputText').value;
    
    if (text !== '') {
        
        const speech = new SpeechSynthesisUtterance(text);
        
        
        speech.lang = 'so-SO'; 
        speech.rate = 1; 
        speech.pitch = 1; 
        

        window.speechSynthesis.speak(speech);
    } else {
        alert('Fadlan wax qor si aad u dhageesato !');
    }
});
