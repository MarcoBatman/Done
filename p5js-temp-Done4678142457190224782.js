var liste = [2,6,1,3,4,8,10,7,9,5];


function setup() {
  createCanvas(500,500);
}


function draw() {
  clear();
  text("s for shuffle and k for sort",200,50);
liste.forEach(drawRect);
}

function drawRect(item, index){
rect(20+25*index,300,20,-item*10);
}


function keyPressed(){
if(key == 'k'|| key == 'K'){
liste = liste.sort(function(a, b){return a-b;});
}
if(key=='s'||key=='S'){
liste = shuffle(liste);
}


}
