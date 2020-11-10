class Paper{

    constructor(x, y, radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        paper=Bodies.circle(200,100,30,options);
      
        
        World.add(world, paper);
        }
        display(){
            var pos =paper.position;
            push();
            ellipseMode(CENTER);
            fill(255);
            ellipse(paper.position.x,paper.position.y,20);
            pop();
        }



}