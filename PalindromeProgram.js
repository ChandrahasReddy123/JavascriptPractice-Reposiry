function isPalindrome(str) {
    // 1. Convert to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Reverse the string using built-in array methods
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // 3. Compare the clean string with the reversed string
    return cleanStr === reversedStr;
}

// Test cases
console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true