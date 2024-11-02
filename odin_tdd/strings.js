export function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export function caesarCipher(str, shift) {
  let shiftedString = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    // uppercase letters (A-Z) have ascii ranges 65-90
    // lowercase letters (a-z) have ascii ranges 97-122

    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      // We don't want to shift punctuation or spaces
      shiftedString += str[i];
    } else {
      let newCharCode = charCode + Math.ceil(shift % 26);

      if (charCode >= 97 && newCharCode > 122) {
        newCharCode = newCharCode - 122 + 96;
      }
      if (charCode <= 90 && newCharCode > 90) {
        newCharCode = newCharCode - 90 + 64;
      }

      shiftedString += String.fromCharCode(newCharCode);
    }
  }

  return shiftedString;
}
