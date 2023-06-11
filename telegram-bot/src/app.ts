import { Telegraf, session } from "telegraf";
import { IConfigService } from "./config/config.interface";
import { ConfigService } from "./config/config.service";
import { IBotContext } from "./context/context.interface";
import { Command } from "./commands/command.class";
import { StartCommand } from "./commands/start.command";
import LocalSession from "telegraf-session-local";
import { TrackCommand } from "./commands/track.command";
import { HelpCommand } from "./commands/help.command";
import { ContactsCommand } from "./commands/contacts.command";

class Bot {
    bot: Telegraf<IBotContext>;
    commands: Command[] = [];

    constructor(private readonly configService: IConfigService) {
        this.bot = new Telegraf<IBotContext>(this.configService.get("TOKEN"));
        this.bot.use(
            new LocalSession({
                database: "sessions.json" 
            }).middleware()
        );
    }

    init() {
        this.commands = [
            new StartCommand(this.bot),
            new HelpCommand(this.bot),
            new TrackCommand(this.bot),
            new ContactsCommand(this.bot)
        ];

        for (const command of this.commands) 
            command.handle();
        
        this.bot.launch();
    }

    stop(message: string) {
        this.bot.stop(message);
    }
}

const bot = new Bot(new ConfigService());
bot.init();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));