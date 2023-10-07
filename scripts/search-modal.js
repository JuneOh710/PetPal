const searchButton = document.getElementById('search-button');
const searchModal = document.getElementById('search-modal');
const searchForm = document.getElementById('search__form');
var path = window.location.pathname;
var identity = path.split("/").reverse()[1];

// Open search modal when click on search icon
// Keep search modal open when entering the search form
document.addEventListener('click', (event) => {
    if (
        !searchButton.contains(event.target) &&
        !searchForm.contains(event.target)
    ) {
        searchModal.classList.add('hidden');
    } else {
        searchModal.classList.remove('hidden');
    }
})

// Close when click ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        searchModal.classList.add('hidden');
    }
});

// Choose where to navigate after search
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();    
    var search = document.getElementById("search__text");
    localStorage.setItem("search__text", search);
    
    if (identity == 'seeker') {
        window.location.href = 'seeker/search.html';
    } else if (identity == 'shelter') {
        window.location.href = 'shelter/search.html';
    } else {
        window.location.href = 'login.html';
    }
})