import { client } from 'init/client';
import { BaseCommand, BaseSession, Card, CommandFunction } from 'kasumi.js';
import axios from 'axios';

class AppCommand extends BaseCommand {
    name = '帅哥';
    description = '随机帅哥图片';

    func: CommandFunction<BaseSession, any> = async (session) => {
        // 请求的 URL
        const url = 'https://api.52vmy.cn/api/img/boy';

        try {
            const { data } = await axios.get(url);
            const card = new Card();
            card.addTitle('帅哥');
            card.addDivider();
            card.addImage(data.url);
            await session.send(card);
        } catch {
            await session.send('接口错误');
        }
    };
}

const boy = new AppCommand();
export default boy;

client.plugin.load(boy);
