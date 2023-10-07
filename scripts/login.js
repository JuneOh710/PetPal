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

    if (x == 'seeker') {
        window.location.href = 'seeker/home.html';
    } else {
        window.location.href = 'shelter/home.html';
    }
})

// signup form validation
const signupForm = document.getElementById('signup__form');

signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username");
    
    if (username.value == 'abc') {
        const signupError = document.getElementById('signup-error');
        signupError.classList.add("display");
        return;
    }
    
    if (!signupForm.checkValidity()) {
        return;
    }

    window.location.href = 'signup-success.html';
})