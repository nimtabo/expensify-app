// 
// Object Destructuring
// 
const person = {
  name: 'kino',
  age: 23,
  location: {
    city: 'nairobi',
    temp: 24
  }
};

const book = {
  title: 'Ego is enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}
const { name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName);

// 
// Array Destructuring
// 
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, ,mediumSize] = item;

console.log(`A medium ${itemName} costs ${mediumSize}`);