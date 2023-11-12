import { client } from 'init/client';
import { BaseCommand, BaseSession, Card, CommandFunction } from 'kasumi.js';
import axios from 'axios';

class AppCommand extends BaseCommand {
    name = '星座';
    description = '星座运势';

    func: CommandFunction<BaseSession, any> = async (session) => {
        const url = 'https://service-m9yegcn9-1311248022.sh.apigw.tencentcs.com/release/star?n=';
        const name = session.args.join(' ');

        try {
            const { data } = await axios.get(`${url}${name}`);
            if (typeof data === 'string') await session.send(`请输入正确的星座，例如：/星座 双子座`);
            else {
                const card = new Card();
                card.addTitle(name);
                card.addDivider();
                card.addModule({
                    type: 'section',
                    text: {
                        type: 'kmarkdown',
                        content: `幸运颜色：\`${data.luckColor}\`\n幸运数字：\`${data.luckNumber}\`\n速配星座：\`${data.adaptiveConstellation}\`\n`,
                    },
                });
                card.addDivider();
                card.addModule({
                    type: 'section',
                    text: {
                        type: 'kmarkdown',
                        content: `宜：\`${data.fitting}\`\n忌：\`${data.avoid}\`\n`,
                    },
                });
                card.addDivider();
                const { index } = data;
                card.addModule({
                    type: 'section',
                    text: {
                        type: 'kmarkdown',
                        content: `综合：\`${index.composite}\`\n爱情：\`${index.love}\`\n事学：\`${index.cause}\`\n财富：\`${index.money}\`\n健康：\`${index.heath}\`\n商谈：\`${index.talk}\`\n`,
                    },
                });
                card.addDivider();
                card.addModule({
                    type: 'section',
                    text: {
                        type: 'kmarkdown',
                        content: `综合运势：\n> ${data.composite}\n\n爱情运势：\n> ${data.love}\n\n事业学业：\n> ${data.cause}\n\n财富运势：\n> ${data.money}\n\n健康运势：\n> ${data.health}\n\n`,
                    },
                });
                await session.send(card);
            }
        } catch {
            await session.send('接口错误');
        }
    };
}

const star = new AppCommand();
export default star;

client.plugin.load(star);
