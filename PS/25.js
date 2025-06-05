// page : 137 

const bike = {
  brand: 'hero',
  price: 120000,
  model: 'splender'
}
// console.log(Object.values(bike));

const books = {
  book1: "Harry potter",
  book2: "Game of Thrones",
  book3: 'The Hobbit'
}
for (const key in books) {
  // console.log(key,":",books[key]);

}





const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40
}
let sum = 0;
for (const key in numbers) {
  sum += numbers[key];
}
// console.log(sum);



const player = {
  name: 'Leo Messi',
  team: 'Argentina',
  goal: 91
}

// console.log(Object.values(player));




const building = {
  floors: 10,
  address: {
    street: 'main road',
    city: 'Dhaka'
  }
}

for(const ele in building) {
  console.log(ele,":", building[ele]);
  
}
