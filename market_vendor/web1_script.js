
const header = document.querySelector('.head');
const navOptions = document.querySelectorAll('.nav-options');
const linkOpt = document.querySelectorAll('.nav-options a');

const vendorForm = document.getElementById('vendorForm');
let vendorList = document.querySelector('.vList');
const close = document.querySelector('.closeBtn');
const vendorPopup = document.querySelector('.V-popup');
const popHandler = document.querySelectorAll('.vendor');
const vendorDesc = document.querySelector('.vendor-desc');

let good = document.getElementById('good');
let fair = document.getElementById('fair');
let poor = document.getElementById('poor');
let daily_cleaning = document.getElementById('dailyClean');
let waste_disposal = document.getElementById('wasteDispo');
let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];
let landing_data = JSON.parse(localStorage.getItem('data')) || [];

let date = new Date;
let h = date.getHours();
let greet = document.getElementById('greeting');

function getLoggedInUser() {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const loggedInUser = landing_data.find(user => user.username === loggedInUsername);

    if (!loggedInUsername) {
        alert('Please login first')
        window.location.href = 'landingPage.html';
        return;
    }

    if (loggedInUser) {
        console.log("Logged-in user:", loggedInUser);
        return loggedInUser;
    } 
    else {
        console.log("User not found in data.");
        alert('Please login first');
        window.location.href = 'landingPage.html';
    }
}

const user = getLoggedInUser();
if (user) {
    console.log(user.username);  
    console.log(user.email);     
}

    if (h > 0 && h < 5) {
        greet.textContent = 'Good eve,  ' + user.username;
    }
    else if (h >= 5 && h <= 11) {
        greet.textContent = 'Good morning, ' + user.username;
    }
    else if (h == 12) {
        greet.textContent = 'Good noon, '+ user.username;
    }
    else if (h >= 13 && h <= 17) {
        greet.textContent = 'Good afternoon, '+ user.username;
    }
    else if (h >= 18 && h <= 23) {
        greet.textContent = 'Good eve, '+ user.username;
    }

window.addEventListener('scroll', function() {

    if (window.scrollY > 100) {
        header.classList.add('scrolling');
    } else {
        
        header.classList.remove('scrolling');
    }
});

navOptions.forEach(opt => {
    opt.addEventListener('click', () => {
        
        navOptions.forEach(o => o.style.boxShadow = 'none');
        opt.style.boxShadow = '0px 5px 10px black';
    });
});

const signOut = document.getElementById('signout');
const signout_button = document.getElementById('signoutBtn');
const cancel_button = document.getElementById('cancelBtn');
const signout_popup = document.getElementById('signout-pop');

signOut.addEventListener('click', () => {
    
    signout_popup.style.pointerEvents = 'visible';
    signout_popup.style.opacity = '1';
});

signout_button.addEventListener('click', () => {

    localStorage.removeItem('loggedInUsername');
    window.location.href = 'landingPage.html';
});

cancel_button.addEventListener('click', () => {
    
    signout_popup.style.opacity = '0';
    signout_popup.style.pointerEvents = 'none';
});




const vendorDetails = e => {
        e.preventDefault();
    
        let bName = document.getElementById('busName').value.trim();
        let permitNum = document.getElementById('permitNumber').value.trim();
        let prodType = document.getElementById('productType').value;
        let exist = vend_data.length && 
            vend_data.some(v => 
                v.bName.toLowerCase() === bName.toLowerCase() &&
                v.permitNum.toLowerCase() === permitNum.toLowerCase()
            );
    
        if (!exist) {
            vend_data.push({ bName, permitNum, prodType });
            localStorage.setItem('vend_data', JSON.stringify(vend_data));
    
            // Create elements ONLY if new
            let title = document.createElement('p');
            let desc = document.createElement('p');
            let product = document.createElement('p');
            let div = document.createElement('div');
            let vendorList = document.querySelector('.vList');
    
            div.className = 'vendor';
            title.className = 'detail-title';
            desc.className = 'detail-vendor';
            product.className = 'detail-product';
            title.textContent = bName; 
            desc.textContent = permitNum;
    
            div.append(title, desc);
            vendorList.append(div);
    
            vendorForm.reset();
            alert('Submitted!');
        } else {
            alert('Vendor already exists!');
        }
    }


    
