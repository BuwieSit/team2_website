
const header = document.querySelector('.head');
const navOptions = document.querySelectorAll('.nav-options');
const linkOpt = document.querySelectorAll('.nav-options a');

const vendorForm = document.getElementById('vendorForm');
let vendorList = document.querySelector('.vList');
const close = document.querySelector('.closeBtn');
const vendorPopup = document.querySelector('.V-popup');
const popHandler = document.querySelectorAll('.vendor');
const vendorDesc = document.querySelector('.vendor-desc');

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


vendorList.addEventListener('click', (event) => {
    const clickedVendor = event.target.closest('.vendor');
    if (!clickedVendor) return; 

    let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];

    const vendors = Array.from(vendorList.children);
    const index = vendors.indexOf(clickedVendor);

    if (vend_data[index]) {
        addVendorToPopup(vend_data[index].bName, vend_data[index].permitNum, vend_data[index].prodType);
    }

    if (!vendorPopup.classList.contains('vendor-pop')) {
        vendorPopup.classList.add('vendor-pop');
    }
});

close.addEventListener('click', () => {
    vendorPopup.classList.remove('vendor-pop');
});




   

