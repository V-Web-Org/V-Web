document.addEventListener('DOMContentLoaded', function() {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}); 