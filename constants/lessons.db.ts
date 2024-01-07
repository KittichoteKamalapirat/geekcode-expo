export type Drill = {
  question: string;
  answer: string;
};

export type Lesson = {
  overview: LessonOverview;
  description: string;
  drills: Drill[];
};

export type Level = 0 | 1 | 2;

export type LessonOverview = {
  slug: string;
  title: string;
  level: Level;
};

export const lessonOverviews: LessonOverview[] = [
  {
    slug: "contains_duplicate",
    title: "Contains Duplicate",
    level: 0,
  },
  {
    slug: "valid_anagram",
    title: "Valid Anagram",
    level: 0,
  },
  {
    slug: "two_sum",
    title: "Two Sum",
    level: 0,
  },
  {
    slug: "valid_sudoku",
    title: "Valid Sudoku",
    level: 1,
  },
  {
    slug: "encode_and_decode_strings",
    title: "Encode and Decode Strings",
    level: 1,
  },
  {
    slug: "longest_consecutive_sequence",
    title: "Longest Consecutive Sequence",
    level: 1,
  },
  {
    slug: "valid_palindrome",
    title: "Valid Palindrome",
    level: 0,
  },
  {
    slug: "two_sum_ii_input_array_is_sorted",
    title: "Two Sum II - Input Array Is Sorted",
    level: 1,
  },
  {
    slug: "3sum",
    title: "3Sum",
    level: 1,
  },
  {
    slug: "container_with_most_water",
    title: "Container With Most Water",
    level: 1,
  },
  {
    slug: "best_time_to_buy_and_sell_stock",
    title: "Best Time to Buy and Sell Stock",
    level: 0,
  },
  {
    slug: "longest_substring_without_repeating_characters",
    title: "Longest Substring Without Repeating Characters",
    level: 1,
  },
  {
    slug: "longest_repeating_character_replacement",
    title: "Longest Repeating Character Replacement",
    level: 2,
  },
  {
    slug: "minimum_window_substring",
    title: "Minimum Window Substring",
    level: 2,
  },
  {
    slug: "valid_parentheses",
    title: "Valid Parentheses",
    level: 0,
  },
  {
    slug: "daily_temperatures",
    title: "Daily Temperatures",
    level: 1,
  },
  {
    slug: "car_fleet",
    title: "Car Fleet",
    level: 1,
  },
  {
    slug: "search_in_rotated_sorted_array",
    title: "Search in Rotated Sorted Array",
    level: 2,
  },
  {
    slug: "find_minimum_in_rotated_sorted_array",
    title: "Find Minimum in Rotated Sorted Array",
    level: 2,
  },
  {
    slug: "koko_eating_bananas",
    title: "Koko Eating Bananas",
    level: 1,
  },
  {
    slug: "reverse_linked_list",
    title: "Reverse Linked List",
    level: 0,
  },
  {
    slug: "merge_two_sorted_lists",
    title: "Merge Two Sorted Lists",
    level: 0,
  },
  // {
  //   slug: "reorder_list",
  //   title: "Reorder List",
  //   level: 1,
  // },
  // {
  //   slug: "remove_nth_node_from_end_of_list",
  //   title: "Remove Nth Node From End of List",
  //   level: 1,
  // },
  // {
  //   slug: "copy_list_with_random_pointer",
  //   title: "Copy List with Random Pointer",
  //   level: 1,
  // },
  // {
  //   slug: "add_two_numbers",
  //   title: "Add Two Numbers",
  //   level: 1,
  // },
  // {
  //   slug: "merge_k_sorted_lists",
  //   title: "Merge K Sorted Lists",
  //   level: 2,
  // },
  // {
  //   slug: "invert_a_binary_tree",
  //   title: "Invert a Binary Tree",
  //   level: 0,
  // },
  // {
  //   slug: "maximum_depth_of_binary_tree",
  //   title: "Maximum Depth of Binary Tree",
  //   level: 0,
  // },
  // {
  //   slug: "diameter_of_binary_tree",
  //   title: "Diameter of Binary Tree",
  //   level: 1,
  // },
  // {
  //   slug: "balanced_binary_tree",
  //   title: "Balanced Binary Tree",
  //   level: 1,
  // },
  // {
  //   slug: "same_tree",
  //   title: "Same Tree",
  //   level: 0,
  // },
  // {
  //   slug: "subtree_of_another_tree",
  //   title: "Subtree of Another Tree",
  //   level: 1,
  // },
  // {
  //   slug: "lowest_common_ancestor_of_a_binary_search_tree",
  //   title: "Lowest Common Ancestor of a Binary Search Tree",
  //   level: 1,
  // },
  // {
  //   slug: "binary_tree_level_order_traversal",
  //   title: "Binary Tree Level Order Traversal",
  //   level: 1,
  // },
  // {
  //   slug: "binary_tree_right_side_view",
  //   title: "Binary Tree Right Side View",
  //   level: 0,
  // },
  // {
  //   slug: "count_good_nodes_in_binary_tree",
  //   title: "Count Good Nodes in Binary Tree",
  //   level: 0,
  // },
  // {
  //   slug: "number_of_islands",
  //   title: "Number of Islands",
  //   level: 1,
  // },
  // {
  //   slug: "combination_sum",
  //   title: "Combination Sum",
  //   level: 1,
  // },
  // {
  //   slug: "house_robber",
  //   title: "House Robber",
  //   level: 1,
  // },
  // {
  //   slug: "rotate_image",
  //   title: "Rotate Image",
  //   level: 1,
  // },
  // {
  //   slug: "spiral_matrix",
  //   title: "Spiral Matrix",
  //   level: 1,
  // },
  // {
  //   slug: "insert_interval",
  //   title: "Insert Interval",
  //   level: 1,
  // },
  // {
  //   slug: "merge_intervals",
  //   title: "Merge Intervals",
  //   level: 1,
  // },
  // {
  //   slug: "non_overlapping_intervals",
  //   title: "Non Overlapping Intervals",
  //   level: 1,
  // },
  // {
  //   slug: "meeting_rooms",
  //   title: "Meeting Rooms",
  //   level: 1,
  // },
  // {
  //   slug: "meeting_rooms_ii",
  //   title: "Meeting Rooms II",
  //   level: 1,
  // },
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
          "How can a HashSet be used to efficiently check for duplicates in the array?",
        answer: `- Iterate through each element in the array and try to insert it into the HashSet. If an insertion fails (the element already exists in the HashSet), return true to indicate a duplicate was found.
        - Insert all elements from the array into the HashSet without checking for duplicates during this process. After all insertions, compare the size of the HashSet with the size of the array. If the HashSet size is smaller, return true to indicate a duplicate exists.`,
      },
      {
        question:
          "What is the time and space complexity of the solution using a hashmap?",
        answer: "Time: O(n), Space: O(n)",
      },
      {
        question: "See code solution",
        answer: `
        class Solution:
          def containsDuplicate(self, nums: List[int]) -> bool:
              hashset = set()

              for n in nums:
                  if n in hashset:
                      return True
                  hashset.add(n)
              return False
`,
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
      (overview) => overview.slug === "valid_anagram"
    ) as LessonOverview,
    description: `
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Copy
Example 2:
Input: s = "rat", t = "car"
Output: false
Copy
Constraints:
1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
`,
    drills: [
      {
        question: "What is the primary characteristic of an anagram?",
        answer: "Both words have the same letters, in the same quantities.",
      },
      {
        question:
          "Given the nature of anagrams, what methods can be used to check if two words are anagrams?",
        answer:
          "Convert each word to an array, sort the arrays, and then compare them.",
      },
      {
        question:
          "What is the time complexity of the solution that sorts and then compares the arrays?",
        answer: "O(n log n)",
      },
      {
        question:
          "Given the nature of anagrams and the constraints of the problem, can you improve upon the overall time complexity of the sorting solution?",
        answer: "Yes, by using a hashmap to store the count of letters.",
      },
      {
        question:
          "If using a hashmap to check if two words are anagrams, what would be the keys and the values in the hashmap?",
        answer: "Keys = Letters, Values = Count of each letter",
      },
      {
        question:
          "What is the time and space complexity of the solution using a hashmap to count and compare the frequency of each letter?",
        answer: "Time complexity: O(n), Space complexity: O(n)",
      },
      {
        question: "Code Solution",
        answer: `
  class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        countS, countT = {}, {}

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[t[i]] = 1 + countT.get(t[i], 0)
        return countS == countT`,
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
        question:
          "What kind of data structure could help us track the frequency of each character in the current window of our string?",
        answer: "Hash Map",
      },
      {
        question:
          "Considering an efficient approach, what strategy could we use to solve this problem?",
        answer: "Two Pointers with Sliding Window",
      },
      {
        question:
          "What should we do if our current window doesn't contain all characters of t?",
        answer: "Expand the window from the right",
      },
      {
        question:
          "If our current window contains all characters of t, what should we do to find the smallest valid window?",
        answer: "Shrink the window from the left",
      },
      {
        question:
          "How can we determine if our current window contains all characters of t without iterating through the entire hashmap?",
        answer:
          "By keeping track of two variables: the number of unique characters we have from `t` in our current window and the total unique characters needed from `t` ",
      },
      {
        question:
          "Given that the input strings only consist of lowercase or uppercase English characters, what is the time and space complexity of the sliding window approach below? Assume n is the length of s and m is the length of t.",
        answer: "Time complexity: O(n+m), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
          def minWindow(self, s: str, t: str) -> str:
              if t == "":
                  return ""
      
              countT, window = {}, {}
              for c in t:
                  countT[c] = 1 + countT.get(c, 0)
      
              have, need = 0, len(countT)
              res, resLen = [-1, -1], float("infinity")
              l = 0
              for r in range(len(s)):
                  c = s[r]
                  window[c] = 1 + window.get(c, 0)
      
                  if c in countT and window[c] == countT[c]:
                      have += 1
      
                  while have == need:
                      # update our result
                      if (r - l + 1) < resLen:
                          res = [l, r]
                          resLen = r - l + 1
                      # pop from the left of our window
                      window[s[l]] -= 1
                      if s[l] in countT and window[s[l]] < countT[s[l]]:
                          have -= 1
                      l += 1
              l, r = res
              return s[l : r + 1] if resLen != float("infinity") else ""`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "encode_and_decode_strings"
    ) as LessonOverview,
    description: `Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
Please implement encode and decode
Example1
Input: dummy_input = ["Hello", "World"]
Output: ["Hello", "World"]
Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Copy
Example2
Input: dummy_input = [""]
Output: [""]
Copy
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] contains any possible characters out of 256 valid ASCII characters
`,
    drills: [
      {
        question:
          "Given the constraint that strs[i] can contain any valid ASCII characters, including special ones, which encoding strategy should we use to ensure that our encoded message can be correctly decoded?",
        answer:
          "Use a length-prefix followed by a special character for each string in strs.",
      },
      {
        question:
          "What should the prefix look like to make the encoding efficient?",
        answer:
          "Prefix each string with its individual length followed by a delimiter.",
      },
      {
        question:
          "What should be the delimiter between the length prefix and the actual string content?",
        answer: "The delimiter should be a non-integer character.",
      },
      {
        question:
          "We can implement the encode and decode methods using # as the delimiter, as follow. What is the time and space complexity of the encode and decode methods? Assume n is the total length of the string.",
        answer: "",
      },

      {
        question: "Code Solution",
        answer: `class Codec:
    def encode(self, strs: List[str]) -> str:
        res = ""
        for s in strs:
            res += str(len(s)) + "#" + s
        return res

    def decode(self, s: str) -> List[str]:
        res, i = [], 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])
            res.append(s[j + 1: j + 1 + length])
            i = j + 1 + length
        return res`,
      },
      {
        question: "What is the time and space complexity of the method",
        answer: "Time complexity: O(n), Space complexity: O(n)",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "longest_consecutive_sequence"
    ) as LessonOverview,
    description: `Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Copy
