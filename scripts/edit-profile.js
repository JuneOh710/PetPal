const profileImageInput = document.getElementById('profile-image');
const profileImage = document.querySelector('.profile-img img');

profileImageInput.addEventListener('change', (e) => {
    const selectedImage = e.target.files[0]; // Get the selected file
    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = (event) => {
        profileImage.src = event.target.result;
        };
        reader.readAsDataURL(selectedImage);
    }
});

const profileForm = document.getElementById('profile-form');
console.log(profileForm);
profileForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!profileForm.checkValidity()) {
        return;
    }
        window.location.href = 'profile.html';
});