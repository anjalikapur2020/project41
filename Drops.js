class Drops{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      
        World.add(world, this.body);
    }


    display(){

        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse( 30,30, this.width,this.height);
        pop();
       
        
    
}
}