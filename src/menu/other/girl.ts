import { client } from 'init/client';
import { BaseCommand, BaseSession, Card, CommandFunction } from 'kasumi.js';
import axios from 'axios';

class AppCommand extends BaseCommand {
    name = '美女';
    description = '随机美女图片';

    func: CommandFunction<BaseSession, any> = async (session) => {
        // 请求的 URL
        const url = 'https://api.52vmy.cn/api/img/girl';

        try {
            const { data } = await axios.get(url);
            const card = new Card();
            card.addTitle('美女');
            card.addDivider();
            card.addImage(data.url);
            await session.send(card);
        } catch {
            await session.send('接口错误');
        }
    };
}

const girl = new AppCommand();
export default girl;

client.plugin.load(girl);
