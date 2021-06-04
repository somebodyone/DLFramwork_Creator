
const { ccclass, property } = cc._decorator;

@ccclass
export default class GameBase extends cc.Component {

    start() {
        this._Start();
    }


    update() {
        this._Update();
    }

    onLoad(){
        this._Init();
    }

    
    public _Init(){

    }

    public _Start() {

    }

    public _Update() {

    }
}
