class Bob{

    constructor(x,y,radius){

        var options = {
            restitution:1,
            friction:0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
        }
        //this.x=body.position.x;
        //this.y=body.position.y
        this.radius=radius;
        this.body = Bodies.circle(x,y,this.radius/2,options);
        //this.image = loadImage("sprites/paper1.png");
        //this.x= body.position.x;
        //this.y=body.position.y;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
      
      //var angle = this.body.angle;
      //push();
      //translate(pos.x,pos.y ); 
      
      stroke(255);
      strokeWeight(3);
      fill(rgb(176,224,230));
      rectMode(CENTER);
      ellipse(pos.x,pos.y, this.radius,this.radius);
      //pop();
    }
}
