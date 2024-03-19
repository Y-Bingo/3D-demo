import { Component, EventTouch, Node, Vec2, Vec3, _decorator } from 'cc';
import { GameScene } from '../GameScene';
const { ccclass, property } = _decorator;

@ccclass('TouchNodeCtrl')
export class TouchNodeCtrl extends Component {
	/* class member could be defined like this */
	// dummy = '';

	/* use `property` decorator if your want the member to be serializable */
	// @property
	// serializableDummy = 0;

	@property(GameScene)
	public gameSceneCtrl: GameScene = null;

	onEnable() {
		// this.node.on(Node.EventType.TOUCH_START, this.onTouchBegin, this);
		this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
		this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
		this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
	}

	onDisable() {
		// this.node.off(Node.EventType.TOUCH_START, this.onTouchBegin, this);
		this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
		this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
		this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
	}

	// onTouchBegin(event: EventTouch) {

	// }

	onTouchMove(event: EventTouch) {
		if (!this.gameSceneCtrl.curFruit) return;

		let befforeOffset: Vec2 = event.getDelta();
		//todo 转换offset

		let a = (18 / 180) * Math.PI;
		let b = (23 / 180) * Math.PI;
		let x0 = befforeOffset.x;
		let y0 = befforeOffset.y;
		let x1 = x0 * Math.cos(a) - y0 * Math.sin(a);
		let z1 = -x0 * Math.cos(b) * 0.74 - y0 * Math.sin(b) * 0.74;
		let afferOffset = new Vec3(x1 * 0.07, 0, z1 * 0.07);

		// this.gameSceneCtrl.offsetCurFruit(afferOffset);

		let position = new Vec3(this.gameSceneCtrl.curFruit.position);
		position.add(afferOffset);

		this.gameSceneCtrl.curFruit.position = position;
	}

	onTouchEnd() {
		if (!this.gameSceneCtrl.curFruit) return;
	}

	// update (deltaTime: number) {
	//     // Your update function goes here.
	// }
}
