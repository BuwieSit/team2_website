const formGroups = document.querySelectorAll('.form-grp');
const sign1 = document.querySelector('.bs1');
const sign2 = document.querySelector('.bs2');
const login = document.querySelector('.login-up');
const register = document.querySelector('.register-up');

const logreg = document.querySelectorAll('.popup-group');
const blackLayer = document.querySelector('.black-layer');

sign1.addEventListener('click', () => {
    register.classList.remove('popUp');
    login.classList.add('popUp');
    blackLayer.style.visibility = "visible";

})

sign2.addEventListener('click', () => {
    login.classList.remove('popUp');
    register.classList.add('popUp');
    blackLayer.style.visibility = "visible";

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

logreg.forEach(logRegs => {
    const close = logRegs.querySelector('.closeBtn');

    close.addEventListener('click', () => {
        register.classList.remove('popUp');
        login.classList.remove('popUp');
        blackLayer.style.visibility = "hidden";
    })
});



