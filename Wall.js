class Wall{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("images/WallImg-removebg-preview.png");
        //this.sprite;
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        //this.sprite = createSprite(this.x, this.y, this.width, this.height);
    }
}