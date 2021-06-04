
import ISys from "../SysModules/ISys";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AssetBundleSys extends ISys {
    public _InitSys() {
        console.log("初始化资源加载系统成功！")
    }

    /**
     * 加载bundle
     * @param bundlename
     */
    public LoadBundle(bundlename: string, action) {
        cc.assetManager.loadBundle(bundlename, (err: Error, bundle: cc.AssetManager.Bundle) => {
            if (err) {
                return console.error(err);
            }
            action && action.call();
        });
    }

    /**
     * 获取加载过的包
     * @param bundlename 
     * @returns 
     */
    public GetBundle(bundlename) {
        return cc.assetManager.getBundle(bundlename);
    }

    /**
     * 移除AB包
     * @param bundlename 
     */
    public RemoveBundle(bundlename) {
        let bundle = cc.assetManager.getBundle(bundlename);
        cc.assetManager.removeBundle(bundle);
    }

    /**
     * 移除AB包
     * @param bundlename 
     */
    public ReleaseRemoveBundle(bundlename) {
        let bundle = cc.assetManager.getBundle(bundlename);
        bundle.releaseAll();
        cc.assetManager.removeBundle(bundle);
    }

}
