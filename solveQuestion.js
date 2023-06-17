// Ans for 1st
let a1 = [
  { a: 1, b: 'a', f: false },
  { a: 2, b: 'b' },
  { a: 3, c: 'c', f: 0 },
];
a1.forEach((x) => {
  x.b = x.b || x.b == false ? x.b : 'A';
  x.f = x.f || x.f == false ? x.f : 'A';
  return x;
});
console.log(a1);

// Ans for 2nd
let b1 = [
  { a: 1, b: 'a' },
  { a: 2, b: 'b' },
  { a: 3, c: 'c' },
];
let b2 = [...b1];
b2.map((x) => (x.a = x.a + 1));
console.log(b1, b2);
