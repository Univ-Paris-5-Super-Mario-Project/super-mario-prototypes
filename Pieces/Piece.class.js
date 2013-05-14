Game.addClass({
	'name': 'Piece',
	'eventCreate': function()
	{
		this.sprite = new Sprite(Game.getImage('coinSprite'));
		this.sprite.makeTiles(16,16,0);
		this.sprite.imagespeed = 0.2;
		this.sprite.tiles = [1,2,3,4];
		this.sprite.STOP_SPINNING = [1];
		this.coinSound = new buzz.sound("Sons/coin.wav");
	},
	'eventClick': function()
	{
		if (this.isMouseOver()) {
			this.vspeed = -4;
			this.coinSound.play();
			var piece = this;
			setTimeout(function(){Piece.counter++;piece.checkForCollisions = false;piece.vspeed = 0;piece.sprite.tiles = piece.sprite.STOP_SPINNING;setTimeout(function(){Game.instanceDestroy(piece);},300);},200);
		}
	}
});
Piece.counter = 0; // Nombre de pièces récoltées au chargement de la partie.
Game.addClass({
	'name': 'PieceController',
	'eventStep': function()
	{
		this.drawText({
			'text': "Pièces: " + Piece.counter,
			'x': 10,
			'y': 10
		});
	}
});