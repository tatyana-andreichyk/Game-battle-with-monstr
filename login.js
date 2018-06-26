let btnLogin = document.getElementById('button_login');


function goToGamePage() {

    let userName = document.getElementById('user_name').value;
        
    if (userName !== '') {
        localStorage.setItem('name', userName);
        
        window.location.assign('game_page.html');
    } else {   
        alert('Your name field cannot be empty!')
    }  
} 

btnLogin.addEventListener('click', goToGamePage);
