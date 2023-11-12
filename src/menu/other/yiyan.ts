import { client } from 'init/client';
import { BaseCommand, BaseSession, CommandFunction } from 'kasumi.js';
import axios from 'axios';

class AppCommand extends BaseCommand {
    name = '每日一言';
    description = '每日一言';

    func: CommandFunction<BaseSession, any> = async (session) => {
        // 请求的 URL
        const url = 'https://v.api.aa1.cn/api/yiyan/index.php';

        try {
            const { data } = await axios.get(url);
            let result = data.replace(/<\/?[^>]+(>|$)/g, '');
            if (result) await session.send(result);
        } catch {
            await session.send('接口错误');
        }
    };
}

const yiyan = new AppCommand();
export default yiyan;

client.plugin.load(yiyan);
