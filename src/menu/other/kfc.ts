import { client } from 'init/client';
import { BaseCommand, BaseSession, CommandFunction } from 'kasumi.js';
import axios from 'axios';

class AppCommand extends BaseCommand {
    name = 'kfc';
    description = '疯狂星期四文案';

    func: CommandFunction<BaseSession, any> = async (session) => {
        // 请求的 URL
        const url = 'https://api.khkj6.com/kfc?type=';
        const value = session.args.join(' ');

        try {
            const { data } = await axios.get(`${url}${value}`);
            console.info('AppCommand ~ func:CommandFunction<BaseSession,any>= ~ data', data);
            // let result = data.replace(/<\/?[^>]+(>|$)/g, '');
            // if (result) await session.send(result);
        } catch {
            await session.send('接口错误');
        }
    };
}

const kfc = new AppCommand();
export default kfc;

client.plugin.load(kfc);
