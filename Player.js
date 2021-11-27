class Jugador{
    constructor(x,y){
        var  options = {
            restitution: 1,
            friction: 1,
            density: 0.1,
        }
        this.rad = 30;
        this.body = Bodies.circle(x,y,this.rad,options);

        World.add(world, this.body);
    }

    display(){
        push();
        noStroke();
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,this.rad,this.rad);
        pop();
    }
}