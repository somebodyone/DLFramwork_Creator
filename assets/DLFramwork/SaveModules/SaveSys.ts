import ISys from "../SysModules/ISys";
import IData from "../UIModules/IData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SaveSys extends ISys {

    public _InitSys() {

    }

    /**
     * 存储值
     * @param key 
     * @param value 
     */
    public SetKey(key, value) {
        cc.sys.localStorage.setItem(key, value);
    }

    /**
     * 取出
     * @param key 
     * @returns 
     */
    public GetKey(key) {
        return cc.sys.localStorage.getItem(key);
    }

    /**
     * 写入json
     * @param data 
     */
    public SaveData(key,data:IData){
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    }

    /**
     * 读取json
     * @param key 
     */
    public GetData(key){
        return cc.sys.localStorage.getItem(key);
    }
}
