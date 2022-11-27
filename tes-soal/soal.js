// Fiz Buz
// ide : 3 = fizz, 5 = buzz, 3 & 5 = fizzBuzz
// [1, 2, fizz, 4, buzz, ---- 14, fizzBuzz]
function fizzBuzz(num) {
  let temp = [];
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      temp.push("fizzBuzz");
    } else if (i % 5 === 0) {
      temp.push("buzz");
    } else if (i % 3 === 0) {
      temp.push("fizz");
    } else {
      temp.push(i);
    }
  }
  //   console.log(temp);
  return temp;
}

console.log(fizzBuzz(15));
// [1, 2, 3 ---- 15]

// reverse / balik kata

function reverse(string) {
  let balikan = "";
  let number = "";

  for (let i = string.length - 1; i >= 0; i--) {
    // balikan += string[i];
    // perkondisian. => deteksi mana number mana string
    if (+string[i]) {
      console.log(string[i]);
      number += string[i];
    } else {
      balikan += string[i];
    }
  }
  console.log(number);
  console.log(balikan);
  return number + balikan;
}

console.log(reverse("NEG1IE"));
// 1EIGEN
let stringAngka = "123";

// kata terpanjang
// aku cayang mantannn

function longestWord(string) {
  let word = string.split(" ");
  let longest = 0; //3 > 6 > 8
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    if (word[i].length > longest) {
      longest = word[i].length;
    }
  }
  return longest;
}

console.log(longestWord("aku cayang mantannn"));
console.log(longestWord("mantan ngajak balikan hahahhahaha"));
// ['aku', 'cayang', 'mantannn']
