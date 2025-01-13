/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

    const arr1 = str1.toLowerCase().split("");
    arr1.sort();
    const SortedString1 = arr1.join("");

    const arr2 = str2.toLowerCase().split("");
    arr2.sort();
    const SortedString2 = arr2.join("");

    if (SortedString1 === SortedString2) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram('spar', 'Rasp')); //true
console.log(isAnagram('mehir', 'rasrheum')); //false
console.log(isAnagram('mar', 'ram')); //true


module.exports = isAnagram;