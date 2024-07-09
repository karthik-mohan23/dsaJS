// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s, t) {
  return sortString(s) === sortString(t);
}

function sortString(str) {
  return str.split("").sort().join("");
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
