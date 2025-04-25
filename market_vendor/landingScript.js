
const reg_form = document.querySelector('.register-up');
const login_form = document.querySelector('.login-up');

const register = e => {
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let data = JSON.parse(localStorage.setItem('data')) || [];

    let exist = data.length && 
        JSON.parse(localStorage.getItem('data')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.username.toLowerCase() == username.toLowerCase()
        );

    if(!exist) {
        data.push({ email, username, password});
        localStorage.setItem('data', JSON.stringify(data));
        document.querySelector('form').reset();
        document.getElementById('email').focus();
        alert('Account created');

    }
    else {
        alert('Account exists');
    }

    e.preventDefault();

}

const login = e => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let data = JSON.parse(localStorage.setItem('data')) || [];

    let exist = data.length && 
    JSON.parse(localStorage.getItem('data')).some(data => 
        data.email.toLowerCase() == email &&
        data.password.toLowerCase() == password
    );

    if(!exist) {
        alert('Incorrect login credentials');
    }
    else {
        window.location.href = '../web1_market.html';
    }
    
    e.preventDefault();
}








const formGroups = document.querySelectorAll('.form-grp');
const sign1 = document.querySelector('.bs1');
const sign2 = document.querySelector('.bs2');



const logreg = document.querySelectorAll('.popup-group');
const blackLayer = document.querySelector('.black-layer');

sign1.addEventListener('click', () => {
    reg_form.classList.remove('popUp');
    login_form.classList.add('popUp');
    blackLayer.style.visibility = "visible";

})

sign2.addEventListener('click', () => {
    login_form.classList.remove('popUp');
    reg_form.classList.add('popUp');
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
        reg_form.classList.remove('popUp');
        login_form.classList.remove('popUp');
        blackLayer.style.visibility = "hidden";
    })
});