Constraints:
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9`,
    drills: [
      {
        question:
          "For a given array of integers, what is the time complexity of finding the length of the longest consecutive sequence using sorting?",
        answer: "O(n log n)",
      },
      {
        question:
          "Suppose we are counting the length of a sequence starting at an arbitrary value, say n = 1. To extend this sequence, we need to efficiently check for the existence of the next integer (n + 1), regardless of its index in the original array. Which data structure would best serve this purpose?",
        answer: "HashSet",
      },
      {
        question:
          "Consider the array [1, 2, 3, 4, 5, 6]. If we naively iterate through this array, treating each element n as the potential start of a sequence, we would check for the existence of each subsequent number n + 1. What would be the time complexity of such an approach?",
        answer: "O(n^2)",
      },
      {
        question:
          "Consider the array [100, 4, 200, 1, 3, 2]. This array contains two sequences: [1, 2, 3, 4] and [100, 200]. What common trait do the starting elements 1 and 100 share, which suggests they are the beginning of these sequences?",
        answer: "The element (n - 1) does not exist in the array",
      },
      {
        question:
          "Knowing that an element 'n' is the start of a sequence if (n - 1) does not exist in the array, how could we efficiently solve this problem using a hashset?",
        answer:
          "Add all elements to the hashset. Then, for each element 'n', if (n - 1) is not in the hashset, check and count the longest sequence starting from 'n'",
      },
      {
        question:
          "What is the time and space complexity of the optimal solution using a HashSet and avoiding unnecessary checks?",
        answer: "Time complexity: O(n), Space complexity: O(n)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in numSet:
            # check if its the start of a sequence
            if (n - 1) not in numSet:
                length = 1
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "two_sum_ii_input_array_is_sorted"
    ) as LessonOverview,
    description: `Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
    Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
    The tests are generated such that there is exactly one solution. You may not use the same element twice.
    Your solution must use only constant extra space.
    Example 1:
    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
    Copy
    Example 2:
    Input: numbers = [2,3,4], target = 6
    Output: [1,3]
    Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
    Copy
    Example 3:
    Input: numbers = [-1,0], target = -1
    Output: [1,2]
    Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
    Copy
    Constraints:
    2 <= numbers.length <= 3 * 104
    1000 <= numbers[i] <= 1000
    numbers is sorted in non-decreasing order.
    1000 <= target <= 1000
    The tests are generated such that there is exactly one solution.`,
    drills: [
      {
        question:
          "Given nums = [3, 4, 7, 9] and target = 11, what would the return value be if we consider the array to be 1-indexed?",
        answer: "[2, 3]",
      },
      {
        question:
          "What would be the brute force solution to find two numbers in the array that add up to the target?",
        answer:
          "Using two nested loops to iterate over all pairs of elements in the array and checking if their sum equals the target",
      },
      {
        question:
          "Given that the array is already sorted in non-decreasing order, which of these statements are true?",
        answer: `- We can use a binary search approach to find a pair of elements that sum to the target.
