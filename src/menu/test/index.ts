import { client } from 'init/client';
import { BaseCommand, BaseSession, CommandFunction, Card, ButtonClickedEvent } from 'kasumi.js';

class TestCommand extends BaseCommand {
    name = 't';
    description = '测试';
    // img = require('../../images/avatar.png');
    // img = 'https://img.kookapp.cn/assets/2023-05/SrEYB8jgCF12p0wk.png';

    func: CommandFunction<BaseSession, any> = async (session) => {
        const cards = new Card();

        // 主题，可选的值为：primary, success, danger, warning, info, secondary, none.
        // 默认为 primary, none 时不显示侧边框
        // primary
        // rgb(51, 170, 255);
        // success
        // rgb(0, 210, 135);
        // danger
        // rgb(255,77,66);
        // warning
        // rgb(255,143,25);
        // info
        // rgb(51,170,255);
        // secondary
        // rgb(170,175,179);
        // cards.setTheme('success');

        // 大小，可选值为：sm, lg
        // 默认为 lg
        // cards.setSize('sm');

        // 标题模块只能支持展示标准文本（text），突出标题样式
        // text 为文字元素且 content 不能超过 100 个字
        // cards.addModule({
        //     type: 'header',
        //     text: {
        //         type: 'plain-text',
        //         content: '标题1 - 😇',
        //     },
        // });

        // 结构化的内容，显示文本+其它元素。
        // text 可以为 plain-text, kmarkdown 或者 paragraph
        // accessory 可以为 image 或者 button
        // button 不能放置在左侧
        // mode 代表 accessory 是放置在左侧还是在右侧
        // cards.addModule({
        //     type: 'section',
        //     mode: 'left', //accessory在左侧还是在右侧
        //     text: {
        //         type: 'kmarkdown',
        //         // content: '**加粗文字**\n*斜体文字*\n~~删除线~~\n(spl)剧透(spl)\n```html\n<span>123</span>```\n(chn)42068567(chn)',
        //         content: '**加粗文字**',
        //     },
        //     accessory: {
        //         type: 'button',
        //         theme: 'warning',
        //         value: 'this value',
        //         click: 'return-val',
        //         text: '这是一个按钮',
        //     },
        // });
        // cards.addTextWithButton('A text module with image accessory', {
        //     // position: 'right',
        //     buttonContent: 'Text on The Button',
        //     click: 'link', // click: 'link',
        //     value: 'https://translate.google.com/?sl=auto&tl=en&text=%E5%A4%B4%E5%83%8F&op=translate',
        //     theme: 'info',
        // });

        //  1 到多张图片的组合
        // elements 只能有 image 元素，只能有 1-9 张图片
        // cards.addModule({
        //     type: 'image-group',
        //     elements: [
        //         //图片元素，其它元素无效
        //     ],
        // });

        // 1 到多张图片的组合，与图片组模块不同，图片并不会裁切为正方形。多张图片会纵向排列。
        // elements 只能有 image 元素，只能有 1-9 张图片
        // cards.addModule({
        //     type: 'container',
        //     elements: [
        //         //图片元素，其它元素无效
        //     ],
        // });

        // 交互模块中包含交互控件元素，目前支持的交互控件为按钮（button）
        // elements 中只能为 button
        // elements 最多只能有 4 个
        // cards.addModule({
        //     type: 'action-group',
        //     elements: [
        //         // buttons
        //     ],
        // });

        // 展示图文混合的内容。
        // elements 中可以为：plain-text, kmarkdown, image
        // elements 最多可包含 10 个元素
        // cards.addModule({
        //     type: 'context',
        //     elements: [],
        // });

        // 展示分割线。
        // cards.addModule({
        //     type: 'divider',
        // });

        // 展示文件，目前有三种，文件，视频和音频。
        // cover 仅在音频的时候有效，是音频的封面图。
        // cards.addModule({
        //     type: 'file|audio|video',
        //     src: '', //文件|音频|视频地址
        //     title: '标题',
        //     cover: '', //封面图
        // });

        // 展示倒计时。
        // mode 主要是倒计时的样式，目前支持三种样式。
        // startTime 和 endTime 为毫秒时间戳，startTime 和 endTime 不能小于服务器当前时间戳。
        // day,hour,second
        // cards.addModule({
        //     type: 'countdown',
        //     endTime: 1608819168000, //到期的毫秒时间戳
        //     startTime: 1608819168000, //起始的毫秒时间戳，仅当mode为second才有这个字段
        //     mode: 'second', //倒计时样式, 按天显示，按小时显示或者按秒显示
        // });

        // 发送
        await session.send(cards);
    };
}

const testCommand = new TestCommand();
export default testCommand;

client.plugin.load(testCommand);
