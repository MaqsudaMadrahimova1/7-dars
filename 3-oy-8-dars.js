// //3-misol

// function swapElements(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     return arr;
//   }
  
//   console.log(swapElements([1, 22, 13, 4], 1, 2)); 


//   //4-misol

//   function letterFrequency(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//       let harf = str[i];
//       if (obj[harf]) {
//         obj[harf]++;
//       } else {
//         obj[harf] = 1;
//       }
//     }
//     return obj;
//   }
//   console.log(letterFrequency("javascript"));

//   //5-misol

//   function isAnagram(a, b) {
//     let s1 = a.split('').sort().join('');
//     let s2 = b.split('').sort().join('');
//     return s1 === s2;
//   }
//   console.log(isAnagram("listen", "silent")); 
//   console.log(isAnagram("hello", "world")); 
  
//   //6-misol

//   function longestUniqueSubstring(str) {
//     let longest = "";
//     for (let i = 0; i < str.length; i++) {
//     let temp = "";
//     for (let j = i; j < str.length; j++) {
//     if (temp.includes(str[j])) break;
//     temp += str[j];
//     }
//     if (temp.length > longest.length) {
//     longest = temp;
//       }
//     }
//     return longest;
//   }
//   console.log(longestUniqueSubstring("abcabcbb")); 
//   console.log(longestUniqueSubstring("bbbb")); 
  
//   //8-misol

//   function findTwoSum(arr, sum) {
//     for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//      if (arr[i] + arr[j] === sum) {
//      return [arr[i], arr[j]];
// }
//  }
// }
//   }
//   console.log(findTwoSum([2, 7, 11, 15], 9)); 

//   //9-misol

//   function longestConsecutive(arr) {
//     arr.sort((a, b) => a - b);
//     let longest = [];
//     let temp = [arr[0]];
//     for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1] + 1) {
//     temp.push(arr[i]);
//       } else {
//         temp = [arr[i]];
//       }
//     if (temp.length > longest.length) {
//     longest = temp;
//       }
//     }
//     return longest;
//   }
//   console.log(longestConsecutive([1, 4, 200, 2, 3])); 

//   //1-misol

//   function isPalindrome(word) {
//     let reversed = word.split('').reverse().join('');
//     return word === reversed;
//   }
//   console.log(isPalindrome("level")); 
//   console.log(isPalindrome("apple")); 
  
//   //2-misol

//   function toBinary(num) {
//     return num.toString(2);
//   }
//   console.log(toBinary(10));
  
//   //7-misol

//   function maxSubArraySum(arr) {
//     let max = arr[0];
//     let current = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       current = Math.max(arr[i], current + arr[i]);
//       max = Math.max(max, current);
//     }
  
//     return max;
//   }
//   console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 

//   //10-misol

//   function sumPositivesAndNegatives(arr) {
//     let positiveSum = 0;
//     let negativeSum = 0;
//     for (let num of arr) {
//     if (num > 0) {
//     positiveSum += num;
//       } else {
//         negativeSum += num;
//       }
//     }
//     return {
//       positiveSum,
//       negativeSum
//     };
//   }
//   console.log(sumPositivesAndNegatives([1, -2, 3, -4, 5]));

  
  
  
