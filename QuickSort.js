
function quickSort(){
    var array =[2,1,6,4,3];
    //var array = mas;
    var startIndex = 0;
    var endIndex = Number(array.length);
    console.log(endIndex);
   doSort(startIndex, endIndex);

    function doSort(start, end) {
        if(start >= end){
            return;
        }
        var i = start;
        var j = end;
        var cur = i - (i - j) / 2;

        while(i < j){
            while(i < cur && (array[i] <= array[cur])){
                i++;
            }
            while(j > cur && (array[cur] <= array[j])){
                j--;
            }
            if(i < j){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                if(i === cur){
                    cur = j;
                }else if(j === cur){
                    cur = i;
                }
            }
            doSort(start, cur);
            doSort(cur + 1, end);
        }
    }
    return array;
}


function printArray(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i] + " ");
    }
}

function start(){
    var array = [];
    var tmp;
    /*while(tmp = prompt("Enter numbers or end","")){
        if(tmp === "end") {
            console.log("Before sort");
            printArray(array);
            console.log("-------------");
            console.log("After sort");
            var sortArray = quickSort(array);
            printArray(sortArray);

            break;
        }
        if(Number(tmp)){
            array.push(tmp);
        }else{
            prompt("Wrong number! Enter new number!");
        }
    }*/
    var sortArray = quickSort();
    printArray(sortArray);
}

start();