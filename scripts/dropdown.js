const notificationButton = document.getElementById('notification-button');
const accountButton = document.getElementById('account-button');
const notificationDropdown = document.getElementById('notification-dropdown');
const accountDropdown = document.getElementById('account-dropdown');

// Toggle notification dropdown
function toggleNotificationDropdown() {
    const isExpanded = notificationDropdown.classList.contains('hidden');
    if (isExpanded) {
        notificationDropdown.classList.remove('hidden');
        notificationButton.style.color = 'var(--color-secondary)';
    } else {
        notificationDropdown.classList.add('hidden');
        notificationButton.style.color = 'var(--color-white)';
    }
}

// Toggle account dropdown
function toggleAccountDropdown() {
    const isExpanded = accountDropdown.classList.contains('hidden');
    if (isExpanded) {
        accountDropdown.classList.remove('hidden');
        accountButton.style.color = 'var(--color-secondary)';
    } else {
        accountDropdown.classList.add('hidden');
        accountButton.style.color = 'var(--color-white)';
    }
}

// Toggle between notification and account
notificationButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleNotificationDropdown();
    accountDropdown.classList.add('hidden');
    accountButton.style.color = 'var(--color-white)';
});

accountButton.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleAccountDropdown();
    notificationDropdown.classList.add('hidden');
    notificationButton.style.color = 'var(--color-white)';
});

// Close when click outside
document.addEventListener('click', (event) => {
    if (
        !notificationButton.contains(event.target) &&
        !notificationDropdown.contains(event.target) &&
        !accountButton.contains(event.target) &&
        !accountDropdown.contains(event.target)
    ) {
        notificationDropdown.classList.add('hidden');
        accountDropdown.classList.add('hidden');
        notificationButton.style.color = 'var(--color-white)';
        accountButton.style.color = 'var(--color-white)';
    }
});

notificationDropdown.addEventListener('click', (event) => {
    event.stopPropagation();
});

accountDropdown.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Close when click ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        notificationDropdown.classList.add('hidden');
        accountDropdown.classList.add('hidden');
        notificationButton.style.color = 'var(--color-white)';
        accountButton.style.color = 'var(--color-white)';
    }
});