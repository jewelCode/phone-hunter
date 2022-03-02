const searchInput = () => { 
    const inputPhone = document.getElementById("input-phone").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputPhone}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhone(data.data.slice(0, 20)))
    
}

const displayPhone = (phones) => {
    const phoneCard = document.getElementById("phone-card");
    // console.log(phones)
    for(const phone of phones){
        // console.log(phone);
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


const displayPhoneDetails = (detail) =>{
    const phoneDetailUrl = `https://openapi.programming-hero.com/api/phone/${detail}`
    fetch(phoneDetailUrl)
    .then(response => response.json())
    .then(data => displayFeatures(data.data));
}



const displayFeatures = (data) => {
    const displayDetails = document.getElementById("phone-details");
        const div = document.createElement("div");
        div.classList.add("border")
        div.innerHTML =`
            <img class="mt-3" src="${data.image}"></img>
            <h5>Brand: ${data.brand}</h5>
            <h5>Product Name: ${data.name}</h5>
            <h5>Storage: ${data.mainFeatures.storage}</h5>
            <h5>Display Size: ${data.mainFeatures.displaySize}</h5>
            <h5>Chipset: ${data.mainFeatures.chipSet}</h5>
            <h5>Memory: ${data.mainFeatures.memory}</h5>
            <h5>Release Date: ${data.releaseDate}</h5>
        `
        displayDetails.appendChild(div)
}

