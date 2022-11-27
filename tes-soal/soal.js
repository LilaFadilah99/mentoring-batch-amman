// Soal 1 (Fizz Buzz)
function fizzBuzz(num) {
  let temp = [];
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      // cari angka yg habis dibagi 3 & 5
      temp.push("fizzBuzz");
    } else if (i % 5 === 0) {
      // cari angka yg habis dibagi 5
      temp.push("buzz");
    } else if (i % 3 === 0) {
      // cari angka yg habis dibagi 3
      temp.push("fizz");
    } else {
      // angka selain fizz buzz
      temp.push(i);
    }
  }
  return temp;
}

console.log(fizzBuzz(15));

// soal 2 (reverse / balik kata)

function reverse(string) {
  let balikan = "";
  let number = "";

  for (let i = string.length - 1; i >= 0; i--) {
    // perkondisian. => deteksi mana number mana string
    if (+string[i]) {
      // ubah string menjadi number
      console.log(string[i]);
      number += string[i]; // tampung number
    } else {
      balikan += string[i]; //tampung khusus alphabet (huruf)
    }
  }

  return number + balikan;
}

console.log(reverse("NEG1IE"));

// soal 3 (deteksi kata terpanjang)
function longestWord(string) {
  let word = string.split(" ");
  let longest = 0; //3 > 6 > 8
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest) {
      // cari panjang Word yang paling panjang
      longest = word[i].length;
    }
  }
  return longest;
}

console.log(longestWord("aku cayang mantannn"));
console.log(longestWord("mantan ngajak balikan hahahhahaha"));
