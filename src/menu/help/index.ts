import { client } from 'init/client';
import { BaseCommand, BaseSession, CommandFunction, Card } from 'kasumi.js';

class AppCommand extends BaseCommand {
    name = 'help';
    description = '帮助';

    list = [
        { label: '每日一言', command: '/每日一言' },
        { label: '星座运势', command: '/星座 双子座' },
        { label: '随机美女', command: '/美女' },
        { label: '随机帅哥', command: '/帅哥' },
        { label: '随机壁纸', command: '/壁纸' },
        { label: '舔狗日记', command: '/舔狗日记' },
        { label: '查看方舟生存飞升更新日志', command: '/asa' },
    ];

    func: CommandFunction<BaseSession, any> = async (session) => {
        const card = new Card();
        card.setTheme('info');
        card.addTitle('功能列表');
        card.addDivider();
        this.list.forEach((item) => {
            card.addModule({
                type: 'section',
                text: {
                    type: 'kmarkdown',
                    content: `${item.label}\n\`\`\`html\n${item.command}\`\`\`\n`,
                },
            });
        });
        await session.send(card);
    };
}

const help = new AppCommand();
export default help;

client.plugin.load(help);
