import { client } from 'init/client';
import { BaseCommand, BaseSession, CommandFunction, Card } from 'kasumi.js';

class TestCommand extends BaseCommand {
    name = 'asa';
    description = '查看方舟生存飞升更新日志';

    func: CommandFunction<BaseSession, any> = async (session) => {
        const card = new Card();
        card.setSize('sm');
        card.addTitle('ARK: Survival Ascended');
        card.addDivider();
        card.addTextWithButton('方舟生存飞升更新日志', {
            buttonContent: '点击查看',
            click: 'link',
            value: 'https://survivetheark.com/index.php?/forums/',
            theme: 'info',
        });

        await session.send(card);
    };
}

const testCommand = new TestCommand();
export default testCommand;

client.plugin.load(testCommand);
