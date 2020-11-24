import CtrlFacade from "../app/Controller/Facade";
import CtrlGame from "../app/Controller/Game";
import * as event from "./events";
import { eventMapping } from "../app/Common/functions";

eventMapping('DOMContentLoaded', CtrlFacade, 'listenerReady');
eventMapping(event.EventCtrlPageIndex.type, CtrlFacade, 'listenerReady');
eventMapping(event.EventSocialIntro.type, CtrlFacade, 'listenerSocialIntro');
eventMapping(event.EventSocialRank.type, CtrlFacade, 'listenerSocialRank');

eventMapping(event.EventCtrlGameStart.type, CtrlGame, 'listenerGameStart');
eventMapping(event.EventCtrlGameStop.type, CtrlGame, 'listenerGameStop');
