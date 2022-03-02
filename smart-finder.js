const searchInput = () => { 
    const inputPhone = document.getElementById("input-phone").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputPhone}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhone(data.data.slice(0, 20)))
}

const displayPhone = (phones) => {
    const phoneCard = document.getElementById("phone-card");
    console.log(phones)
    for(const phone of phones){
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add("col-md-4");
        div.innerHTML = `
        
          <div class="border text-center p-3">
                <div class="mt-3"><img src=${phone.image}></div>
                <h5>${phone.brand}</h5>
                <h5>${phone.phone_name}</h5>
                <button onClick="displayPhoneDetails(${phone.slug})" class="btn btn-primary">See More</button>
          </div>
        `
        phoneCard.appendChild(div);
        
    }
}

const displayPhoneDetails = slug =>{
    console.log(slug);
    
}

