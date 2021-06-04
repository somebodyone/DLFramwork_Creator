import ISys from "../SysModules/ISys";
import IGame from "./IGame";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameSys extends ISys {
    private Game: IGame;
    public UIRoot:cc.Node;

    InitSys(){
        this.UIRoot = new cc.Node();
        this.UIRoot.name = "GameRoot";
        this.UIRoot.setParent(cc.director.getScene().getChildByName("Canvas"));
        this.UIRoot.setPosition(cc.v2(0,0));
    }

    /**
     * 创建游戏
     */
    public  CreatGame<T extends IGame>(mgame: new () => T): T{
        this.Game = new mgame();    
        return this.Game as T;
    }

     /**
     * 获取游戏
     */
    public GetGame():IGame{
        return this.Game;
    }
}
