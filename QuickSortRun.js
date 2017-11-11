function quicksort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    var tmp = sort(array, left, right);

    if (left < tmp - 1) {
        quicksort(array, left, tmp - 1);
    }
    if (right > tmp) {
        quicksort(array, tmp, right);
    }
    return array;
}

function sort(array, left, right) {
    var tmp = Math.floor((left + right) / 2);

    while (left <= right) {
        while (array[left] < array[tmp]) {
            left++;
        }
        while (array[right] > array[tmp]) {
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