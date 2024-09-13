const firstFavNum = 10;
const secondFavNum = 4;

let isGreaterThan= firstFavNum>secondFavNum;
let isLessThan= firstFavNum<secondFavNum;
let isGreaterThanOrEqualTo= firstFavNum>=secondFavNum;
let isLessThanOrEqualTo = firstFavNum <= secondFavNum;
let isStrictlyEqual = firstFavNum === secondFavNum;
let isLooseEquality = firstFavNum == secondFavNum;
let isStrictlyInequality = firstFavNum !== secondFavNum;
let isLooseInequality = firstFavNum != secondFavNum;


console.log("Is firstFavNum greater than secondFavNum?", isGreaterThan);
console.log("Is firstFavNum less than secondFavNum?", isLessThan);
console.log("Is firstFavNum greater than or equal to secondFavNum?", isGreaterThanOrEqualTo);
console.log("Is firstFavNum less than or equal to secondFavNum?", isLessThanOrEqualTo);
console.log("Is firstFavNum strictly equal to secondFavNum?", isStrictlyEqual);
console.log("Is firstFavNum loose equality to secondFavNum?", isLooseEquality);
console.log("Is firstFavNum strictly inequality to secondFavNum?", isStrictlyInequality);
console.log("Is firstFavNum loose inequality to secondFavNum?", isLooseInequality);

console.log("AND:", firstFavNum > 10 && secondFavNum < 20); //true
console.log("OR:", firstFavNum < 10 || secondFavNum > 20); //true
console.log("NOT:", !(firstFavNum === secondFavNum)); //true
