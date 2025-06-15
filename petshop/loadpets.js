const pets = [ 
  {"name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/petshop-img/dogs/dog01.jpg"}, 
  {"name": "Buddy", "type": "Dog", "age": 3, "img": "petshop-img/petshop-img/dogs/dog02.jpg"}, 
  {"name": "Whiskers", "type": "Cat", "age": 2, "img": "petshop-img/petshop-img/cats/cat01.jpg"}, 
  {"name": "Mittens", "type": "Cat", "age": 2, "img": "petshop-img/petshop-img/cats/cat02.jpg"}, 
  {"name": "Marley", "type": "Dog", "age": 2, "img": "petshop-img/petshop-img/dogs/dog03.jpg"},
  {"name": "Sadie", "type": "Cat", "age": 1, "img": "petshop-img/petshop-img/cats/cat03.jpg"},
  {"name": "Henry", "type": "Capybara", "age": 3, "img": "petshop-img/petshop-img/capybaras/capybara01.jpg"},
  {"name": "Charles", "type": "Capybara", "age": 3, "img": "petshop-img/petshop-img/capybaras/capybara02.jpg"},
  {"name": "Tilly", "type": "Bird", "age": 1, "img": "petshop-img/petshop-img/birds/bird01.jpg"},
  {"name": "Blu", "type": "Bird", "age": 2, "img": "petshop-img/petshop-img/birds/bird02.jpg"},
] 

function loadPets() { 
  console.log('Loading pets...'); 
  const petList = document.getElementById('pet-list'); 
  pets.forEach(pet => { 
    const petItem = document.createElement('div'); 
    petItem.className = 'pet'; 
    petItem.innerHTML = ` 
      <img src="${pet.img}" alt="${pet.name}"> 
      <h3>${pet.name}</h3> 
      <p>Type: ${pet.type}</p> 
      <p>Age: ${pet.age} years</p> 
      <button onclick="adoptPet()">Adopt Now</button> 
  `; 
    petList.appendChild(petItem); 
  }); 
} 
document.addEventListener('DOMContentLoaded', loadPets); 
console.log('Pets loaded successfully.'); 