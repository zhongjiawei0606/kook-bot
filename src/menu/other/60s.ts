import { client } from 'init/client';
import { BaseCommand, BaseSession, Card, CommandFunction } from 'kasumi.js';
import axios from 'axios';

class AppCommand extends BaseCommand {
    name = '60s';
    description = '60秒看世界';

    func: CommandFunction<BaseSession, any> = async (session) => {
        // 请求的 URL
        const url = 'https://api.52vmy.cn/api/wl/60s?type=json';

        try {
            // const { data } = await axios.get(url);
            // const list = data.data || [];
            // console.info('AppCommand ~ func:CommandFunction<BaseSession,any>= ~ data', data);
            // const card = new Card();
            // card.addTitle('60秒看世界');
            // card.addDivider();
            // list.forEach((item: any) => {
            //     card.addModule({
            //         type: 'section',
            //         text: {
            //             type: 'kmarkdown',
            //             content: `> ${item.content}\n`,
            //         },
            //     });
            // });
            // await session.send(data);
            await session.send('敬请期待60秒看世界');
        } catch (err: any) {
            console.info('AppCommand ~ func:CommandFunction<BaseSession,any>= ~ err', err);
            await session.send('接口错误');
        }
    };
}

const yiyan = new AppCommand();
export default yiyan;

client.plugin.load(yiyan);
