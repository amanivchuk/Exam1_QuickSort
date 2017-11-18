function quicksort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    var pivot = sort(array, left, right);

    if (left < pivot - 1) {
        quicksort(array, left, pivot - 1);
    }
    if (right > pivot) {
        quicksort(array, pivot, right);
    }
    return array;
}

function sort(array, left, right) {
    var pivot = Math.floor((left + right) / 2);

    while (left <= right) {
        while (array[left] < array[pivot]) {
            left++;
        }
        while (array[right] > array[pivot]) {
            right--;
        }
        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function start() {
    var array = [];
    var tmp;
    while (tmp = prompt("Enter numbers or end", "")) {
        if (tmp === "end") {
            console.log("Before sort");
            printArray(array);
            console.log("-------------");
            console.log("After sort");
            var sortArray = quicksort(array);
            printArray(sortArray);
            break;
        }
        if (Number(tmp)) {
            array.push(tmp);
        } else {
            prompt("Wrong number! Enter new number!");
        }
    }
}

function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i] + " ");
    }
}

start();