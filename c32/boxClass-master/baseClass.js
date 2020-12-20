class Base {
    constructor(x, y, width, height,angle) {
      var options = {
          'restitution':0.3,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("images/base.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle;
      push ();
      translate(pos.x, pos.y);
      rotate (angle);
      imageMode(CENTER);
      fill(255);
      stroke ("green");
      strokeWeight (4);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  };