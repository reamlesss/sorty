var arrayOfNumbers;
let resultString;

const resultText = document.getElementById('result');

function getArray() {
    const input = document.getElementById('userInput');
    const inputString = input.value;
    arrayOfNumbers = inputString.split(',').map(Number);
    
    
}



function quickSort(arr) {
    getArray()
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}


function mergeSort(arr) {
    getArray();
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {   
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

    resultString = result.concat(left.slice(leftIndex), right.slice(rightIndex));
    
}


function showNumbersContainer() {
  const numberContainer = document.getElementById('number-container');
  if (numberContainer.style.display == 'none') {
    numberContainer.style.display = 'flex';
  } else {
    numberContainer.style.display = "none";
  }
}

function showWordsContainer() {
  const wordsContainer = document.getElementById('words-container');
  if (wordsContainer.style.display == 'none') {
    wordsContainer.style.display = 'flex';
  } else {
    showWordsContainer.
  }
}
