
const reg_form = document.querySelector('.register-up');
const login_form = document.querySelector('.login-up');
let data = JSON.parse(localStorage.getItem('data')) || [];

const register = e => {
    e.preventDefault();
    
    let email = document.getElementById('reg-email').value.trim();
    let username = document.getElementById('reg-username').value.trim();
    let password = document.getElementById('reg-password').value;
  
    if (!email || !username || !password) {
        alert('Please fill in all fields');
        return;
    }

    let exist = data.length && 
        JSON.parse(localStorage.getItem('data')).some(data =>
            data.email.toLowerCase() == email.toLowerCase() &&
            data.username.toLowerCase() == username.toLowerCase()
        );

    if(!exist) {
        data.push({ email, username, password});
        localStorage.setItem('data', JSON.stringify(data));

        reg_form.querySelector('form').reset();
        document.getElementById('reg-email').focus();
        alert('Account created');

    }
    else {
        alert('Account exists');
    }



}

const login = e => {
    
    e.preventDefault();

    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value;
    let data = JSON.parse(localStorage.getItem('data')) || [];

    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    let exist = data.length && 
    JSON.parse(localStorage.getItem('data')).some(data => 
        data.username.toLowerCase() == username.toLowerCase() &&
        data.password == password
    );

    if(!exist) {
        alert('Incorrect login credentials');
    }
    else {
        localStorage.setItem('loggedInUsername', username);
        
        window.location.href = '../market_vendor/web1_market.html';
    }

}

reg_form.querySelector('form').addEventListener('submit', register);
login_form.querySelector('form').addEventListener('submit', login);





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

const images = document.querySelectorAll('.products img'); 
const info = document.querySelector('.product-info');
const infoTxt = document.getElementById('info-text');

images.forEach(image => {
    image.addEventListener('click', () => {
        const type = image.id;
        
        infoTxt.innerHTML = type === 'fruit' ? "Fruits"
                          : type === 'veggies' ? "Vegetables"
                          : type === 'meat' ? "Meat"
                          : "Unknown";

   
        info.classList.add('show');

        setTimeout(() => {
            info.classList.remove('show');
        }, 1000);
    });
});

const eye_reg = document.getElementById('eye-reg');
const eye_login = document.getElementById('eye-login');
const LogPassType = document.getElementById('password');
const RegPassType = document.getElementById('reg-password');
const showPass = document.getElementById('showPassword');
const logShow = document.getElementById('logShowPassword');
showPass.value = RegPassType.value;
RegPassType.value = showPass.value;

eye_reg.addEventListener('mousedown', () => {
        eye_reg.style.filter = "invert(1)";
        showPass.style.opacity = "1";
        showPass.style.zIndex = "10";
        showPass.value = RegPassType.value;
        RegPassType.style.opacity = "0";
   
});

eye_reg.addEventListener('mouseup', () => {
    eye_reg.style.filter = "invert(0)";
        showPass.style.opacity = "0";
        showPass.style.zIndex = "3";
        RegPassType.value = showPass.value;
        RegPassType.style.opacity = "1";
        RegPassType.style.zIndex = "10";
});

eye_login.addEventListener('mousedown', () => {

    eye_login.style.filter = "invert(1)";
    logShow.style.opacity = "1";
    logShow.style.zIndex = "10";
    logShow.value = LogPassType.value;
    LogPassType.style.opacity = "0";
  
});

eye_login.addEventListener('mouseup', () => {

    eye_login.style.filter = "invert(0)";
    logShow.style.opacity = "0";
    logShow.style.zIndex = "3";
    LogPassType.value = logShow.value;
    LogPassType.style.opacity = "1";
  
});