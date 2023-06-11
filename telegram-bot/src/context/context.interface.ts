import { Context } from "telegraf";

export interface SessionData {
    lastTrackId: number,
    tracking: number[]
}

export interface IBotContext extends Context {
    session: SessionData;
}