let school = {
    name: "iqra school",
    class: 7,
    section: "a"
};
let school2 = {
    name: "green land",
    teacher: "tahir sir",
    age: 28,
};
let school3= {...school,...school2}

console.log(school2);
console.log(school3);

let arra = [20, 30, 40, 50];
let arra1 = [40, 60, 80, 90];
let arra2 = [...arra, ...arra1];



console.log(arra);
console.log(arra1);
console.log(arra2)