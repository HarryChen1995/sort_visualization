let i = 0;
let w = 5;
let values;
function setup(){
    createCanvas(1000, 500);
    values = new Array(Math.floor(width/w))
    for(let i = 0 ; i < values.length; i++){
        values[i] = random(height);
    }
    bubble_sort(values)

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function swap(arr, i, j){
    await sleep(3)
    var a = arr[i]
    arr[i] = arr[j]
    arr[j] = a
}

async function bubble_sort(arr){
    for(i  = 0 ; i < arr.length; i ++){
        for(j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                await swap(arr, j, j+1)
            }
        }
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