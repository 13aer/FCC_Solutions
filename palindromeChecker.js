function palindrome(str) {
  let aString = str.replace(/\W+|_/g, "").toLowerCase();
  let bString = aString.split("").reverse().join("");
  return (aString === bString)
}

palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama")
palindrome("never odd or even")
palindrome("nope")
