const htmlElements = {};
htmlElements.button = document.querySelector('.button');
htmlElements.button.addEventListener('click', onButtonClicked);


function onButtonClicked() {
    const message = prompt('password');
if (message === 'mypassword') {
    alert('ok');}
else return onButtonClicked();
}


