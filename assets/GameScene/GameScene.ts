import { Component, Node, PhysicsSystem, Prefab, _decorator } from 'cc';
import { CanvasCtrl } from './ui/CanvasCtrl';
const { ccclass, property } = _decorator;

@ccclass('GameScene')
export class GameScene extends Component {
	@property([Prefab])
	public fruitPrefabs: Array<Prefab> = [];

	@property(Node)
	public fruitContainer: Node = null;

	@property(CanvasCtrl)
	public canvasCtrl: CanvasCtrl = null;

	@property(Node)
	public labelingNode: Node = null;

	@property(Prefab)
	public smokePrefab: Prefab = null;

	public curFruit: Node = null;

	onLoad() {
		PhysicsSystem.instance.enable = true;
	}

	onEnable() {}

	onDisable() {}
}
