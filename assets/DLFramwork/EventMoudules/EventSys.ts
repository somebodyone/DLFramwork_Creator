
import ISys from "../SysModules/ISys";

const {ccclass, property} = cc._decorator;

let dictionary: { [key: string]: [fun:Function]} = {};

@ccclass
export default class EventSys extends ISys {
   
    public InitSys(){
        console.log("初始化事件系统！");
    }

    /**
     * 分发事件
     * @param eventcode 事件名称
     * @param data 数据
     */
    public TriggerEvent(eventcode, data) {
        let callbacks;
        for (const key in dictionary) {
            if (key == eventcode) {
                callbacks = dictionary[key];
            }
        }
        if (callbacks != null) {
            for (let index = 0; index < callbacks.length; index++) {
                callbacks[index](data);
            }
        }
    }

    /**
     * 监听事件
     * @param eventcode 事件名称
     * @param callback 
     */
    public AddEventLisioner(eventcode,callback:Function){
        let callbacks:[Function];
        for (const key in dictionary) {
            if (key == eventcode) {
                callbacks = dictionary[key]; 
                callbacks.push(callback);
            }
        }
        if (callbacks == null) {
            //第一次监听
            callbacks.push(callback);
            dictionary[eventcode] = callbacks;
        }
    }

    /**
     * 移除监听
     */
    public RemoveEventLisioner(eventcode,callback:Function){
        let callbacks:[Function];
        for (const key in dictionary) {
            if (key == eventcode) {
                callbacks = dictionary[key]; 
            }
        }
        if (callbacks == null) {
            //第一次监听
            callbacks.splice(0);
        }
    }
}
