const addPetButton = document.getElementById("add-pet");
addPetButton.addEventListener("click", function() {
    window.location.href = "pet-details-create.html";
});

const shelterProfileForm = document.getElementById('shelter-profile-form');
shelterProfileForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!shelterProfileForm.checkValidity()) {
        return;
    }
        window.location.href = 'shelter-profile.html';
});

const profileImageInput = document.getElementById('profile-image');
const profileImage = document.querySelector('.profile-img img');
profileImageInput.addEventListener('change', (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = (event) => {
        profileImage.src = event.target.result;
        };
        reader.readAsDataURL(selectedImage);
    }
});