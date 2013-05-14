Game.addClass({
	'name': 'Bloc',
	'eventCreate': function()
	{
		this.sprite = new Sprite(Game.getImage('blocSprite'));
		this.sprite.makeTiles(16,16,0);
		this.sprite.imagespeed = 0.2;
		this.sprite.BLOC_SPECIAL = [1,2,3,4];
		this.sprite.BLOC_TAPE = [5,5];
//		this.sprite.BLOC_TOURNE = [6,7,8,9];
		this.sprite.tiles = this.sprite.BLOC_SPECIAL;
	},
	'eventClick': function()
	{
		if (this.isMouseOver()) {
			this.vspeed = -4;
			var bloc = this;
			var yPos = this.y;
			bloc.sprite.tiles = bloc.sprite.BLOC_TAPE;
			setTimeout(function(){bloc.checkForCollisions = false;bloc.vspeed = 4;this.y = yPos;setTimeout(function(){bloc.vspeed = 0;this.y = yPos;},80);},80);
		}
	}
});
