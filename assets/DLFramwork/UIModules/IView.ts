import GameBase from "../SysModules/GameBase";

const { ccclass, property } = cc._decorator;

@ccclass
export default class IView extends GameBase {


    public _InitView(){
        
    }

    public _RefreshData(data){

    }

    public _ShowView() {
        this.node.active = true;
    }

    public _CloseView() {
        this.node.active = false;
    }
    
}
