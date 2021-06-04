import ISys from "../SysModules/ISys";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AudioSys extends ISys {

    public _InitSys(){
        
    }

    /**
     * 播放音效
     * @param audioname 音效名称 
     */
    public PlayAudio(audioname) {
        cc.resources.load('Game/Audio/' + audioname, cc.AudioClip, (err, asset: cc.AudioClip) => {
           cc.audioEngine.playMusic(asset,false);
        });
    }

    /**
     * 播放背景音乐
     * @param audioname 音效名称
     */
    public PlayBGAudio(audioname){
        cc.resources.load('Game/Audio/' + audioname, cc.AudioClip, (err, asset: cc.AudioClip) => {
            cc.audioEngine.playMusic(asset,true);
         });
    }

    /**
     * 停止所有音乐
     */
    public StopAudioSwith(){
        cc.audioEngine.pauseAll();
    }
    
    /**
     * 恢复所有音乐
     */
    public PlayAudioSwitch(){
        cc.audioEngine.resumeAll();
    }
}
