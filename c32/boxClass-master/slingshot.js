class Slingshot{

    constructor(a,b){
        
        var options={

            bodyA:a,
            pointB:b,   
            stiffness:0.04,
            length:10
            

        }
        this.pointB= b;

        this.sling1= loadImage("images/sling1.png");
        this.sling2= loadImage("images/sling2.png");
        this.sling3= loadImage("images/sling3.png");

      this.sling=  Matter.Constraint.create(options);
      World.add(world, this.sling);

    }
    
    display(){
        image(this.sling1, 250,30 );
        image(this.sling2, 220,25 );

        if(this.sling.bodyA){
            
            var pointA= this.sling.bodyA.position;
            var pointB= this.pointB;
            strokeWeight(6);
            stroke(48,22,8);
            if(pointA.x<270){
                line (pointA.x-25,pointA.y,pointB.x-20,pointB.y);
                line (pointA.x-25,pointA.y,pointB.x+30,pointB.y);
            
            image(this.sling3,pointA.x-30,pointA.y-15,15,30);
            }
           else{
            line (pointA.x-25,pointA.y,pointB.x-20,pointB.y);
            line (pointA.x-25,pointA.y,pointB.x+30,pointB.y);
        
        image(this.sling3,pointA.x+20,pointA.y-5,15,30);
           }

     }
    }

    fly(){

    this.sling.bodyA= null;

    }

attach(body){
    this.sling.bodyA= body;
}

}