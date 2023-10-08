const resultsUnsort = document.querySelector('.unsorted');
const resultsSort = document.querySelector('.sorted');
const resultsFilter = document.querySelector('.filtered');
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');
    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');

            if (selected.innerText == "Date Uploaded") {
                resultsUnsort.classList.add('hidden');
                resultsSort.classList.remove('hidden');
                resultsFilter.classList.add('hidden');
            } else {
                resultsUnsort.classList.remove('hidden');
                resultsSort.classList.add('hidden');
                resultsFilter.classList.add('hidden');
            }
        });
    });
});

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => {
    const select = filter.querySelector('.multiselect')
    const caret = filter.querySelector('.caret');
    const menu = filter.querySelector('.filter-options');

    select.addEventListener('click', () => {
        const isExpanded = menu.classList.contains('hidden');    
        if (isExpanded) {
            menu.classList.remove('hidden');
            caret.classList.toggle('caret-rotate');
        } else {
            menu.classList.add('hidden');
            caret.classList.toggle('caret-rotate');
        }
    });
});

// Set filter menu to toggle-able if screensize is tablet / phone
const mql = window.matchMedia("(max-width: 52rem)");
const filterToggle = document.getElementById("filter__toggle");
const filterMenu = document.getElementById("filter__menu");

function toggleFilterDropdown() {
    filterMenu.classList.add('hidden');
    filterToggle.addEventListener('click', () => {
        const isExpanded = filterMenu.classList.contains('hidden');    
        if (isExpanded) {
            filterMenu.classList.remove('hidden');
        } else {
            filterMenu.classList.add('hidden');
        }
    });
}

// Initial detection
if (mql.matches) {
    toggleFilterDropdown();
} else {
    filterMenu.classList.remove('hidden');
}

// Detect changes
mql.onchange = (e) => {
    if (e.matches) {
        toggleFilterDropdown();
    } else {
        filterMenu.classList.remove('hidden');
    }
}

// show filtered results if filter clicked
const filterSelect = document.getElementById('color-black');

filterSelect.addEventListener('change', () => {
    if (filterSelect.checked) {
        resultsUnsort.classList.add('hidden');
        resultsSort.classList.add('hidden');
        resultsFilter.classList.remove('hidden');
    } else {
        resultsUnsort.classList.remove('hidden');
        resultsSort.classList.add('hidden');
        resultsFilter.classList.add('hidden');
    }
});

