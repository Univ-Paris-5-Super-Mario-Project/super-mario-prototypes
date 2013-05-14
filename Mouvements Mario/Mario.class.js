var soundUp = new buzz.sound("up.wav");
var soundDown = new buzz.sound("down.wav");
var soundLeft = new buzz.sound("left.wav");
var soundRight = new buzz.sound("right.wav");
Game.addClass({
        'name': 'Mario',
        'eventCreate': function()
        {
            this.spriteLeft=new Sprite(Game.getImage('marioSpriteLeft'));
			this.spriteLeft.makeTiles(16,32,0);
			this.spriteLeft.imagespeed=0.2;
            this.spriteRight=new Sprite(Game.getImage('marioSpriteRight'));
			this.spriteRight.makeTiles(16,32,0);
			this.spriteRight.imagespeed=0.2;
            this.switchPositionWhenLeave=true;
			this.moveUp = false;
			this.moveDown = false;
			this.moveLeft = false;
			this.moveRight = false;
			this.spriteLeft.MOUV_ARRET = [7,7];
			this.spriteRight.MOUV_ARRET = [1,1];
			this.spriteLeft.MOUV_BAISSE = [1,1];
			this.spriteRight.MOUV_BAISSE = [7,7];
			this.spriteLeft.MOUV_SAUT = [4,3,2];
			this.spriteRight.MOUV_SAUT = [4,5,6];
			this.spriteLeft.MOUV_MARCHE = [7,6,5];
			this.spriteRight.MOUV_MARCHE = [1,2,3];
			this.NB_PIX_DEPLACEMENT_HORIZ = 4;
			this.NB_PIX_DEPLACEMENT_VERTIC = 6;
            this.sprite=this.spriteRight;
			//this.sprite.tiles=this.MOUV_MARCHE_GAUCHE;
        },
        'eventStep': function()
        {
        	if (this.moveRight && !this.moveLeft) {
	        	soundLeft.stop();
	        	soundRight.play();
                this.x+=this.NB_PIX_DEPLACEMENT_HORIZ;
                this.sprite=this.spriteRight;
				this.sprite.tiles=this.sprite.MOUV_MARCHE;
        	}
        	else if (this.moveLeft && !this.moveRight) {
	        	soundRight.stop();
	        	soundLeft.play();
                this.x-=this.NB_PIX_DEPLACEMENT_HORIZ;
                this.sprite=this.spriteLeft;
				this.sprite.tiles=this.sprite.MOUV_MARCHE;
        	}
        	if (this.moveDown && !this.moveUp) {
	        	soundUp.stop();
	        	soundDown.play();
                this.y+=this.NB_PIX_DEPLACEMENT_VERTIC;
        	}
        	else if (this.moveUp && !this.moveDown) {
	        	soundDown.stop();
	        	soundUp.play();
                this.y-=this.NB_PIX_DEPLACEMENT_VERTIC;
        	}
        	if (this.moveDown && !this.moveUp && !this.moveRight && !this.moveLeft) {
				this.sprite.tiles=this.sprite.MOUV_BAISSE;
                this.y-=this.NB_PIX_DEPLACEMENT_VERTIC;
			} else if (this.moveUp && !this.moveDown && !this.moveRight && !this.moveLeft) {
				this.sprite.tiles=this.sprite.MOUV_SAUT;
                this.y+=this.NB_PIX_DEPLACEMENT_VERTIC;
			} else if (this.moveRight && this.moveLeft) {
				this.sprite.tiles=this.sprite.MOUV_ARRET;
			} else if (!this.moveDown && !this.moveUp && !this.moveRight && !this.moveLeft) {
				this.sprite.tiles=this.sprite.MOUV_ARRET;
			}
        },
        'eventKeyUp': function(key)
        {
                switch(key)
                {
                    case Game.KEY_RIGHT:
                    	this.moveRight = false;
                    break;
                    case Game.KEY_LEFT:
                    	this.moveLeft = false;
                    break;
                    case Game.KEY_UP:
                    	this.moveUp = false;
                    break;
                    case Game.KEY_DOWN:
                    	this.moveDown = false;
                    break;
                }
        },
        'eventKeyDown': function(key)
        {
                switch(key)
                {
                    case Game.KEY_RIGHT:
                    	this.moveRight = true;
                    break;
                    case Game.KEY_LEFT:
                    	this.moveLeft = true;
                    break;
                    case Game.KEY_UP:
                    	this.moveUp = true;
                    break;
                    case Game.KEY_DOWN:
                    	this.moveDown = true;
                    break;
                }
        }
});
