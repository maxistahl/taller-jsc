// https://github.com/taller-recruitment-challenges/js_challenge/

// part 1

const checkArrayHealth = (arr) => {
  const newArr = arr.filter(item => /^-?[0-9]+$/.test(item) && typeof item === 'number');
  if (newArr.length === 0) {
    throw new Error("Array must contain at least one valid numeric value");
  }
  return newArr;
};

const arrangeZerosToLatestPosition = (values) => {
  try {
    let val = checkArrayHealth(values);

    let length = val.length;
    val = val.filter(item => item !== 0);
    val.push(...Array(length - val.length).fill(0));
    return val;
  } catch (error) {
    throw new Error(error);
  }
}

console.log(arrangeZerosToLatestPosition([4, 8, 0, 9, 2, 5, 0, 3, 3, 0]));


// part 2

const addOneToLatestNumber = (values) => {
  try {
    const val = checkArrayHealth(values);;
    const lastVal = val.pop();
    val.push(lastVal + 1);
    return val;
  } catch (error) {
    throw new Error(error);
  }
}

console.log(addOneToLatestNumber([4, 8, 9, 2, 5, 3, 3]));


// part 3

const convertOddValuesToNegative = (values) => {
  return values.map((item, index) => {
    if (index % 2 == 0) {
      return item * -1;
    }
    return item;
  })
};

// This function is part of maxSubArray function, to try it uncomment the line below to run convertOddValuesToNegative function isolated.
// console.log(convertOddValuesToNegative([4, 8, 9, 2, 5, 8, 4, 9]));

const maxSubArray = (values) => {
  try {
    let valuesWithOddNegative = convertOddValuesToNegative(checkArrayHealth(values));

    let currentSubarray = 0;
    let maxSubarray = 0;

    valuesWithOddNegative.forEach(value => {
      currentSubarray = Math.max(value, currentSubarray + value);
      maxSubarray = Math.max(maxSubarray, currentSubarray);
    });

    return maxSubarray;
  } catch (error) {
    throw new Error(error);
  }
};

console.log(maxSubArray([4, 8, 9, 2, 5, 8, 4, 9]));