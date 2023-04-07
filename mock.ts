// An array to hold the objects
const objectsArray = [];

// An array of possible names to choose from
const names = [
  'Alex',
  'Ben',
  'Catherine',
  'David',
  'Emma',
  'Frank',
  'Grace',
  'Henry',
  'Isabella',
  'John',
  'Kate',
  'Liam',
  'Mia',
  'Nora',
  'Oliver',
  'Penelope',
  'Quinn',
  'Ryan',
  'Samantha',
  'Thomas',
];

// Loop to create the objects and push them into the array
for (let i = 0; i < 20; i++) {
  const name = names[Math.floor(Math.random() * names.length)]; // Random name
  const mass = Math.floor(Math.random() * 100); // Random number for mass
  const object = { name: name, mass: mass }; // Create the object
  objectsArray.push(object); // Add the object to the array
}

export default objectsArray;
