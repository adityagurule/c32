class Bird extends Base{
    constructor(x,y) {


      super(x,y,50,50);
   this.image=loadImage("images/bird.png");
   this.smoke=loadImage("images/smoke.png");
   this.v= 255
   this.trajectory = [];
     }
    display(){
      super.display();
      // this.body.position.x= mouseX;
      // this.body.position.y= mouseY;


      if(this.body.position.x>240 && this.body.velocity.x>10){ 
        var pos = [this.body.position.x,this.body.position.y];
        this.trajectory.push(pos);       
      }


      for(var i= 0 ; i<this.trajectory.length ; i++){
        push();
        this.v= this.v-0.5;
        tint (255,this.v);
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1]);
        pop ();
      }
     
    }
  };
  