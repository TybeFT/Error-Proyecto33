class Ground{
    constructor(x,y){
        var options = {
            'isStatic': true,
        };

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 1520;
        this.height = 25;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();

        rectMode(CENTER);

        fill("gray");

        rect(pos.x,pos.y,this.width,this.height);

        pop();
    }
}