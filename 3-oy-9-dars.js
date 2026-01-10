//1-misol
// function vb(arr, m) {
//     let closestSum = Infinity;
//     let resultPair = [];
//     for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//     let sum = arr[i] + arr[j];
//     if (Math.abs(sum - m) < Math.abs(closestSum - m)) {
//     closestSum = sum;
//     resultPair = [arr[i], arr[j]];
//     }
//       }
//     }
//     return { resultPair, closestSum };
//   }
//   console.log(vb([21, 43, 11, 3, 45, 4, 32, 54], 35));
  

//2-misol

// function juft(arr){
//  let gh = [];
//  for (let i = 0; i < arr.length; i++) {
// if(arr[i] % 2==0){
// gh.push(arr[i]+4);
// }else{
//     gh.push(arr[i]);
// }
    
//  }
//  return gh;
// }
// console.log(juft([1,4,5,2,33,1,8,22]));


//3-misol

// function toq(arr){
//  let gh = [];
//  for (let i = 0; i < arr.length; i++) {
// if(arr[i] % 2!==0){
// gh.push(arr[i]+3);
// }
    
//  }
//  return gh;
// }
// console.log(toq([2,55,2,21,44,3]));

//4-misol

// function almash(arr){
// let max = Math.max(...arr); 
// let min = Math.min(...arr);
// let maxIndex = arr.indexOf(max);
// let minIndex = arr.indexOf(min);
// [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];
// return arr; 
// }
// console.log(almash([23,43,12,56,64]));


//5-misol

// function trngla(arr){
//     let max = Math.max(...arr); 
//     let min = Math.min(...arr);
//     let maxIndex = arr.indexOf(max);
//     let minIndex = arr.indexOf(min);
//     let start = Math.min(minIndex, maxIndex) + 1;
//     let end = Math.max(minIndex, maxIndex) - 1;
//     for (let i = start; i <= end; i++) {
//       arr[i] = 0;
//     return arr;
// }

// }
// console.log(trngla([2,54,4,11,1,34,11]));


//6-misol
// function teskari(arr){
// let maxIndex = arr.indexOf(Math.max(...arr));
// let minIndex = arr.indexOf(Math.min(...arr));
// let start = Math.min(minIndex, maxIndex) + 1;
// let end = Math.max(minIndex, maxIndex) - 1;
// [arr[start], arr[end]] = [arr[end], arr[start]];
// return arr;
// }
// console.log(teskari([2,54,4,11,1,34,11]));

//7-misol

// function removeNumber(arr, index) {
//     arr.splice(index, 1);
//     return arr;
//   }
//   console.log(removeNumber([54, 23, 64, 12], 1));


//8-misol

// function removeDuplicate(arr) {
//     return [...new Set(arr)];
//   }
//   console.log(removeDuplicate([12, 43, 23, 54, 12])); 
//   console.log(removeDuplicate([12, 43, 43, 23, 23, 54, 12, 23]));
 
//9-misol

//10-misol

// let arr = [2,43,53,23,22,53,88,10]; 
// let sumIndexes = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2==0){
//         sumIndexes += i;
//     }
// }
// console.log(sumIndexes); 

  

