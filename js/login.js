let btnLogin = document.getElementById('button_login');


function goToGamePage() {

    let userName = document.getElementById('user_name').value;
    let userPassw = document.getElementById('user_password').value;
        
    if (userName !== '' && userPassw !== '') {
        localStorage.setItem('name', userName);
        
        window.location.assign('game_page.html');
    } else {   
        alert('Your name field and password field cannot be empty!')
    }  
} 

btnLogin.addEventListener('click', goToGamePage);
