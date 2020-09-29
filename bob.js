class Bob{
    constructor(x, y, width, height){
        var options = {
            isStatic : false, restitution : 0.3, friction : 0.5, density : 1.2
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("ball.png");
    World.add(world, this.body);    
    }
    display(){
        //fill("yellow");
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
    }
}