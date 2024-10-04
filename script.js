const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');
const displayNav = document.getElementById('displayNav');


openNav.addEventListener('click', () => {
    displayNav.classList.toggle('active');
})

closeNav.addEventListener('click', function() {
    displayNav.classList.toggle('active');
    
})