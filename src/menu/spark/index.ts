import { client } from 'init/client';
import { BaseCommand, BaseSession, CommandFunction, Card } from 'kasumi.js';
// import StarfireModel from './starfireModel';

class TestCommand extends BaseCommand {
    name = 's';
    description = '星火认知大模型';

    func: CommandFunction<BaseSession, any> = async (session) => {
        // const model = new StarfireModel('16098b846a5e321f405fbd6d3d6641b5', 'ZDQxNzY4ODljNzRlN2FhZjVjOTUyNGU0');
        // // 调用模型的方法，例如获取信息
        // model
        //     .request('/info')
        //     .then((data) => {
        //         console.log('获取到的信息：', data);
        //     })
        //     .catch((error) => {
        //         console.error('请求失败：', error);
        //     });
        // const card = new Card();
        // card.setTheme('danger');
        // card.setSize('sm');
        // card.addTitle('chatGPT3.5尚未对接，敬请期待。');
        // session.send(card);
    };
}

const testCommand = new TestCommand();
export default testCommand;

client.plugin.load(testCommand);
