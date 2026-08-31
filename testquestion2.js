function setup(){
    createCanvas(600,600);
    background(220);
}
function draw(){
    for(let count = 0;count< 10; count++ ){
        fill(count * 30);
        circle(30+count*30,30+count*30,30);
    }
}