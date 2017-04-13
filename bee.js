function Bee(){
	this.height=20;
	this.width=20;
	this.color="red";
	this.isAlive=true;

	this.x=0;
	this.y=0;

	this.speed=1;

	this.init=function(){
		this.isAlive = true;
		this.speed=parseInt(Math.random().toFixed(1).substring(2));
		if(this.speed<1)this.speed=1;
		this.x=0;
		this.y = parseInt(Math.random().toFixed(3).substring(2))%450;
	};

	this.check = function(x,y,h,w){
		if(y==this.y){
			var max = x+width;
			if(this.x>x && this.x < max)
				this.isAlive = false;
		}
	}


	this.Draw = function(ctx){
		if(this.x > 500)
			this.init();
		if(this.isAlive){	
			this.x+=this.speed;
			ctx.fillStyle = this.color;
	        ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
}