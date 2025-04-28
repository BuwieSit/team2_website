
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


const vendorDetails = e => {
        e.preventDefault();
    
        let bName = document.getElementById('busName').value.trim();
        let permitNum = document.getElementById('permitNumber').value.trim();
        let prodType = document.getElementById('productType').value;
    
        let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];
    
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
    let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];

    vend_data.forEach(vendor => {
        addVendorToPage(vendor.bName, vendor.permitNum);
    });
    
});

vendorForm.addEventListener('submit', vendorDetails);

let selectedVendorIndex = null;

vendorList.addEventListener('click', (event) => {
    
    const clickedVendor = event.target.closest('.vendor');
    if (!clickedVendor) return; 

    let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];

    const vendors = Array.from(vendorList.children);
    selectedVendorIndex = vendors.indexOf(clickedVendor);

    if (vend_data[selectedVendorIndex]) {
        addVendorToPopup(vend_data[selectedVendorIndex].bName, vend_data[selectedVendorIndex].permitNum, vend_data[selectedVendorIndex].prodType);
    }


    if (selectedVendorIndex !== null) {
        let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];

        document.getElementById('good').checked = false;
        document.getElementById('fair').checked = false;
        document.getElementById('poor').checked = false;
        document.getElementById('dailyClean').checked = false;
        document.getElementById('wasteDispo').checked = false;

        if (vend_data[selectedVendorIndex]) {
            const vendor = vend_data[selectedVendorIndex];

            if (vendor.sanitary === "Good") good.checked = true;
            if (vendor.sanitary === "Fair") fair.checked = true;
            if (vendor.sanitary === "Poor") poor.checked = true;

            if (vendor.cleanliness && vendor.cleanliness.includes('Daily Cleaning')) {
                daily_cleaning.checked = true;
            }
            if (vendor.cleanliness && vendor.cleanliness.includes('Waste Disposal')) {
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

    let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];

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
        alert('UPDATED');
        vendorPopup.classList.remove('vendor-pop'); 
    }
};

popupForm.addEventListener('submit', vendorHygiene);




   

