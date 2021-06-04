import GameBase from "./SysModules/GameBase";
import ISys from "./SysModules/ISys";
import IView from "./UIModules/IView";

const { ccclass, property } = cc._decorator;
export enum SysEnum {
    UISys,
    GameSys
}

let dictionary: { [key: string]: ISys; } = {};
@ccclass
export default class SysManager {

    public GameBase: GameBase;

    /**
     * 初始化系统
     */
    public static InitSys() {
        let game = new cc.Node();
        game.setParent(cc.director.getScene().getChildByName("Canvas"));
        game.addComponent(GameBase);
        game.name = "DLFramwork";
        console.log(game.name);
        console.log("初始化系统！");
    }


    /**
     * 加载系统
     * @param sys 系统名称
     */
    public static LoadSys<T extends ISys>(msys: new () => T,sysname): T {
        let sys = new msys();
        dictionary[sysname] = sys;
        sys._InitSys();
        console.log("加载" + sysname + "成功！")
        return sys;
    }

    /**
     * 获取系统
     * @param sysname 系统名称
     * @returns 返回系统
     */
    public static GetSys<T extends ISys>(msys: new () => T,sysname): T {
        let sys;
        for (const key in dictionary) {
            if (key == sysname) {
                sys = dictionary[key];          
                return sys as T;
            }
        }
        if (sys == null) {
            console.log("当前未加载该系统，请加载系统！！");
        }
    }
}