- We can use a two-pointer approach to find a pair of elements that sum to the target.`,
      },
      {
        question:
          "If you have two pointers, one starting at the beginning of the array (left pointer) and another at the end of the array (right pointer), and the sum of the numbers at these two pointers is less than the target, which action would you take?",
        answer: "Increment the left pointer",
      },
      {
        question:
          "If the sum of the numbers at the low and high pointers is greater than the target, which action would you take?",
        answer: "Decrement the right pointer",
      },
      {
        question:
          "What are the time and space complexities of the two-pointer solution to this problem?",
        answer: "Time complexity: O(n), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def twoSum(self, numbers: List[int], target: int) -> List[int]:
            l, r = 0, len(numbers) - 1
            while l < r:
                sum = numbers[l] + numbers[r]
                if sum < target:
                    l += 1
                elif sum > target:
                    r -= 1
                else:
                    return [l+1, r+1]
    
    `,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "3sum"
    ) as LessonOverview,
    description: `Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
    Notice that the solution set must not contain duplicate triplets.
    Example 1:
    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation:
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.
    Copy
    Example 2:
    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.
    Copy
    Example 3:
    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.
    Copy
    Constraints:
    3 <= nums.length <= 3000
    10^5 <= nums[i] <= 10^5`,
    drills: [
      {
        question:
          "What is a brute-force approach to solving this problem and what is the time complexity of this approach?",
        answer:
          "Iterate through all possible combinations of three elements, O(n^3) time complexity",
      },
      {
        question: "How can we find the optimal solution by using sorting?",
        answer:
          "Sort the array and use two pointers, decreasing the time complexity to O(n^2)",
      },
      {
        question:
          "How can we ensure that our solution does not contain duplicate triplets?",
        answer: `- By checking if a triplet has already been added to a hash set
        - By skipping over duplicate elements in the sorted array`,
      },
      {
        question:
          "How does the two-pointer approach help in eliminating duplicates in the output?",
        answer:
          "By skipping over duplicate elements in the sorted array after finding a valid triplet, and also when choosing the first number in the triplet",
      },
      {
        question:
          "Given the optimized solution using sorting and a two-pointer approach, what is the overall time and space complexity?",
        answer: "Time complexity: O(n^2), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            res = []
            nums.sort()
           
            for i, a in enumerate(nums):
                if i > 0 and a == nums[i - 1]:
                    # We already used nums[i] as the
                    # first element, so skip it
                    continue
    
                # Use two pointers on the remaining
                # sorted subarray to solve a + b + c = 0
                l, r = i + 1, len(nums) - 1
                while l < r:
                    threeSum = a + nums[l] + nums[r]
                    if threeSum > 0:
                        r -= 1
                    elif threeSum < 0:
                        l += 1
                    else:
                        # Solution found
                        res.append([a, nums[l], nums[r]])
                        l += 1
                        while nums[l] == nums[l - 1] and l < r:
                            # Eliminate duplicates by incrementing
                            # left ptr until new nums[l] is found
                            l += 1
            return res`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "container_with_most_water"
    ) as LessonOverview,
    description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
    Find two lines that together with the x-axis form a container, such that the container contains the most water.
    Return the maximum amount of water a container can store.
    Notice that you may not slant the container.
    
    Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Copy
Example 2:
Input: height = [1,1]
Output: 1
Copy
Constraints:
n == height.length
2 <= n <= 10^5
0 <= height[i] <= 10^4`,
    drills: [
      {
        question:
          "The problem is about finding two lines that together with the x-axis form a container such that the container contains the most water. Which of the following is the key factor that determines the amount of water a container can hold?",
        answer: `- The height of the shortest line 
- The distance between the two lines`,
      },
      {
        question:
          "Consider a brute-force solution where you calculate the area for all possible pairs of lines. What would be the time complexity of such an approach?",
        answer: "O(n^2) ",
      },
      {
        question:
          "When considering the parameters that affect the amount of water a container can hold, we know that the distance between the two lines is important. Given this, where should we initially place the two pointers in order to maximize the chance of finding the largest possible area?",
        answer: "At the two ends of the array",
      },
      {
        question:
          "Given the array height = [1,8,6,2,5,4,8,3,7], we start with the widest container, i.e., the first and the last line. Why is it impossible for us to find a new maximum area by leaving the left pointer at index = 0, and shifting the right pointer inwards?",
        answer: "Because the new container would be narrower but not taller",
      },
      {
        question:
          "The two-pointer technique ensures that we don't need to enumerate all n^2 combinations of pointers to find the maximal solution. How does the technique achieve this?",
        answer: `- By ensuring that every element in the array is guaranteed to have a pointer land on it at some point.
- By skipping combinations that will never lead to a more maximal solution.`,
      },
      {
        question:
          "What is the time and space complexity of the solution using the two-pointer technique?",
        answer: "Time complexity: O(n), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def maxArea(self, height: List[int]) -> int:
            l, r = 0, len(height) - 1
            res = 0
    
            while l < r:
                res = max(res, min(height[l], height[r]) * (r - l))
                if height[l] < height[r]:
                    l += 1
                elif height[r] <= height[l]:
                    r -= 1
               
            return res`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "best_time_to_buy_and_sell_stock"
    ) as LessonOverview,
    description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
    Example 1:
    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell`,
    drills: [
      {
        question: "What is the brute-force approach to solving this problem?",
        answer:
          "Calculating the profit for each valid pair of buying and selling days, and finding the maximum profit",
      },
      {
        question:
          "We can also solve this by iterating through the array once, while keeping track of just two values. What two values should we keep track of to maximize the profit?",
        answer:
          "The minimum price found so far and the maximum profit found so far",
      },
      {
        question:
          "How will we use the minimum price found so far and the maximum profit found so far to efficiently solve this problem?",
        answer:
          "Iterate through the prices, if we find a new minimum price then update it. Compute the profit between the current price and the minimum price, if it exceeds the maximum profit, then update it",
      },
      {
        question: "What is the time complexity of the optimal solution?",
        answer: "O(n)",
      },
      {
        question: "What is the space complexity of the optimal solution?",
        answer: "O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def maxProfit(self, prices: List[int]) -> int:
            res = 0
            
            lowest = prices[0]
            for price in prices:
                if price < lowest:
                    lowest = price
                res = max(res, price - lowest)
            return res`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) =>
        overview.slug === "longest_substring_without_repeating_characters"
    ) as LessonOverview,
    description: `Given a string s, find the length of the longest
    substring
    without repeating characters.
    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    Copy
    Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    Copy
    Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
    Copy
    Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.`,
    drills: [
      {
        question: "What is a brute force solution to this problem?",
        answer:
          "Generate all possible substrings and check each for repeated characters",
      },
      {
        question:
          "As we build a substring, what kind of data structure can we use to keep track of the characters we have already seen?",
        answer: "Hash Set",
      },
      {
        question: "What approach can we use to solve this problem efficiently?",
        answer: "Sliding Window",
      },
      {
        question:
          "What can we do when we encounter a repeating character while expanding our window?",
        answer:
          "Shrink the window from the left until the repeating character is no longer in the window",
      },
      {
        question:
          "Considering the constraint that s consists of English letters, digits, symbols, and spaces, what is the maximum possible size of our window?",
        answer: "95",
      },
      {
        question:
          "What is the time and space complexity of the sliding window approach for this problem? Assume n is the length of the string, and m is the number of distinct characters in the string.",
        answer: "Time complexity: O(n), Space complexity: O(m)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def lengthOfLongestSubstring(self, s: str) -> int:
            char_set = set()
            l, max_len = 0, 0
            
            for r in range(len(s)):
                while s[r] in char_set:
                    # Repeating char detected, shrink window
                    char_set.remove(s[l])
                    l += 1
                char_set.add(s[r])
                max_len = max(max_len, r - l + 1)
            return max_len`,
      },
    ],
  },

  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "longest_repeating_character_replacement"
    ) as LessonOverview,
    description: `You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
    Return the length of the longest substring containing the same letter you can get after performing the above operations.
    Example 1:
    Input: s = "ABAB", k = 2
    Output: 4
    Explanation: Replace the two 'A's with two 'B's or vice versa.
    Copy
    Example 2:
    Input: s = "AABABBA", k = 1
    Output: 4
    Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
    The substring "BBBB" has the longest repeating letters, which is 4.
    There may exists other ways to achive this answer too.
    Copy
    Constraints:
    1 <= s.length <= 105
    s consists of only uppercase English letters.
    0 <= k <= s.length`,
    drills: [
      {
        question: "What is a brute force solution to this problem?",
        answer:
          "For each substring, find the frequency of the most common character (maxf) and check if the length of the substring minus maxf is less than or equal to k",
      },
      {
        question:
          "What kind of data structure could help us track the frequency of each character in the current window of our string?",
        answer: `- Array
- Hash Map`,
      },
      {
        question:
          "Considering an efficient approach, what strategy could we use to solve this problem efficiently?",
        answer: "Two pointers with sliding window",
      },
      {
        question:
          "If our current window size minus the frequency of the most common character is greater than k, what should we do?",
        answer: "Shrink the window from the left",
      },
      {
        question:
          "Considering that the given string only contains uppercase English letters (from A to Z), what would be the time complexity of finding the most frequent character in the window?",
        answer: "O(1)",
      },
      {
        question:
          "What is the time and space complexity of the sliding window approach for this problem? Assume n is the length of the string.",
        answer: "Time complexity: O(n), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def characterReplacement(self, s: str, k: int) -> int:
            res = 0
            l = 0
            count = [0] * 26
            for r in range(len(s)):
                count[ord(s[r]) - ord('A')] += 1
                while (r - l + 1) - max(count) > k:
                    count[ord(s[l]) - ord('A')] -= 1
                    l += 1
                res = max(res, r - l + 1)
            return res`,
      },
    ],
  },

  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "valid_parentheses"
    ) as LessonOverview,
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
    Example 1:
    Input: s = "()[]{}"
    Output: true
    Copy
    Example 2:
    Input: s = "(]"
    Output: false
    Copy
    Constraints:
    1 <= s.length <= 10^4
    s consists of parentheses only '()[]{}'`,
    drills: [
      {
        question: `Consider the string s = "( [ ) ]" . Is this string valid?`,
        answer: "No",
      },
      {
        question:
          "At any point in the string, we can only close the most recent open bracket, and after we close a bracket we then want to close the next most recent open bracket. Which data structure would be most useful here?",
        answer: "Stack",
      },
      {
        question:
          "Assume we iterate through the string s and we maintain a stack. What should we do when we encounter an open bracket?",
        answer: "Push it onto the stack",
      },
      {
        question:
          "Assume we iterate through the string s and we maintain a stack. What should we do when we encounter a closing bracket?",
        answer:
          "Pop the top element from the stack and check if it matches with the current closing bracket",
      },
      {
        question:
          "After reaching the end of s, how do we know if the string is valid?",
        answer: "If the stack is empty",
      },
      {
        question:
          "What is the time and space complexity of the solution using a stack? Assume the length of the input string is n.",
        answer: "Time: O(n), Space: O(n)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def isValid(self, s: str) -> bool:
            Map = {")": "(", "]": "[", "}": "{"}
            stack = []
    
            for c in s:
                if c not in Map:
                    stack.append(c)
                    continue
                if not stack or stack[-1] != Map[c]:
                    return False
                stack.pop()
    
            return not stack`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "daily_temperatures"
    ) as LessonOverview,
    description: `Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
    Example 1:
    Input: temperatures = [73,74,75,71,69,72,76,73]
    Output: [1,1,4,2,1,1,0,0]
    Copy
    Example 2:
    Input: temperatures = [30,40,50,60]
    Output: [1,1,1,0]
    Copy
    Example 3:
    Input: temperatures = [30,60,90]
    Output: [1,1,0]
    Copy
    Constraints:
    1 <= temperatures.length <= 10^5
    30 <= temperatures[i] <= 100`,
    drills: [
      {
        question: "What is a brute force solution to this problem?",
        answer:
          "Iterate through the temperatures list from beginning to end, for each day check all future days to see if they're warmer",
      },
      {
        question:
          "After we find a warmer temperature, we no longer have to keep track of the previous less warm temperatures. With this observation, which data structure may help us optimize our solution?",
        answer: "Stack",
      },
      {
        question:
          "Should we store the temperature value or the index in the stack?",
        answer: "Index",
      },
      {
        question:
          "In our optimized solution using a stack, when should we pop a temperature from the stack?",
        answer: "When we encounter a warmer temperature",
      },
      {
        question: "What will always be true about our stack?",
        answer: "The stack is always in decreasing order of temperature",
      },
      {
        question:
          "What is the time and space complexity of the stack approach for this problem? Assume n is the length of the temperatures list.",
        answer: "Time complexity: O(n), Space complexity: O(n)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
            n = len(temperatures)
            res = [0] * n
            stack = []
            for i in range(n):
                while stack and temperatures[i] > temperatures[stack[-1]]:
                    j = stack.pop()
                    res[j] = i - j
                stack.append(i)
            return res`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "car_fleet"
    ) as LessonOverview,
    description: `There are n cars going to the same destination along a one-lane road. The destination is target miles away.
    You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour).
    A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position).
    A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.
    If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.
    Return the number of car fleets that will arrive at the destination.
    Example 1:
    Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
    Output: 3
    Explanation:
    The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12.
    The car starting at 0 does not catch up to any other car, so it is a fleet by itself.
    The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
    Note that no other cars meet these fleets before the destination, so the answer is 3.
    Copy
    Example 2:
    Input: target = 10, position = [3], speed = [3]
    Output: 1
    Explanation: There is only one car, hence there is only one fleet.
    Copy
    Example 3:
    Input: target = 100, position = [0,2,4], speed = [4,2,1]
    Output: 1
    Explanation:
    The cars starting at 0 (speed 4) and 2 (speed 2) become a fleet, meeting each other at 4. The fleet moves at speed 2.
    Then, the fleet (speed 2) and the car starting at 4 (speed 1) become one fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
    Copy
    Constraints:
    n == position.length == speed.length
    1 <= n <= 10^5
    0 < target <= 10^6
    0 <= position[i] < target
    All the values of position are unique.
    0 < speed[i] <= 10^6`,
    drills: [
      {
        question:
          "Based on the first example, if two cars meet exactly at the target destination, do they count as a single car fleet?",
        answer: "Yes",
      },
      {
        question:
          "Given that the relative position of cars will never change, how can we simplify the problem?",
        answer: "Sort the cars by their position",
      },
      {
        question:
          "Given the math formula Speed=Distance/Time, how can we calculate the time it takes for the car to reach the target destination?",
        answer: "Time = Distance / Speed",
      },
      {
        question:
          "If car1 is behind car2, but we calculate that car1 will reach the destination before car2, then what's true about car1 and car2?",
        answer: "car1 and car2 form a car fleet",
      },
      {
        question: "If two cars form a fleet, what is the speed of that fleet?",
        answer: "The speed of the slower car",
      },
      {
        question:
          "Given that we don't need to keep track of faster cars that show up earlier in the array, which data structure will be most useful, as we iterate through the sorted array?",
        answer: "Stack",
      },
      {
        question:
          "What is the time and space complexity of the following solution for the problem? Assume n is the length of the position and speed lists.",
        answer: "Time complexity: O(n log n), Space complexity: O(n)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
            pair = [(p, s) for p, s in zip(position, speed)]
    
            stack = []
            for p, s in sorted(pair):
                time = (target - p) / s
                while stack and time >= stack[-1]:
                    # A prev car reaches target before or at same time
                    # Thus they form a fleet, pop the faster car
                    stack.pop()
                stack.append(time)
            return len(stack)`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "search_in_rotated_sorted_array"
    ) as LessonOverview,
    description: `There is an integer array nums sorted in ascending order (with distinct values).
    Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
    Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
    You must write an algorithm with O(log n) runtime complexity.
    Example 1:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4
    Copy
    Example 2:
    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1
    Copy
    Constraints:
    1 <= nums.length <= 5000
    -10^4 <= nums[i] <= 10^4
    All values of nums are unique.
    nums is an ascending array that is possibly rotated.
    -10^4 <= target <= 10^4`,
    drills: [
      {
        question:
          "Suppose we have a normal sorted integer array. What is normally the optimal time complexity to find an element in it?",
        answer: "O(log n)",
      },
      {
        question:
          "Now consider a sorted array that has been rotated at an unknown index. What is the time complexity of the simplest (but non-optimal) solution to find an element in this array?",
        answer: "O(n)",
      },
      {
        question:
          "In a typical binary search, what is the first element we check to see if it's equal to the target?",
        answer: "The middle element in the array",
      },
      {
        question:
          "As we search the rotated sorted array, how can we use the current middle element to determine which half of the array we are currently inside?",
        answer: `- Compare the middle element with nums[0].
- Compare the middle element with nums[length - 1].`,
      },
      {
        question:
          "How can we determine if the target element belongs to the left or right portion of the array?",
        answer: "Compare the target with nums[0] or nums[length - 1]",
      },
      {
        question:
          "If we are in the left sorted half of the array, but the target element belongs in the right sorted half, where should we search relative to the mid pointer?",
        answer: "To the right of mid",
      },
      {
        question:
          "If we are in the right sorted half of the array, but the target element belongs in the left sorted half, where should we search relative to the mid pointer?",
        answer: "To the left of mid",
      },
      {
        question:
          "If we are in the appropriate half of the array, can we simply perform a normal binary search?",
        answer: "Yes",
      },
      {
        question:
          "To summarize, the below code will solve this problem using an augmented binary search solution. What is the time and space complexity?",
        answer: "Time complexity: O(log n), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] >= nums[0] and target < nums[0]:
                # We're in left sorted array
                # But target is in right sorted array 
                left = mid + 1
            elif nums[mid] < nums[0] and target >= nums[0]:
                # We're in right sorted array
                # But target is in left sorted array 
                right = mid - 1
            # Otherwise: Normal binary search
            elif target > nums[mid]:
                left = mid + 1
            elif target < nums[mid]:
                right = mid - 1
            else:
                return mid
            
            return -1`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "find_minimum_in_rotated_sorted_array"
    ) as LessonOverview,
    description: `Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0, 1, 2, 4, 5, 6, 7] might become:
[4, 5, 6, 7, 0, 1, 2] if it was rotated 4 times.
[0, 1, 2, 4, 5, 6, 7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum element of this array.
You must write an algorithm that runs in O(log n) time.
Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Copy
Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Copy
Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
Copy
Constraints:
n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.`,
    drills: [
      {
        question:
          "Suppose we have a normal sorted integer array. What is the time complexity to find the minimum element in this array?",
        answer: "O(1)",
      },
      {
        question:
          "Now consider a sorted array that has been rotated at an unknown index. What is the time complexity of the simplest (but non-optimal) solution to find the minimum element in this array?",
        answer: "O(n) by performing a linear search",
      },
      {
        question:
          "In a typical binary search, what is the first element we check to see if it's the target?",
        answer: "The middle element in the array",
      },
      {
        question:
          "If the array is [4,5,6,1,2,3] In this case, our target is the minimum element. Which portion of the array will it be found?",
        answer: "The right sorted portion",
      },
      {
        question:
          "If the array is [4,5,6,1,2,3] and the left pointer is at 1 (index 3) and right point is at 3 (index 5). If the current portion of our search range (1,2,3 portion) from left to right is already sorted, e.g. nums[l] < nums[r], then which element is the minimum of the current search range?",
        answer:
          "nums[l] (In a normal sorted array, the leftmost element is the minimum. In our case, if the original array is rotated n times, the minimum will be nums[0]. Alternatively, as we run binary search, if the current subarray of our search is a normal sorted array, we can end the binary search.)",
      },
      {
        question:
          "If the array is [4,5,6,1,2,3] and the left pointer is at 1 (index 3) and right point is at 3 (index 5). And if the middle element ((l+r)/2) is less than the first element of the array, where is the minimum element?",
        answer: `At the mid point or to the left of mid. 
        If the middle element is less than the first element, it means the middle element is in the right sorted portion. The smallest element will always be found in the right sorted portion, so either the middle element is the minimum or the minimum is to the left of mid.`,
      },
      {
        question: "Code Solution",
        answer: `def findMin(self, nums: List[int]) -> int:
        res = nums[0]
        l, r = 0, len(nums) - 1
    
        while l <= r:
            if nums[l] < nums[r]:
                return min(res, nums[l])
    
            m = (l + r) // 2
            res = min(res, nums[m])
            if nums[m] >= nums[l]:
                # We are in the left sorted portion, move right
                l = m + 1
            else:
                # We are in the right sorted portion, move left
                r = m - 1
        return res`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "koko_eating_bananas"
    ) as LessonOverview,
    description: `Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
    Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
    Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
    Return the minimum integer k such that she can eat all the bananas within h hours.
    Example 1:
    Input: piles = [3,6,7,11], h = 8
    Output: 4
    Copy
    Constraints:
    1 <= piles.length <= 10^4
    piles.length <= h <= 10^9
    1 <= piles[i] <= 10^9`,
    drills: [
      {
        question:
          "What is the maximum possible eating speed k that Koko would ever need?",
        answer: "Maximum element in piles",
      },
      {
        question:
          "In a brute-force approach, starting from the maximum number of bananas in a pile, how would Koko's eating speed k change until she finds the smallest possible k that allows her to eat all bananas in h hours?",
        answer: "Start from the maximum number in the pile, decrement by 1",
      },
      {
        question:
          "What is the time complexity of the brute-force approach, where m is the maximum number of bananas in a pile, and n is the number of piles?",
        answer: "O(m * n)",
      },
      {
        question:
          "Considering the return value k will be in the range of 1 ≤ k ≤ max(piles) and that we are trying to minimize k, which algorithm can be used to optimize the brute force solution?",
        answer: "Binary search",
      },
      {
        question:
          "How can we apply binary search to optimize the brute force solution?",
        answer:
          "Start at the midpoint of the maximum number of bananas in a pile and the minimum, then adjust upward or downward based on whether Koko can eat all the bananas within h hours",
      },
      {
        question:
          "What are the time and space complexity of the solution using binary search, where m is the maximum number of bananas in a pile, and n is the number of piles?",
        answer: "Time complexity: O(n log m), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def minEatingSpeed(self, piles: List[int], h: int) -> int:
            left, right= 1, max(piles)
            res = right
    
            while left <= right:
                k = (left + right) // 2
                koko_h = 0
    
                for p in piles:
                    koko_h += math.ceil(p/k)
                
                if koko_h > h:
                    left = k + 1
                else:
                    right = k - 1
                    res = min(res, k)
    
            return res`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "reverse_linked_list"
    ) as LessonOverview,
    description: `Given the head of a singly linked list, reverse the list, and return the reversed list.
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Copy
Example 2:
Input: head = [1,2]
Output: [2,1]
Copy
Example 3:
Input: head = []
Output: []
Copy
Constraints:
The number of nodes in the list is the range [0, 5000].
5000 <= Node.val <= 5000`,
    drills: [
      {
        question:
          "If we have a linked list with only one node, what will be the result after reversing it?",
        answer: "The same linked list",
      },
      {
        question:
          "In order to reverse a linked list, we need to change the direction of which part of each node?",
        answer: "The node's 'next' reference",
      },
      {
        question:
          "What could be a simple, but also optimal approach to reverse a linked list?",
        answer:
          "Traverse the list once, and for each node, set its 'next' to the previous node",
      },
      {
        question:
          "What is the time and space complexity of the optimal approach?",
        answer: "Time complexity: O(n), Space complexity: O(1) ",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def reverseList(self, head: ListNode) -> ListNode:
            prev, curr = None, head
            
            while curr: 
                temp = curr.next
                curr.next = prev
                prev = curr
                curr = temp
            return prev`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "merge_two_sorted_lists"
    ) as LessonOverview,
    description: `You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Copy
Example 2:
Input: list1 = [], list2 = []
Output: []
Copy
Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
Copy
Constraints:
The number of nodes in both lists is in the range [0, 50].
100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.`,
    drills: [
      {
        question:
          "If we have two sorted linked lists, where should we start comparing elements to begin merging them into a single sorted list?",
        answer: "From the first element of each list",
      },
      {
        question:
          "When comparing the first nodes of each list, which node should we insert into the output list?",
        answer: "The node with the smaller value",
      },
      {
        question:
          "How should we proceed after inserting a node from one of the lists into the output list?",
        answer:
          "Shift to the next node in the list from which we inserted the node and repeat the comparison",
      },
      {
        question:
          "What if one list becomes empty (all of its nodes are used up) before the other during the merging process?",
        answer:
          "Append the remaining nodes in the other list to the merged list",
      },
      {
        question:
          "What is the time complexity and space complexity of this approach? Assume m and n are the lengths of list1 and list2 respectively.",
        answer: "Time complexity: O(m+n), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(0)
        current = dummy

        while l1 and l2:
            if l1.val <= l2.val:
                current.next = l1
                l1 = l1.next
            else:
                current.next = l2
                l2 = l2.next
            current = current.next

        current.next = l1 if l1 is not None else l2
        return dummy.next`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "valid_palindrome"
    ) as LessonOverview,
    description: `Valid palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Copy
Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Copy
Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
Copy
Constraints:
1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.
    `,
    drills: [
      {
        question:
          "Given a string, what is a crucial step in the initial preprocessing to determine whether it is a palindrome?",
        answer: "Convert the string to lowercase",
      },
      {
        question:
          "After converting the string to lowercase, what should be the next step?",
        answer: "Remove all non-alphanumeric characters",
      },
      {
        question:
          "Once the string has been converted to lowercase and all non-alphanumeric characters have been removed, what is the final step to determine if it's a palindrome?",
        answer: "Check if the string is equal to its reverse",
      },
      {
        question:
          "What is the time and space complexity of the approach where we create a new reversed string to compare?",
        answer: "Time complexity: O(n), Space complexity: O(n)",
      },
      {
        question:
          "Is there a way to check if a string is a palindrome without creating a new string for the reversed version?",
        answer: "Yes, by using two pointers",
      },
      {
        question:
          "What are the time and space complexities of the two-pointer approach to check if a string is a palindrome?",
        answer: "Time complexity: O(n), Space complexity: O(1)",
      },
      {
        question: "Code Solution",
        answer: `class Solution:
        def isPalindrome(self, s: str) -> bool:
            l, r = 0, len(s) - 1
            while l < r:
                while l < r and not self.alphanum(s[l]):
                    l += 1
                while l < r and not self.alphanum(s[r]):
                    r -= 1
                if s[l].lower() != s[r].lower():
                    return False
                l += 1
                r -= 1
            return True
    
        # Could write own alpha-numeric function
        def alphanum(self, c):
            return (
                ord("A") <= ord(c) <= ord("Z")
                or ord("a") <= ord(c) <= ord("z")
                or ord("0") <= ord(c) <= ord("9")
            )`,
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "reorder_list"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "remove_nth_node_from_end_of_list"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "copy_list_with_random_pointer"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "add_two_numbers"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "merge_k_sorted_lists"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "invert_a_binary_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "maximum_depth_of_binary_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "diameter_of_binary_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "diameter_of_binary_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "balanced_binary_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "same_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "subtree_of_another_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) =>
        overview.slug === "lowest_common_ancestor_of_a_binary_search_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "binary_tree_level_order_traversal"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "binary_tree_right_side_view"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "count_good_nodes_in_binary_tree"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "number_of_islands"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "combination_sum"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "house_robber"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "rotate_image"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },
  {
    overview: lessonOverviews.find(
      (overview) => overview.slug === "spiral_matrix"
    ) as LessonOverview,
    description: ``,
    drills: [
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
      {
        question: "",
        answer: "",
      },
    ],
  },

  // {
  //   overview: lessonOverviews.find(
  //     (overview) => overview.slug === "xxxxx"
  //   ) as LessonOverview,
  //   description: ``,
  //   drills: [
  //     {
  //       question: "",
  //       answer: "",
  //     },
  //     {
  //       question: "",
  //       answer: "",
  //     },
  //     {
  //       question: "",
  //       answer: "",
  //     },
  //     {
  //       question: "",
  //       answer: "",
  //     },
  //     {
  //       question: "",
  //       answer: "",
  //     },
  //     {
  //       question: "",
  //       answer: "",
  //     },
  //     {
  //       question: "",
  //       answer: "",
  //     },
  //   ],
  // },
];
