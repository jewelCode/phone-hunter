const searchInput = () => { 
    const inputPhone = document.getElementById("input-phone").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputPhone}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayPhone(data.data))
}

const displayPhone = (phone) => {
    const phoneCard = document.getElementById("phone-card");
    for(const ph of phone){
        console.log(ph);
        const div = document.createElement('div');
        div.classList.add("col-md-4");
        div.innerHTML = `
        
          <div class="border text-center p-3">
                <div class="mt-3"><img src=${ph.image}></div>
                <h5>${ph.brand}</h5>
                <h5>${ph.phone_name}</h5>
                <button class="btn btn-primary">See More</button>
          </div>
          
        `
        phoneCard.appendChild(div);
        
    }
}

