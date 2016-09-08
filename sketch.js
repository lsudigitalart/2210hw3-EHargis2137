//Emily Hargis Homework 3

var x = 20; //Global scope


function setup(){
  createCanvas(900,505);
  background(150);
  x = 20;
  println("my awesome varible=", x, "width =", width, "height =", height);

  for(var n = 10; n < 1010; n = n + 20){ //Plus 20 changes the origin
    for(var a = 10; a < height; a = a +20){
      noStroke();
      println("the value n:", n);

      if(a < 260 && a > 240){ //horizontal 180
        fill(180,180,180);
        ellipse(n, a, x);
      }
      if(a < 320 && a > 260){ //horizontal 140
        fill(140,140,140);
        ellipse(n, a, x);
      }
      if(a > 170 && a < 240){ //horizontal 140
        fill(140,140,140);
        ellipse(n, a, x);
      }
      if(n > 181 && n < 231){ //vertical 140
        fill(140,140,140);
        ellipse(n, a, x);
      }
      if(n < 720 && n > 660){ //vertical 140
        fill(140,140,140);
        ellipse(n, a, x);
      }
      if(a > 120 && a < 180){ //horizontal 100
        fill(100,100,100);
        ellipse(n, a, x);
      }
      if(a < 380 && a > 320){ //horizontal 100
        fill(100,100,100);
        ellipse(n, a, x);
      }
      if(n > 111 && n < 181){ //vertical 100
        fill(100,100,100);
        ellipse(n, a, x);
      }
      if(n < 780 && n > 720){ //vertical 100
        fill(100,100,100);
        ellipse(n, a, x);
      }
      if(a < 450 && a > 380){ //horizontal 50
        fill(50,50,50);
        ellipse(n, a, x);
      }
      if(a > 60 && a < 130){ //horizontal 50
        fill(50,50,50);
        ellipse(n, a, x);
      }
      if(n > 51 && n < 111){ //vertical 50
        fill(50,50,50);
        ellipse(n, a, x);
      }
      if(n < 840 && n > 780){ //vertical 50
        fill(50,50,50);
        ellipse(n, a, x);
      }
      if(a < 70){ //horizontal black
        fill('black');
        ellipse(n, a, x);
      }
      if(a > 430){ //horizontal black
        fill('black');
        ellipse(n, a, x);
      }
      if(n < 51){ //vertical black
        fill('black');
        ellipse(n, a, x);
      }
      if(n > 840){ //vertical black
        fill('black');
        ellipse(n, a, x);
      }
    }
  }
}

function draw(){
}
