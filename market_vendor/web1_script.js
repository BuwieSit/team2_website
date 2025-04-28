
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

console.log(vend_data);

function getLoggedInUser() {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const loggedInUser = landing_data.find(user => user.username === loggedInUsername);

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
const register_popup = document.getElementById('register-pop');


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


                const register_popup = document.getElementById('register-pop');

                register_popup.classList.remove('reg-pop-hide');
                register_popup.classList.add('reg-pop-show');

                setTimeout(() => {
                    register_popup.classList.remove('reg-pop-show');
                    register_popup.classList.add('reg-pop-hide');
                }, 2000);

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
function addVendorToTable(bName, permitNum, prodtype, sanitaryHygiene, cleanlinessHygiene) {
    const table = document.querySelector('.resultsTable');

    let rowAdd = document.createElement('tr');
    rowAdd.classList.add('add-row');

    let bNameRow = document.createElement('td');
    bNameRow.classList.add('bName-row');

    let permNumRow = document.createElement('td');
    permNumRow.classList.add('permNum-row');

    let prodTypeRow = document.createElement('td');
    prodTypeRow.classList.add('prodType-row');

    let sanitaryRow = document.createElement('td');
    sanitaryRow.classList.add('sanitary-row');

    let cleanliRow = document.createElement('td');
    cleanliRow.classList.add('cleanli-row');

    bNameRow.textContent = bName;
    permNumRow.textContent = permitNum;
    prodTypeRow.textContent = prodtype;
    sanitaryRow.textContent = sanitaryHygiene;
    cleanliRow.textContent = cleanlinessHygiene;

    rowAdd.append(bNameRow, prodTypeRow, permNumRow, sanitaryRow, cleanliRow);

    table.append(rowAdd);
}

window.addEventListener('DOMContentLoaded', () => {

    const table = document.querySelector('.resultsTable');

    vend_data.forEach(vendor => {
        addVendorToPage(vendor.bName, vendor.permitNum);
        
        let existingRow = Array.from(table.querySelectorAll('tr')).find(row => {
            const bNameCell = row.querySelector('.bName-row');
            return bNameCell && bNameCell.textContent === vendor.bName;
        });

        if (!existingRow) {
            addVendorToTable(
                vendor.bName,
                vendor.permitNum,
                vendor.prodType,
                vendor.sanitary || "",
                (vendor.cleanliness || []).join(', ')
            );
        }
        
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
    
    const table = document.querySelector('.resultsTable');

    if (vendor_index) {
        addVendorToPopup(vend_data[selectedVendorIndex].bName, vend_data[selectedVendorIndex].permitNum, vend_data[selectedVendorIndex].prodType);

        let existingRow = Array.from(table.querySelectorAll('tr:not(#first_row)')).find(row => {
            const bNameCell = row.querySelector('.bName-row');
            return bNameCell && bNameCell.textContent === vendor_index.bName;
        });
        
        console.log(existingRow);

        if (existingRow) {
            existingRow.querySelector('.permNum-row').textContent = vendor_index.permitNum;
            existingRow.querySelector('.prodType-row').textContent = vendor_index.prodType;
            existingRow.querySelector('.sanitary-row').textContent = vendor_index.sanitary || "";
            existingRow.querySelector('.cleanli-row').textContent = (vendor_index.cleanliness || []).join(', ');
        } else {
            addVendorToTable(
                vendor_index.bName,
                vendor_index.permitNum,
                vendor_index.prodType,
                vendor_index.sanitary || "",
                (vendor_index.cleanliness || []).join(', ')
            );
            
        }
     
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
        const table = document.querySelector('.resultsTable');
        let vendor_index = vend_data[selectedVendorIndex];

        let existingRow = Array.from(table.querySelectorAll('tr:not(#first_row)')).find(row => {
            const bNameCell = row.querySelector('.bName-row');
            return bNameCell && bNameCell.textContent === vendor_index.bName;
        });

        if (existingRow) {
            existingRow.querySelector('.permNum-row').textContent = vendor_index.permitNum;
            existingRow.querySelector('.prodType-row').textContent = vendor_index.prodType;
            existingRow.querySelector('.sanitary-row').textContent = vendor_index.sanitary || "";
            existingRow.querySelector('.cleanli-row').textContent = (vendor_index.cleanliness || []).join(', ');
        } else {
            addVendorToTable(
                vendor_index.bName,
                vendor_index.permitNum,
                vendor_index.prodType,
                vendor_index.sanitary || "",
                (vendor_index.cleanliness || []).join(', ')
            );
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
        if (img) {
            vendorDiv.removeChild(img);
        }
    }

    vendorPopup.classList.remove('vendor-pop'); 

};

const deleteBtn = document.querySelector('.deleteBtn');
const deleteVendor = e => {
    e.preventDefault();

    const del_popup = document.getElementById('delete-pop');
    const yes = document.getElementById('yesBtn');
    const cancel = document.getElementById('noBtn');


    del_popup.classList.remove('del-hide');
    del_popup.classList.add('del-show');

    yes.addEventListener('click', () => {
        if (selectedVendorIndex !== null && selectedVendorIndex >= 0) {
    
            vend_data.splice(selectedVendorIndex, 1); 
            localStorage.setItem('vend_data', JSON.stringify(vend_data));

            console.log('Vendor deleted');
            console.log(vend_data);

            const vendorDiv = vendorList.children[selectedVendorIndex];
            vendorDiv.remove();
            vendorPopup.classList.remove('vendor-pop');
            del_popup.classList.remove('del-show');
            del_popup.classList.add('del-hide');

        } else {
            console.log('No vendor selected to delete');
        }
    });
    
    cancel.addEventListener('click', () => {
        del_popup.classList.remove('del-show');
        del_popup.classList.add('del-hide');
    });




}

deleteBtn.addEventListener('click', deleteVendor);
vendorForm.addEventListener('submit', vendorDetails);
popupForm.addEventListener('submit', vendorHygiene);




   

