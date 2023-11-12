import { client } from 'init/client';
import { BaseCommand, BaseSession, Card, CommandFunction } from 'kasumi.js';
import axios from 'axios';

class AppCommand extends BaseCommand {
    name = '壁纸';
    description = '随机壁纸';

    func: CommandFunction<BaseSession, any> = async (session) => {
        // 请求的 URL
        const url = 'https://api.52vmy.cn/api/img/pc?type=json';

        try {
            const { data } = await axios.get(url);
            console.info('AppCommand ~ func:CommandFunction<BaseSession,any>= ~ data', data);
            const card = new Card();
            card.addTitle('电脑壁纸');
            card.addDivider();
            card.addImage(data.url);
            await session.send(card);
        } catch {
            await session.send('接口错误');
        }
    };
}

const bizhi = new AppCommand();
export default bizhi;

client.plugin.load(bizhi);
