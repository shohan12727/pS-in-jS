// page: 119
for (let i = 20; i <= 50; i++) {
  if (i % 7 == 0) {
    console.log(i);

  }
}

for (let j = 40; j <= 80; j++) {
  if (j % 5 == 0 && j % 7 == 0) {
    console.log(j);

  }
}




let sum = 0;
for (let k = 1; k <= 40; k++) {
  if (k % 13 == 0) {
    sum += k;
  }
}
console.log("sum of all divisal number", sum);



for (let x = 1; x <= 50; x += 4) {
  console.log(x);
}



for (let m = 0; m <= 100; m++) {
  if (m % 9 == 0 && m % 6 == 0) {
    console.log(m);
  }
}



let addition = 0;
for (let o = 1; o <= 50; o++) {
  if (o % 3 == 0 && o % 4 == 0) {
    addition += o;

  }
}

console.log("additon:", addition);

