
import ISys from "../SysModules/ISys";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NetSys extends ISys {
     

    public _InitSys(){

    }

    /**
     * Get请求
     * @param url 
     * @param callback 
     */
    public Get(url,callback){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                callback&&callback.call(response);
            }
        };
        xhr.open("GET", url, true);
        xhr.send(); 
    }

    
    /**
     * Post请求
     * @param url 
     * @param callback 
     */
    post(url, params, callback) {
        var nums = arguments.length  
        if(nums == 2){  
            callback = arguments[1];  
            params = "";  
        }  
        var xhr = cc.loader.getXMLHttpRequest();  
        xhr.open("POST", url);  
        xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");  
        xhr.onreadystatechange = function () {  
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status <= 207)) {  
                callback&&callback.call(true,xhr.responseText); 
            }
        };  
        xhr.send(params); 
    }
}
