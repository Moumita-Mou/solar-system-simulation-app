var speed;

function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;

    push();
    translate(width/2, height/2);

    rotate(radians(speed/3));
    celestialObj(color(255,150,0), 200); // SUN

    push();
    rotate(radians(speed));
    translate(300, 0);
    celestialObj(color(0, 0, 255), 80); // EARTH

    rotate(radians(-speed * 2));
    translate(100, 0)
    celestialObj(color(255),30); // MOON

    rotate(radians(-speed * 4));
    translate(25, 25);
    celestialObj(color(210, 105,30),15); // ASTEROID
    pop();

}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}
