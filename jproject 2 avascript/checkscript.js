//--------------------String----------------------
//---------------------1--------------------------
function reverse(input){
    let txt='';
    for (let i=input.length-1; i>=0; i--){
        txt += input[i]
    }
    console.log(txt)
}
//----------------------2-------------------------
function countCaracters(tap){
    return  'nomber of Characters is :'+ tap.length  ; 
}
//----------------------3-------------------------
function capitalizeWords(paragraph) {
    return paragraph.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const paragraph = "life is good ";
const capitalize = capitalizeWords(paragraph);
console.log(capitalize);
reverse("hello world ");
console.log(countCaracters('amine'));
//--------------------String----------------------
//--------------------Array Functions:----------------------
//----------------------1-----------------------------------
function findMaxMin(arr) {
    if (arr.length <=0) {
        return undefined; 
    }
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return `max number is :${max}  and min number is ${min}` ;
}

const numbers = [7,5,22,6,2,3];
var result = findMaxMin(numbers);
console.log(result);
//--------------------------2--------------------------------
function sum(arr) {
    let total = 0 ;
    if (arr.length <=0) {
        return undefined; 
    }
    for (let i = 0; i < arr.length; i++) {
        total+=arr[i];
    }
    return  `total number is ${total}`;
}
const total1 = [5,6,3,1];
var resultSum = sum(total1);
console.log(resultSum);
//--------------------------3--------------------------------
function trieCondition(arr,condition){
    let trieArray=[];
    for(let i =0 ; i<arr.length ; i++){
        if(condition(arr[i])){
            trieArray.push(arr[i])
        }
    }
    return trieArray
    
}
    const arrFortrie=[1,2,3,4,5,6,7,8,9,10]
    const trieTable=trieCondition(arrFortrie,condition=> condition>3);
    console.log(trieTable);
//-----------------Mathematical Functions:---------------
//-----------------------------1-----------------------------------
function factorial(n){
    if (n===1|| n===0){
        return 1 
    }else{
        return n * factorial(n-1)
    }
}
const nIterat = 5
const sumFact = factorial(nIterat)
console.log(sumFact);
//-------------------------------2-----------------------------
function primeNumber (nbr) {
    for(let i = 2; i < nbr; i++)
      if(nbr%i === 0) return false;
    return nbr > 1;
  }
  console.log(primeNumber(20));
  console.log(primeNumber(17));
//------------------------------3------------------------------
function fibonacciSequence(num) {
    let seq = [];
    for (let i = 0; i < num; i++) {
            if (i === 0) {
                seq.push(0);
                }
            else if (i === 1) {
                seq.push(1);
                }
            else {
            let nextNum = seq[i - 1] + seq[i - 2];
            seq.push(nextNum);
                }
    }
    return seq;
}
console.log(fibonacciSequence(7));