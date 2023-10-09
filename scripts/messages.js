let inbox = document.querySelector('#inbox');
let sent = document.querySelector('#sent');

inbox.addEventListener('click', () => {
    inbox.classList.add('active');
    sent.classList.remove('active');
});
sent.addEventListener('click', () => {
    inbox.classList.remove('active');
    sent.classList.add('active');
});
