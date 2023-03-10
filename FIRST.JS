const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.login-link');
const Registerlink=document.querySelector('.register-link');
const btnPopup=document.querySelector('.btnLogin-popup');



Registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
