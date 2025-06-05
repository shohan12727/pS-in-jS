// page:137 

const book = {
  name: 'pirates of the carabean',
  auther: "shohan",
  price: 500
}

for (const key in book) {

  const value = book[key]
  console.log(key, value);
}

const article = {
  title: "Intro to React",

  date: "2025-06-05",
  content: "React is a JavaScript library for building user interfaces."
};

if ("author" in article) {
  console.log("isHas");

} else {
  console.log("not found");

}

const laptop = {
  brand: 'dell',
  model: 'inspiron',
  price: 30000
}
for (const element in laptop) {
  const value2 = laptop[element];
  console.log(element, ":", value2);
}
for (const ele in laptop) {
  console.log(ele, ":", laptop[ele]);
}



const phone = {
  brand: 'samsung',
  model: 'S25',
  price: 1202563
}

const objToArray = Object.keys(phone)

for (const item of objToArray) {
  console.log(item, phone[item]);

}
