// page : 139 

const headPhone = {
  brand: 'Sony',
  price: 3000,
  color: 'red'
}
Object.freeze(headPhone);

headPhone.shop = 'apple gadgets'

console.log(headPhone);






const palyer = {
  name: 'messi',
  goal: 800 ,
  clubName : 'inter miami'
}

Object.freeze(palyer);

palyer.age = 40 ;
console.log(palyer);




const book = {
  title: 'Harry potter',
  author: 'Jk Rowling',
  pages: 5400
}

Object.seal(book);

book.author = 'shohan';
console.log(book);








const gadget = {
  name : 'iPhone',
  price : 1200000 ,
  color : 'balck'
}
console.log(gadget);

delete gadget.price

console.log(gadget);
 
const animal = {
  name: 'tiger',
  location: 'Sundarban',
  eat : 'meat'
}


Object.freeze(animal)

animal.eat = 'vegetable'
console.log(animal);



const food = {
  name: 'pizza',
  price: 500 ,
  size: 'large'
}
Object.freeze(food)

food.price = 550 ;
console.log(food);








