const mobileBtn = document.querySelector('#mobilebtn');
const mobileMenu = document.querySelector('#mobilemenu');
mobileBtn.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('hidden');
})