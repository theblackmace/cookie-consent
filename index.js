const modalEl = document.querySelector('#modal');
const closeBtn = document.querySelector('#modal-close-btn');
const formEl = document.querySelector('#consent-form');
const modalTxt = document.querySelector('#modal-text');
const modalIn = document.querySelector('#modal-inner');
const declineBtn = document.querySelector('#decline-btn');

setTimeout(function(){
    modalEl.style.display = 'inline';
}, 1500);

closeBtn.addEventListener('click', function(){
    modalEl.style.display = 'none';
});

formEl.addEventListener('submit',function(e){
    e.preventDefault();
    modalTxt.innerHTML = 
    `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
    </div>`;
    
    const cookieFormData = new FormData(formEl);
    console.log(cookieFormData);

    setTimeout(function(){
        const uploadText = document.querySelector('#uploadText');
        uploadText.textContent = `Making the sale...`;
        setTimeout(function(){
            modalIn.innerHTML = 
            `<h2>Thanks <span class="modal-display-name">${cookieFormData.get('name-el')}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>`;
            
            closeBtn.disabled = false;
        },3000);
    }, 1500);
});

declineBtn.addEventListener('mouseenter',function(){
    console.log("decline-hovered");
    document.querySelector('#modal-choice-btns').classList.toggle('reverse');
});