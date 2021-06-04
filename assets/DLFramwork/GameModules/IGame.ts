
const {ccclass, property} = cc._decorator;

@ccclass
export default class IGame{


    public _InitGame(){
        console.log("初始化游戏！！");
    }

    public _StartGame(){
        console.log("开始游戏！！");
    }

    public _EndGame(){

    }
}
