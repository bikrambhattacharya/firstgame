var context,height=480,width=600,interval;
var Bees=[];
var hero;


function stop(){
	if(interval)
	clearInterval(interval);
	context.clearRect(0, 0, width, height);

}

function start(){
	context= document.getElementById("gameFrame").getContext("2d");
	Bees = [];
	for(var i=0;i<20;i++){
		var bee = new Bee();
		bee.init()
		Bees.push(bee);
	}
	hero = new Hero();
	window.onkeydown=function(e){
		var keyCode = e.which;
		if(keyCode==38)
			hero.up();
		else if(keyCode==40)
			hero.down();
			
	}
	setup();
	interval = setInterval(draw,1000/24);
}


function setup(){
	context.clearRect(0, 0, width, height);
}

function draw(){
	context= document.getElementById("gameFrame").getContext("2d");
	context.clearRect(0, 0, width, height);
	console.log("Drawing Bees");
	for (var i = 0; i < Bees.length; i++) {
		Bees[i].check(hero.x,hero.y,20,20);
		Bees[i].Draw(context);

	};
	hero.Draw(context);
}