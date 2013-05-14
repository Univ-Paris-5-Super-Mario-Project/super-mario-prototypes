var soundUp = new buzz.sound("up.wav");
var soundDown = new buzz.sound("down.wav");
var soundLeft = new buzz.sound("left.wav");
var soundRight = new buzz.sound("right.wav");
Game.addClass({
        'name': 'Point',
        'eventCreate': function()
        {
                this.sprite=new Sprite(Game.getImage('spritePoint'));
        },
        'eventKeyPressed': function(key)
        {
                switch(key)
                {
                    case Game.KEY_RIGHT:
                    	buzz.all().stop();
                    	soundRight.play();
                        this.x+=6;
                    break;
             
                    case Game.KEY_LEFT:
                    	buzz.all().stop();
                    	soundLeft.play();
                        this.x-=6;
                    break;
             
                    case Game.KEY_UP:
                    	buzz.all().stop();
                    	soundUp.play();
                        this.y-=6;
                    break;
             
                    case Game.KEY_DOWN:
                    	buzz.all().stop();
                    	soundDown.play();
                        this.y+=6;
                    break;
                
                }
        }
});
