// seeker and shelter toggle 
let seeker = document.querySelector('#seeker');
let shelter = document.querySelector('#shelter');
var x = 'seeker';

seeker.addEventListener('click', () => {
    seeker.classList.add('active');
    shelter.classList.remove('active');
    x = 'seeker';
});
shelter.addEventListener('click', () => {
    seeker.classList.remove('active');
    shelter.classList.add('active');
    x = 'shelter';
});

// login form validation
const loginForm = document.getElementById('login__form');
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!loginForm.checkValidity()) {
        return;
    }

    // Check username and password validity
    const password = document.getElementById("login_pwd");
    if (password.value == 'abc') {
        const loginError = document.getElementById('login-error');
        loginError.classList.add("display");
        return;
    }

    if (x == 'seeker') {
        window.location.href = 'seeker/home.html';
    } else {
        window.location.href = 'shelter/home.html';
    }
});