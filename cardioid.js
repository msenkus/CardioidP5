let d = 500;
let r = d/2;
let x;
let y;
let arr = new Array();
let total = 200;
let factor = 0;

function setup() {
  createCanvas(600, 600);
  fill(200);
  circle(width/2, height/ 2, d);
  slider = createSlider(1, 10, 2, 1);
}

function draw() {
  background(100);
  translate(width / 2, height/2);
  stroke(255);
  factor = slider.value();
 for( let i = 0; i < total; i++){
   let angle = map(i, 0, total, 0 , TWO_PI);
   x = -(r * cos(angle));
   y = -(r * sin(angle));
   let pos = {
    X: x,
    Y: y,
   }; 
   arr[i] = pos; 
   circle(x, y, 5);
 }
 
 let moreThenTen;
 for(let j = 0; j < total; j++){
   moreThenTen = j * factor;
  if(moreThenTen >= total){
    moreThenTen %= total;
  }
  line(arr[j].X, arr[j].Y, arr[moreThenTen].X, arr[moreThenTen].Y); 
 }
}
