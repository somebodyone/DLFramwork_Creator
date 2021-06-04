import ISys from "../SysModules/ISys";
import IView from "./IView";

const {ccclass, property} = cc._decorator;
let dictionary: { [key: string]: IView; } = {};
@ccclass
export default class UISys extends ISys{

    public UIRoot:cc.Node;
    // static get Root() {
    //     return cc.find("/UIRoot", cc.director.getScene().getChildByName("Canvas"));
    // }

    InitSys(){
        this.UIRoot = new cc.Node();
        this.UIRoot.name = "UIRoot";
        this.UIRoot.setParent(cc.director.getScene().getChildByName("Canvas"));
        this.UIRoot.setPosition(cc.v2(0,0));
    }

    /**
     * 打开函数
     * @param viewName 界面名称
     * @returns 
     */
    public OpenView<T extends IView>(mview: new () => T,viewName,data = null): T {
        let iview;
        for (const key in dictionary) {
            if (key == viewName) {
                iview = dictionary[key];
                iview.ShowView();
                console.log("已经打开过该界面！！！");
                return iview;
            }
        }
        let self = this;

        cc.resources.load("UI/" + viewName, cc.Prefab, function (err, view: cc.Prefab) {
            let go = cc.instantiate(view);
            go.setParent(self.UIRoot);
            go.setPosition(cc.v2(0, 0));
            iview = go.getComponent(mview);
            iview._InitView();
            iview._ShowView();
            iview._RefreshData(data);
            console.log("打开" + viewName + "界面");
            return iview;
        });
    }

    /**
     * 关闭界面
     * @param mview 
     * @param viewname 界面名称
     */
    public CloseView<T extends IView>(mview: new () => T,viewname){
        let iview;
        for (const key in dictionary) {
            if (key == viewname) {
                iview = dictionary[key];
                iview._CloseView();
                return iview;
            }
        }
    }

}
