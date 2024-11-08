document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('.main-nav');
    nav.insertBefore(menuToggle, nav.firstChild);

    menuToggle.addEventListener('click', function() {
        const navGroups = document.querySelectorAll('.nav-group');
        navGroups.forEach(group => {
            group.classList.toggle('active');
        });
    });
}); 