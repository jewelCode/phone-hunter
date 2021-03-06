
// Search Input Items
const searchInput = () => { 
    const inputPhone = document.getElementById("input-phone");
    const searchInput = inputPhone.value;
    inputPhone.value = '';
    if(searchInput == ''){
        alert('Please Enter Your Favorite Device Mobile Name')
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchInput}`
        fetch(url)
        .then(response => response.json())
        .then(data => displayPhone(data.data.slice(0, 20)))
    }
 
}
// Display Phone Details
const displayPhone = (phones) => {
    const phoneCard = document.getElementById("phone-card");
    phoneCard.innerHTML = '';
    for(const phone of phones){
        const div = document.createElement('div');
        div.classList.add("col-lg-4");
        div.innerHTML = `
          <div class="border text-center p-3">
                <div class="mt-3"><img src=${phone.image}></div>
                <h5>${phone.brand}</h5>
                <h5>${phone.phone_name}</h5>
                <button onClick="displayPhoneDetails('${phone.slug}')" class="btn btn-primary">See More</button>
                </div>
        `
        phoneCard.appendChild(div);
    }
}

// Display phone details
const displayPhoneDetails = (detail) =>{
    const phoneDetailUrl = `https://openapi.programming-hero.com/api/phone/${detail}`
     fetch(phoneDetailUrl)
    .then(response => response.json())
    .then(data => displayFeatures(data.data));
}



const displayFeatures = (data) => {
        const displayDetails = document.getElementById("phone-details");
        displayDetails.textContent = '';
        const div = document.createElement("div");
        div.classList.add("border")
        div.innerHTML =`
            <img class="mt-3" src="${data.image}"></img>
            <h5>Brand: ${data.brand}</h5>
            <h5>Product Name: ${data.name}</h5>
            <h5>Release Date: ${data.releaseDate ?data.releaseDate: "No Release Date Found"}</h5>
            <h5>Storage: ${data.mainFeatures.storage}</h5>
            <h5>Display Size: ${data.mainFeatures.displaySize}</h5>
            <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
            <h5>Memory: ${data.mainFeatures.memory}</h5>
            <p>Sensors: ${data.mainFeatures.sensors}</p>
            <ul>
                <li> WLAN:${data.others.WLAN}</li>
                <li> Bluetooth:${data.others.Bluetooth}</li>
                <li>GPS: ${data.others.GPS}</li>
                <li>NFC: ${data.others.NFC}</li>
                <li>Radio: ${data.others.Radio}</li>
                <li>USB: ${data.others.USB}</li>
            </ul>
        `
        displayDetails.appendChild(div)
}

