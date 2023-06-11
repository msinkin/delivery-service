import { Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";
import contactsMessage from "../messages/contacts.message";


export class ContactsCommand extends Command {
    constructor(bot: Telegraf<IBotContext>) {
        super(bot);
    }

    handle(): void {
        this.bot.command("contacts", (ctx) => {
            ctx.reply(contactsMessage,
                { parse_mode: "Markdown" }
            );
        });
    }
}