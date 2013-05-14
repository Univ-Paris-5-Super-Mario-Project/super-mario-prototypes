var soundUp = new buzz.sound("up.wav");
var soundDown = new buzz.sound("down.wav");
var soundLeft = new buzz.sound("left.wav");
var soundRight = new buzz.sound("right.wav");
var moveUp = false;
var moveDown = false;
var moveLeft = false;
var moveRight = false;
Game.addClass({
        'name': 'Point',
        'eventCreate': function()
        {
                this.sprite=new Sprite(Game.getImage('spritePoint'));
                this.switchPositionWhenLeave=true;
        },
        'eventStep': function()
        {
        	if (moveRight && !moveLeft) {
	        	soundLeft.stop();
	        	soundRight.play();
                this.x+=6;
        	}
        	else if (moveLeft && !moveRight) {
	        	soundRight.stop();
	        	soundLeft.play();
                this.x-=6;
        	}
        	if (moveDown && !moveUp) {
	        	soundUp.stop();
	        	soundDown.play();
                this.y+=6;
        	}
        	else if (moveUp && !moveDown) {
	        	soundDown.stop();
	        	soundUp.play();
                this.y-=6;
        	}
        },
        'eventKeyUp': function(key)
        {
                switch(key)
                {
                    case Game.KEY_RIGHT:
                    	moveRight = false;
                    break;
                    case Game.KEY_LEFT:
                    	moveLeft = false;
                    break;
                    case Game.KEY_UP:
                    	moveUp = false;
                    break;
                    case Game.KEY_DOWN:
                    	moveDown = false;
                    break;
                }
        },
        'eventKeyDown': function(key)
        {
                switch(key)
                {
                    case Game.KEY_RIGHT:
                    	moveRight = true;
                    break;
                    case Game.KEY_LEFT:
                    	moveLeft = true;
                    break;
                    case Game.KEY_UP:
                    	moveUp = true;
                    break;
                    case Game.KEY_DOWN:
                    	moveDown = true;
                    break;
                }
        }
});