function addVendorToPage(bName, permitNum) {

    let title = document.createElement('p');
    let desc = document.createElement('p');
    let div = document.createElement('div');

    div.classList.add('vendor');
    
    title.className = 'detail-title';
    desc.className = 'detail-vendor';

    title.textContent = bName; 
    desc.textContent = permitNum;
    div.append(title, desc);
    vendorList.append(div);
}

function addVendorToPopup(bName, permitNum, prodType) {

    const vendorDesc = document.querySelector('.vendor-desc'); 
    const title = vendorDesc.querySelector('.detail-title'); 
    const desc = vendorDesc.querySelector('.detail-vendor'); 
    const product = vendorDesc.querySelector('.detail-product'); 

    title.textContent = bName;
    desc.textContent = permitNum;
    product.textContent = prodType;

}

window.addEventListener('DOMContentLoaded', () => {
    vend_data.forEach(vendor => {
        addVendorToPage(vendor.bName, vendor.permitNum);
    });
    
    signout_popup.style.opacity = '0';
    signout_popup.style.pointerEvents = 'none';
});


let selectedVendorIndex = null;
vendorList.addEventListener('click', (event) => {
    
    const clickedVendor = event.target.closest('.vendor');
    if (!clickedVendor) return; 

    const vendors = Array.from(vendorList.children);
    selectedVendorIndex = vendors.indexOf(clickedVendor);
    const vendor_index = vend_data[selectedVendorIndex];

    if (vend_data[selectedVendorIndex]) {
        addVendorToPopup(vend_data[selectedVendorIndex].bName, vend_data[selectedVendorIndex].permitNum, vend_data[selectedVendorIndex].prodType);
    }

    if (selectedVendorIndex !== null) {

        document.getElementById('good').checked = false;
        document.getElementById('fair').checked = false;
        document.getElementById('poor').checked = false;
        document.getElementById('dailyClean').checked = false;
        document.getElementById('wasteDispo').checked = false;

        if (vend_data[selectedVendorIndex]) {

            if (vendor_index.sanitary === "Good") good.checked = true;
            if (vendor_index.sanitary === "Fair") fair.checked = true;
            if (vendor_index.sanitary === "Poor") poor.checked = true;

            if (vendor_index.cleanliness && vendor_index.cleanliness.includes('Daily Cleaning')) {
                daily_cleaning.checked = true;
            }
            if (vendor_index.cleanliness && vendor_index.cleanliness.includes('Waste Disposal')) {
                waste_disposal.checked = true;
            }
        }
    }

    
    if (!vendorPopup.classList.contains('vendor-pop')) {
        vendorPopup.classList.add('vendor-pop');
    }

});


close.addEventListener('click', () => {
    vendorPopup.classList.remove('vendor-pop');
});

// SANITARY AND HYGIENE UPDATE HANDLER
const popupForm = document.querySelector('.popup-form');

const vendorHygiene = e => {
    e.preventDefault();


    if (selectedVendorIndex !== null && vend_data[selectedVendorIndex]) {

        vend_data[selectedVendorIndex].sanitary = 
            good.checked ? good.value :
            fair.checked ? fair.value :
            poor.checked ? poor.value : "";

        vend_data[selectedVendorIndex].cleanliness = [];

        if (daily_cleaning.checked) {
            vend_data[selectedVendorIndex].cleanliness.push(daily_cleaning.value);
        }
        if (waste_disposal.checked) {
            vend_data[selectedVendorIndex].cleanliness.push(waste_disposal.value);
        }
       
        localStorage.setItem('vend_data', JSON.stringify(vend_data));
        vendorPopup.classList.remove('vendor-pop'); 
    }

    const vendorDiv = vendorList.children[selectedVendorIndex];
    const vendorData = vend_data[selectedVendorIndex];
    let warnImg = document.createElement('img');
    warnImg.src = '../resources/warning.png';
    warnImg.alt = 'warning';
    warnImg.id = 'warningSign';

    if (
        !vendorData.cleanliness.includes('Daily Cleaning') ||
        !vendorData.cleanliness.includes('Waste Disposal')
    ) {
        vendorDiv.classList.add('vend-warning');
        vendorDiv.append(warnImg);
    } else {
        vendorDiv.classList.remove('vend-warning');
        let img = vendorDiv.querySelector('img');
        vendorDiv.removeChild(img);
    }

    vendorPopup.classList.remove('vendor-pop'); 

};


const deleteVendor = e => {
    e.preventDefault();


}
vendorForm.addEventListener('submit', vendorDetails);
popupForm.addEventListener('submit', vendorHygiene);




   

