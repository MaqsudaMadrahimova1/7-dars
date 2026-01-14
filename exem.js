//3-misol
// function findLongestWord(arr) {
//     let uzun = "";
//     for (let word of arr) {
//         if (word.length > uzun.length) {
//           uzun = word;
//         }
//       }
//       return uzun;
// }
// console.log(findLongestWord(["apple","banana","grapefruit","kiwi"]));


// let str = "apple banana apple orange banana orange grape"

 //1-misol
//  function teskari(arr){
//     let maxIndex = arr.indexOf(Math.max(...arr));
//     let minIndex = arr.indexOf(Math.min(...arr));
//     let start = Math.max(minIndex, maxIndex) - 1;
//     let end = Math.min(minIndex, maxIndex) + 1;
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     [arr[0],arr[6]] = [arr[6],arr[0]];
//     [arr[0],arr[5]] = [arr[5],arr[0]];
//     return arr;
//     }
//     console.log(teskari([3,1,4,1,5,9,2]));
    
 

//4-misol
// function multiString(str,m){
//     return str.repeat(m);
//  }
//  console.log(multiString("salom",3));


//2-misol
// function findUniqueWords(str) {
//     let newArr=[...new Set(str.split(" "))]
//     return newArr
// }
// console.log(findUniqueWords("apple banana apple orange grape"));


//5-misol
// function findCommonElements(arr1, arr2) {
// return arr1.filter(element => arr2.includes(element));
// }
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];
// console.log(findCommonElements(arr1, arr2));
