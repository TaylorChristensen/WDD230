// fetch('directory.json').then(function(response){
//     return response.json();
// }).then(function(obj) {
//     console.log(obj);
// }).catch(function(error) {
//     console.error('Something went wron with retrieving the directory')
//     console.error(error);
// });

const requestImg = 'directory.json'
const cards = document.querySelector('.cards');

async function getDirectory() {
    const response = await fetch('directory.json');
    const data = await response.json();
    data.businesses.forEach(business => {displaybusinesses(business)})
}

function displaybusinesses(business) {

    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`;
    address.textContent = `Business Adress: ${business.address}`;
    phone.textContent = `Business Phone: ${business.phone}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', business.imageURL);
    portrait.setAttribute('alt', `Business Logo ${business.name}`);
    // portrait.setAttribute('alt', ` Date of Birth ${prophet.birthdate}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }


getDirectory();
