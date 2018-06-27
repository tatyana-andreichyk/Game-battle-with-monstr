let helloMessage = document.getElementById('hello_message');

let name = localStorage.getItem('name');


helloMessage.innerHTML = 'Привет, ' + name;
