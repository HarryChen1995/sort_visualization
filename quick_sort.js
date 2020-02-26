let i = 0;
let w = 5;
let values;
function setup(){
    createCanvas(1000, 500);
    values = new Array(Math.floor(width/w))
    for(let i = 0 ; i < values.length; i++){
        values[i] = random(height);
    }
    quicksort(values, 0, values.length-1 )

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
async function partition(arr, l, r){
    k = l-1

    for(let i = l; i < r; i++){
        if (arr[i] < arr[r]){
            k+=1;
            await swap(arr, k, i)
        }
    }
    
    await swap(arr, k+1, r);
    return k+1;

}

async function quicksort(arr, l, r){
    if(l<r){
        pivot = await partition(arr, l, r)
        await quicksort(arr, l, pivot-1)
        await quicksort(arr, pivot+1, r)
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




