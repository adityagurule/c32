class Pig extends Base{
    constructor(x, y) {
      super(x,y,50,50);
      this.image= loadImage("images/enemy.png");
      this.v= 255;

     }


       display(){
        //  console.log (this.body.speed);

         if(this.body.speed>3){
          World.remove(world,this.body);
          push ();
          this.v= this.v-5;
          tint (255,this.v);
          image (this.image,this.body.position.x, this.body.position.y,50,50);
          pop ();
         }else {
          super.display();

         }
       }
  };
  