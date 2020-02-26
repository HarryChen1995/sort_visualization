let i = 0;
let w = 5;
let values;
function setup(){
    createCanvas(1000, 500);
    values = new Array(Math.floor(width/w))
    for(let i = 0 ; i < values.length; i++){
        values[i] = random(height);
    }
    insertion_sort(values)

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function insertion_sort(arr){

    for(let i = 1; i < arr.length; i++){
        key = arr[i]
        t = i-1
        while(t >=0 && arr[t] > key){
            await sleep(10)
            arr[t+1] = arr[t]
            t-=1
        }

        arr[t+1] = key
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




