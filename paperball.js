class paper{
    constructor(x,y){
    var options = {
        isStatic : false,
        'restitution' : 0.6,
        'density' : 1.5,
        'fricition' : 10.0
    }
    this.body = Bodies.circle(x,y,50,options);
    this.radius = 50;

    World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    stroke("red");
    fill("blue");
    ellipse(0,0,this.radius);
    pop();
}
}