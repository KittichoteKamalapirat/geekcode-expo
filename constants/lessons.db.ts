export type Drill = {
  question: string;
  answer: string;
};

export type Lesson = {
  overview: LessonOverview;
  description: string;
  drills: Drill[];
};

export type Level = "easy" | "medium" | "hard";

export type LessonOverview = {
  slug: string;
  title: string;
  level: Level;
};

export const lessonOverviews: LessonOverview[] = [
  {
    slug: "two_sum",
    title: "Two Sum",
    level: "easy",
  },
  {
    slug: "contains_duplicate",
    title: "Contains Duplicate",
    level: "easy",
  },
  {
    slug: "valid_sudoku",
    title: "Valid Sudoku",
    level: "medium",
  },
  {
    slug: "minimum_window_substring",
    title: "Minimum Window Substring",
    level: "hard",
  },
];

export const lessons: Lesson[] = [
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "two_sum"
    ) as LessonOverview,
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
      You may assume that each input would have exactly one solution, and you may not use the same element twice.
      You can return the answer in any order.
      Example 1:
      Input: nums = [2,7,11,15], target = 9
      Output: [0,1]
      Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`,
    drills: [
      {
        question: "What is a brute force solution?",
        answer: "Using 2 nested loops to iterlate over all pais of elements",
      },
      {
        question:
          "What is the time and space complexity of the brute force solution?",
        answer: "Time: O(n), Space: O(1)",
      },
      {
        question: "What Data Structure could be used to optimize the solution?",
        answer: "Hashmap",
      },
      {
        question: "How can we use Hashmap to optimize the solution?",
        answer:
          "Key = Each element in the array, Value = The index of the corresponding element; then for each element check if the difference exists in the hashmap as a key, and that it has a different index from the current element.",
      },
      {
        question:
          "What is the time and space complexity of the optimal solution?",
        answer: "Time: O(n), Space: O(n)",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "contains_duplicate"
    ) as LessonOverview,
    description: `Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
      Example 1:
      Input: nums = [1,2,3,1]
      Output: true
      Copy
      Example 2:
      Input: nums = [1,2,3,4]
      Output: false`,
    drills: [
      {
        question:
          "How many possible pairs of elements are there in an array of size n?",
        answer: "n^2",
      },
      {
        question:
          "What is the time complexity of a brute force approach, where you compare every possible pair in the array to check if there are any duplicates?",
        answer: "O(n^2)",
      },
      {
        question:
          "What data structure can you use to optimize the approach for checking if there are any duplicate elements in the array?",
        answer: "Hashmap or HashSet",
      },
      {
        question:
          "What is the time and space complexity of the solution using a hashmap?",
        answer: "Time: O(n), Space: O(n)",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "valid_sudoku"
    ) as LessonOverview,
    description: `Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
      Each row must contain the digits 1-9 without repetition.
      Each column must contain the digits 1-9 without repetition.
      Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
      Note:
      A Sudoku board (partially filled) could be valid but is not necessarily solvable.
      Only the filled cells need to be validated according to the mentioned rules.`,
    drills: [
      {
        question: "What should be our approach to solve this problem?",
        answer:
          "Validate each filled cell according to the provided Sudoku rules.",
      },
      {
        question:
          "If we need to keep track of the digits seen in each row, column, and 3x3 box, what data structure could be used?",
        answer: "Array or Hashmap",
      },
      {
        question:
          "When storing elements of each row in a Hash Map, what should be the key and the value?",
        answer: "Key: row index, Value: set of digits",
      },
      {
        question:
          "When storing elements of each 3x3 box in a Hash Map, what should be the key and the value?",
        answer: "Key: 3x3 box coordinate, Value: set of digits",
      },
      {
        question:
          "What would be the time and space complexity of our validation algorithm? ",
        answer: "Time: O(n), Space: O(n)",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "minimum_window_substring"
    ) as LessonOverview,
    description: `Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
      The testcases will be generated such that the answer is unique.
      Example 1:
      Input: s = "ADOBECODEBANC", t = "ABC"
      Output: "BANC"
      Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
      Copy
      Example 2:
      Input: s = "a", t = "a"
      Output: "a"
      Explanation: The entire string s is the minimum window.
      Copy
      Example 3:
      Input: s = "a", t = "aa"
      Output: ""
      Explanation: Both 'a's from t must be included in the window.
      Since the largest window of s only has one 'a', return empty string.`,
    drills: [
      {
        question: "What is a brute force solution?",
        answer:
          "Check all substrings of s to find if they contain all characters of t ",
      },
      {
        question: "What Data Structure could be used to optimize the solution?",
        answer: "Hash Map",
      },
      {
        question:
          "Considering an efficient approach, what strategy could we use to solve this problem?",
        answer: "Two Pointers with Sliding Window",
      },
      {
        question:
          "How can we determine if our current window contains all characters of t without iterating through the entire hashmap?",
        answer:
          "By keeping track of two variables: the number of unique characters we have from `t` in our current window and the total unique characters needed from `t` ",
      },
    ],
  },
];
