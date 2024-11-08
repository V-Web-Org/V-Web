document.addEventListener('DOMContentLoaded', function() {
    // Wait for header to be loaded
    setTimeout(() => {
        initializeSearch();
    }, 100);
});

function initializeSearch() {
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');

    if (searchBar && searchButton) {
        searchBar.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });

        searchButton.addEventListener('click', function() {
            performSearch(searchBar.value);
        });
    }
}

function performSearch(searchTerm) {
    if (!searchTerm.trim()) {
        return;
    }
    
    // You can customize this to your search implementation
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
} 