const statusButton = document.querySelector('button');
const pets = document.querySelector('.all-pets');

//A factor function to creat pets

const createPet = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${this.name} needs a nap. Zzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log(`${this.name} is too tired to play.`);
        this.sleep();
      } else {
        console.log(`${this.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};

// Creating and modifying the pets, and creating allPets array

const sora = createPet('Sora', 'ferret');
const clover = createPet('Clover', 'rabbit');
const baxter = createPet('Baster', 'hamster');
const cleo = createPet('Cleo', 'rat');
const francine = createPet('Francine', 'turtle');
clover.isTired = 8;
francine.isTired = 9;
const allPets = [sora, clover, baxter, cleo, francine];

// A function for adding updated pets to browser (called by click on statusButton)

const showPets = function (petArray) {
  //empty list
  pets.innerHTML = '';

  for (let pet of petArray) {
    let status = 'reday to play!';
    if (pet.isTired >= 7) {
      status = 'sleeping.';
    }
    const li = document.createElement('li');
    li.innerHTML = `<span class = "pet-name">${pet.name}</span> the ${pet.species} is ${status}`;
    pets.append(li);
  }
};

// listener to statusbutton and calling showPets

statusButton.addEventListener('click', function () {
  showPets(allPets);
});
