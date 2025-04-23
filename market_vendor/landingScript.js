
    const labelEl = document.querySelector(".input-label");
    const inputEl = document.querySelector(".form-input");
    
    
    
    inputEl.addEventListener("focus", () => {
        labelEl.style.textAlign = "center";
     
    });
    inputEl.addEventListener("blur", () => {
        labelEl.style.textAlign = "left";
    });

    function alignEffect() {
        
        labelEl.style.textAlign = "center";
        labelEl.style.backgroundColor = "red";
        
    }



