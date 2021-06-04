import AudioSys from "../../../DLFramwork/AudioModules/AudioSys";
import SysConfig from "../../../DLFramwork/Config/SysConfig";
import EventSys from "../../../DLFramwork/EventMoudules/EventSys";
import GameSys from "../../../DLFramwork/GameModules/GameSys";
import SysManager from "../../../DLFramwork/SysManager";
import GameBase from "../../../DLFramwork/SysModules/GameBase";
import UISys from "../../../DLFramwork/UIModules/UISys";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends GameBase {

    _Init() {
        SysManager.InitSys();
        SysManager.LoadSys<UISys>(UISys,SysConfig.UISys);
        SysManager.LoadSys<GameSys>(GameSys,SysConfig.GameSys);
        SysManager.LoadSys<EventSys>(EventSys,SysConfig.EventSys);
        SysManager.LoadSys<AudioSys>(AudioSys,SysConfig.AudioSys);
    }

    _Start() {
        SysManager.GetSys<AudioSys>(AudioSys,SysConfig.AudioSys).PlayBGAudio("BGM");
    }

}
