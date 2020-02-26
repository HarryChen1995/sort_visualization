let i = 0;
let w = 5;
let values;
function setup(){
    createCanvas(1000, 500);
    values = new Array(Math.floor(width/w))
    for(let i = 0 ; i < values.length; i++){
        values[i] = random(height);
    }
    heap_sort(values)

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function swap(arr, i, j){
    await sleep(10)
    var a = arr[i]
    arr[i] = arr[j]
    arr[j] = a
}

function left(i){
    return i*2+1
}
function right(i){
    return i*2+2
}

async function heapify(arr, size, i){
    largest = i
    if (left(i)<size && arr[left(i)] > arr[i] ){
        largest = left(i)
    }
    if (right(i)<size && arr[right(i)] > arr[largest] ){
        largest = right(i)
    }
    if (largest != i){
        await swap(arr, largest, i)
        await heapify(arr, size, largest)
    }

}

async function build_heap(arr){
    for (let i = Math.floor(arr.length/2); i >= 0; i--){
        await heapify(arr, arr.length, i)
    }
}

async function heap_sort(arr){
    size = arr.length
    await build_heap(arr)
    for(let i = arr.length -1; i >= 1; i--){
        await swap(arr, 0, i)
        size -=1
        await heapify(arr, size , 0)
    }
}

function draw(){
   background(51)

    for(let i = 0; i < values.length; i++){
        stroke(51)
        fill(255);
        rect(i*w, height-values[i] , w, values[i] )
    }

}




