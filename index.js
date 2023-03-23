const modalEl = document.querySelector('#modal');
const closeBtn = document.querySelector('#modal-close-btn');
const formEl = document.querySelector('#consent-form');

setTimeout(function(){
    modalEl.style.display = 'inline';
}, 1500);

closeBtn.addEventListener('click', function(){
    modalEl.style.display = 'none';
});

formEl.addEventListener('submit',function(e){
    e.preventDefault();
});