// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener ('DOMContentLoaded', function(){
    var submitButton = document.getElementById ('submit-button');
    var contactpage = document.getElementById ('contact-page');

    submitButton.onclick = function(event) {
        event.preventDefault ();

        var thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = "Thank You for your message";
        thankYouMessage.style.fontSize = "24px";
        contactpage.innerHTML = '';
        contactpage.appendChild  (thankYouMessage);
        
    };
});