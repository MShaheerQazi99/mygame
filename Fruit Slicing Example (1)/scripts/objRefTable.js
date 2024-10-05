const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Behaviors.Tween,
		C3.Plugins.Particles,
		C3.Behaviors.Timer,
		C3.Plugins.Text,
		C3.Behaviors.Flash,
		C3.Plugins.TiledBg,
		C3.Plugins.DrawingCanvas,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.System.Acts.SetObjectTimescale,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Touch.Cnds.OnNthTouchStart,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Behaviors.Timer.Acts.StartTimer,
		C3.Plugins.Text.Exps.Y,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Behaviors.Flash.Cnds.OnFlashEnded,
		C3.Plugins.Text.Acts.Destroy,
		C3.Behaviors.Timer.Cnds.OnTimer,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.HasNthTouch,
		C3.Plugins.Sprite.Acts.SetTowardPosition,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.Sprite.Exps.Height,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.TiledBg.Acts.MoveToTop,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.System.Cnds.Repeat,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Particles.Acts.SetAngle,
		C3.Plugins.Sprite.Acts.SetEffectParam,
		C3.Plugins.DrawingCanvas.Acts.PasteObject,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.System.Acts.SetFunctionReturnValue
	];
};
self.C3_JsPropNameTable = [
	{VectorX: 0},
	{VectorY: 0},
	{RotationSpeed: 0},
	{Object: 0},
	{Background: 0},
	{Touch: 0},
	{Tween: 0},
	{Blade: 0},
	{Luminosity: 0},
	{HalfObject: 0},
	{Timer: 0},
	{JuiceParticles: 0},
	{BladeSmoother: 0},
	{InstructionsText: 0},
	{GameManager: 0},
	{Flash: 0},
	{ScoreText: 0},
	{SmokeParticle: 0},
	{Fade: 0},
	{FireParticles: 0},
	{DrawingCanvas: 0},
	{SliceText: 0},
	{FirstInteraction: 0},
	{DOUBLESPAWNRATE: 0},
	{BOMBSPAWNRATE: 0},
	{SCREENHORIZONTALMARGIN: 0},
	{RotationDirection: 0},
	{AllowPlayerToCut: 0},
	{PreviousX: 0},
	{PreviousY: 0},
	{RandomForce: 0},
	{Score: 0},
	{GameIsOver: 0},
	{Direction: 0},
	{CurrentValue: 0},
	{TargetValue: 0},
	{Speed: 0}
];

self.InstanceType = {
	Object: class extends self.ISpriteInstance {},
	Background: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Blade: class extends self.ISpriteInstance {},
	HalfObject: class extends self.ISpriteInstance {},
	JuiceParticles: class extends self.IParticlesInstance {},
	BladeSmoother: class extends self.ISpriteInstance {},
	InstructionsText: class extends self.ITextInstance {},
	GameManager: class extends self.ISpriteInstance {},
	ScoreText: class extends self.ITextInstance {},
	SmokeParticle: class extends self.IParticlesInstance {},
	Fade: class extends self.ITiledBackgroundInstance {},
	FireParticles: class extends self.IParticlesInstance {},
	DrawingCanvas: class extends self.IDrawingCanvasInstance {},
	SliceText: class extends self.ITextInstance {}
}