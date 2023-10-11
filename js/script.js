function runTypingEffect(){
    const textName = 'I am Efi Tsakiridou'
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(textName, typingElement, typingDelay)

}

function typeText(textName, typingElement, delay){
    for(let i =  0; i < textName.length; i++){
        setTimeout(() => {
            typingElement.textContent += textName.charAt(i);
         }, delay * i)
    }

}

document.addEventListener('DOMContentLoaded', runTypingEffect)