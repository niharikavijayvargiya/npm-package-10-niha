// index.js

// 1. Sum of Array
const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

// 2. Average of Array
const average = (arr) => sum(arr) / arr.length;

// 3. Median of Array
const median = (arr) => {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

// 4. Mode of Array
const mode = (arr) => {
    const frequency = {};
    arr.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    const maxFrequency = Math.max(...Object.values(frequency));
    return Object.keys(frequency).filter((key) => frequency[key] === maxFrequency).map(Number);
};

// 5. Unique Elements
const unique = (arr) => [...new Set(arr)];

// 6. Flatten Nested Array
const flatten = (arr) => arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);

// 7. Chunk Array
const chunk = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

// 8. Difference Between Two Arrays
const difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));

// 9. Intersection of Two Arrays
const intersection = (arr1, arr2) => arr1.filter((x) => arr2.includes(x));

// 10. Remove Duplicates
const removeDuplicates = (arr) => [...new Set(arr)];

// Export all functions
module.exports = {
    sum,
    average,
    median,
    mode,
    unique,
    flatten,
    chunk,
    difference,
    intersection,
    removeDuplicates
};
