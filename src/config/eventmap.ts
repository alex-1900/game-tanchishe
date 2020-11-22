import CtrlFacade from "../app/Controller/Facade";
import CtrlGame from "../app/Controller/Game";
import * as event from "./events";
import { eventMapping } from "../app/Common/functions";

eventMapping('DOMContentLoaded', CtrlFacade, 'listenerReady');
eventMapping(event.EventCtrlGameStart.type, CtrlGame, 'listenerGameStart');
eventMapping(event.EventCtrlGameStop.type, CtrlGame, 'listenerGameStop');
