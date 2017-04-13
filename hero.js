function Hero(){
	this.height=20;
	this.width=20;
	this.color="Green"

	this.x=300;
	this.y=300;

	this.speed=5;

	this.up=function(){
		this.y--;
	}
	this.down=function(){
		this.y++;	
	}

	this.Draw = function(ctx){
		ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}