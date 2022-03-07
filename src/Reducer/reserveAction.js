import { RESERVE_ROOM } from "./reserveType";

export const reserveRoom=(room)=>{
    return {
        type:RESERVE_ROOM,
        payload:room
    }
}