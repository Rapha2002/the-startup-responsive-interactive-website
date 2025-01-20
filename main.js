
let showButton = document.querySelector('.btn');
let containerText = document.querySelector('.info');

showButton.addEventListener('click', function() {
    containerText.classList.toggle('show-info');
});