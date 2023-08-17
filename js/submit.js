var username = document.getElementById('username');
var email = document.getElementById('email');
var submit = document.getElementById('send');
var messages = document.getElementById('formMsg')

submit.addEventListener('click', (e) => {
    
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(xhr.responseText);
        } catch (e) {
            console.error('Could not parse JSON!');
        }

        if (responseObject) {
            handleResponse(responseObject);
        }
    };

    const xhrData = `username=${username.value}&email=${email.value}`;

    xhr.open('POST', '/php/submit.php');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(xhrData);
});

function handleResponse (responseObject) {
    if (responseObject.ok) {
        location.href = '/html/submit.html';
    } else {
        while (messages.firstChild) {
            messages.removeChild(messages.firstChild);
        }

        responseObject.messages.forEach((message) => {
            const li = document.createElement('li');
            li.textContent = message;
            messages.appendChild(li);
        });

        messages.style.display = "block";
    }
}
