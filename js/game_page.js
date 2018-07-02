let userNameInStorage = localStorage.getItem('name');

let currentUser = new User();
currentUser.name = userNameInStorage;

let userHelloMessage = document.getElementById('user_hello_message');
userHelloMessage.innerHTML = 'Привет, ' + currentUser.name;



let currentMonster = new Monster();
currentMonster.name = 'Лизун';
currentMonster.picture = '../monstr.png';

let monsterHelloMessage = document.getElementById('monster_hello_message');
monsterHelloMessage.innerHTML = 'Привет, ' + currentMonster.name;

let monsterWrapper = document.getElementById('monster_wrapper');
monsterWrapper.innerHTML = '<img src="' + currentMonster.picture + '">';