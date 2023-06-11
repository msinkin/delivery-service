import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import { trackMessage, trackListMessage } from "../messages/track.message";

const HOST = "http://127.0.0.1:25565"

enum Action {
    Tracking = "tracking",
    Untracking = "untracking",
    ClearTrackingList = "clearTrackingList"
}

export class TrackCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    commands() {
        this.bot.command("track", (ctx) => {
            let trackId = parseInt(ctx.message.text.replace("/track", ""));
            
            if (!trackId)
                return ctx.reply("Неверный формат трек-номера. Трек номер является целым числом указанным без пробелом, например: /track 123");

            let button: { text: string, action: Action };

            if (!ctx.session.tracking) ctx.session.tracking = [];

            if (ctx.session.tracking.includes(trackId))
                button = {
                    text: "Перестать отслеживать",
                    action: Action.Untracking
                };
            else
                button = {
                    text: "Отслеживать изменения",
                    action: Action.Tracking
                };

            ctx.session.lastTrackId = trackId;

            ctx.replyWithMarkdownV2(
                trackMessage(trackId),
                Markup.inlineKeyboard([
                    Markup.button.url("Открыть сайт", `${HOST}/track/${trackId}`),
                    Markup.button.callback(button.text, button.action)
                ])
            );
        });

        this.bot.command("my", (ctx) => {
            let trackList = ctx.session.tracking.join(",\n");
            ctx.reply(
                trackListMessage(trackList),
                Markup.inlineKeyboard([
                    Markup.button.callback("Очистить список отслеживаемых посылок", Action.ClearTrackingList)
                ])
            );
        })
    }

    actions() {
        this.bot.action(Action.Tracking, (ctx) => {
            let trackId = ctx.session.lastTrackId;

            if (!ctx.session.tracking) ctx.session.tracking = [];
            if (!ctx.session.tracking.includes(trackId)) ctx.session.tracking.push(trackId);

            ctx.reply(`Посылка №${trackId} теперь отслеживается.`);
        })

        this.bot.action(Action.Untracking, (ctx) => {
            let { lastTrackId, tracking } = ctx.session;

            let index = tracking.indexOf(lastTrackId);

            if (index !== -1) {
                ctx.session.tracking.splice(index, 1);
                ctx.reply(`Посылка №${lastTrackId} больше не отслеживается.`);
            } else {
                ctx.reply(`Посылка №${lastTrackId} не остлеживалась.`);
            }
        })

        this.bot.action(Action.ClearTrackingList, (ctx) => {
            ctx.session.tracking = [];
            ctx.reply("Список отслеживаемых посылок очищен.")
        })
    }

    handle() {
        this.commands();
        this.actions();
    }
}