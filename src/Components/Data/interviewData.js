// API Configuration
export const AI_CONFIG = {
  apiKey: process.env.REACT_APP_AI_API_KEY // Store API key in environment variable
};

export const mockInterviewQuestions = [
  {
    id: 1,
    type: "javascript",
    question: "Create a function that finds the sum of all numbers in an array. Handle empty arrays and non-numeric values appropriately.",
    difficulty: "easy",
    timeLimit: 15,
    sampleCode: `function arraySum(numbers) {
  // Your code here
}`,
    testCases: [
      { input: [1, 2, 3], expected: "6" },
      { input: [], expected: "0" }
    ]
  },
  {
    id: 2,
    type: "javascript",
    question: "Implement a function to reverse a string without using the built-in reverse() method. Consider Unicode characters and empty strings.",
    difficulty: "easy",
    timeLimit: 15,
    sampleCode: `function reverseString(str) {
  // Your code here
}`,
    testCases: [
      { input: "hello", expected: "olleh" },
      { input: "", expected: "" }
    ]
  },
  {
    id: 3,
    type: "javascript",
    question: "Create a function that checks if a string is a palindrome. Ignore spaces, punctuation, and capitalization.",
    difficulty: "medium",
    timeLimit: 20,
    sampleCode: `function isPalindrome(str) {
  // Your code here
}`,
    testCases: [
      { input: "A man a plan a canal Panama", expected: "true" },
      { input: "race a car", expected: "false" }
    ]
  },
  {
    id: 4,
    type: "javascript",
    question: "Implement a function that finds the first non-repeating character in a string. Return null if none exists.",
    difficulty: "medium",
    timeLimit: 20,
    sampleCode: `function firstNonRepeating(str) {
  // Your code here
}`,
    testCases: [
      { input: "leetcode", expected: "l" },
      { input: "aabb", expected: "null" }
    ]
  },
  {
    id: 5,
    type: "javascript",
    question: "Create a function that converts a number to its Roman numeral representation (1 to 3999).",
    difficulty: "hard",
    timeLimit: 30,
    sampleCode: `function toRoman(num) {
  // Your code here
}`,
    testCases: [
      { input: 58, expected: "LVIII" },
      { input: 1994, expected: "MCMXCIV" }
    ]
  }
];