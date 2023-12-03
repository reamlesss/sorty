var arrayOfNumbers;
let resultString;

const resultText = document.getElementById("result");

function getArray() {
  const input = document.getElementById("userInput");
  const inputString = input.value;
   var numberArray = inputString.split(",").map(Number);

  return numberArray;
}


function updateResult() {
  resultText.innerHTML = resultString; 
}


function quickSort() {
  arrayOfNumbers = getArray();

    const sortedArray = performQuickSort([...arrayOfNumbers]);

    // Update resultString with the sorted array
  resultString = "Quick Sort: " + sortedArray.join(", ");
  
  updateResult();
  
}


function performQuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...performQuickSort(left), pivot, ...performQuickSort(right)];
}

function mergeSort() {
  arrayOfNumbers = getArray();

    const sortedArray = performMergeSort([...arrayOfNumbers]);

    
  resultString = "Merge Sort: " + sortedArray.join(", ");
  updateResult();
}


function performMergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(performMergeSort(left), performMergeSort(right));
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

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}




function showNumbersContainer() {
  const numberContainer = document.getElementById("number-container");
  if (numberContainer.style.display == "none") {
    numberContainer.style.display = "flex";
  } else {
    numberContainer.style.display = "none";
  }
}

function showWordsContainer() {
  const wordsContainer = document.getElementById("words-container");
  if (wordsContainer.style.display == "none") {
    wordsContainer.style.display = "flex";
  } else {
    wordsContainer.style.display = "none";
  }
}
