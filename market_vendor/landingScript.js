const formGroups = document.querySelectorAll('.form-grp');
const sign1 = document.querySelector('.bs1');
const sign2 = document.querySelector('.bs2');
const login = document.querySelector('.login-up');
const register = document.querySelector('.register-up');


sign1.addEventListener('click', () => {
    register.classList.remove('popUp');
    login.classList.add('popUp');

})

sign2.addEventListener('click', () => {
    login.classList.remove('popUp');
    register.classList.add('popUp');
    

})

formGroups.forEach(group => {
    const inputEl = group.querySelector('.form-input');
    const labelEl = group.querySelector('.input-label');
    inputEl.addEventListener('focus', () => {
        
        labelEl.style.transform = "translateX(30%)";
       
    });

    inputEl.addEventListener('blur', () => {
        labelEl.style.transform = "translateX(0%)";
    });


});


