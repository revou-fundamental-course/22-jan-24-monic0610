
// Auto Slide 
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;

    let slidesname = document.getElementsByClassName("slides");

    for (i = 0; i < slidesname.length; i++) {
        slidesname[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slidesname.length) {
        slideIndex = 1
    }

    slidesname[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}


// Form Validation

const form = document.getElementById('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const interested = document.getElementById('interested');

const button = document.getElementById('send-button');

button.addEventListener('click', function() {
    let inputName = fullname.value;
    let inputEmail = email.value;
    let inputInterested = interested.value;

    let errorText;

    if(inputName===''){
        errorText = "Nama belum diisi";
    }else{
        errorText ='';
    }
    document.getElementById('error-name').innerHTML = errorText;

    if(inputEmail === ''){
        errorText = "Email belum diisi";
    }
    else{
        errorText ='';
    }
    document.getElementById('error-email').innerHTML = errorText;


    if(inputInterested === ''){
        errorText = "Interested belum dipilih";
    }else{
        errorText ='';
    }
    document.getElementById('error-interested').innerHTML = errorText;

});
