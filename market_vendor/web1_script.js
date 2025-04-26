
const header = document.querySelector('.head');
const navOptions = document.querySelectorAll('.nav-options');
const linkOpt = document.querySelectorAll('.nav-options a');

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


    const vendorForm = document.getElementById('vendorForm');

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
            let div = document.createElement('div');
            let vendorList = document.querySelector('.vList');
    
            div.className = 'vendor';
            title.className = 'detail-title';
            desc.className = 'detail-vendor';
    
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
    let vendorList = document.querySelector('.vList');

    div.className = 'vendor';
    title.className = 'detail-title';
    desc.className = 'detail-vendor';

    title.textContent = bName; 
    desc.textContent = permitNum;

    div.append(title, desc);
    vendorList.append(div);

}


window.addEventListener('DOMContentLoaded', () => {
    let vend_data = JSON.parse(localStorage.getItem('vend_data')) || [];

    vend_data.forEach(vendor => {
        addVendorToPage(vendor.bName, vendor.permitNum);
    });
});

vendorForm.addEventListener('submit', vendorDetails);

const close = document.querySelectorAll('.closeBtn');
const vendorPopup = document.querySelector('.V-popup');
const popHandler = document.querySelector('.vendor');

popHandler.addEventListener('click', () => {
    
    vendorPopup.classList.add('vendor-pop');
})

   

