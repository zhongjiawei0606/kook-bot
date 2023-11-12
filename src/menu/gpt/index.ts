import { client } from 'init/client';
import { BaseCommand, BaseSession, CommandFunction, Card } from 'kasumi.js';
import OpenAIGPT from './openaiGPT';

class TestCommand extends BaseCommand {
    name = 'g';
    description = 'chatGPT3.5';

    func: CommandFunction<BaseSession, any> = async (session) => {
        const card = new Card();
        card.setTheme('danger');
        card.setSize('sm');
        card.addTitle('chatGPT3.5尚未对接，敬请期待。');
        await session.send(card);
    };
}

const testCommand = new TestCommand();
export default testCommand;

client.plugin.load(testCommand);
