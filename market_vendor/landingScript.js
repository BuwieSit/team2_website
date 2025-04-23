const formGroups = document.querySelectorAll('.form-grp');

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

// inputEl.addEventListener("focus", () => {
    
//     labelEl.style.transform = "translateX(0%)";
// });

// inputEl.addEventListener("blur", () => {
//     labelEl.style.transform = "translateX(30%)";
// });



