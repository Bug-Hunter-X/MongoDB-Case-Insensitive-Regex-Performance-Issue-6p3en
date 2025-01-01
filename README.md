# MongoDB Case-Insensitive Regex Performance Issue

This repository demonstrates a performance issue that can occur when using case-insensitive regular expressions in MongoDB queries, especially with large datasets.  The `bug.js` file contains code that performs a case-insensitive search using a regular expression. This can lead to performance degradation or even errors if the collection is large. The `bugSolution.js` file shows an improved query using more efficient methods.

## Bug
The `bug.js` file shows the use of a case-insensitive regular expression `/John/i` which lacks efficiency with large datasets.

## Solution
The `bugSolution.js` demonstrates how to use more appropriate operators or indexes to achieve a better performance.