import https, { RequestOptions } from 'https';

class OpenAIGPT {
    private static apiKey: string = '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'; // 使用环境变量
    private static apiUrl: string = 'api.openai.com';
    private static apiPath: string = '/v1/engines/davinci/completions';

    static async generateText(prompt: string, maxTokens: number = 100): Promise<string> {
        try {
            const postData = JSON.stringify({
                prompt: prompt,
                max_tokens: maxTokens,
            });

            const options: RequestOptions = {
                hostname: OpenAIGPT.apiUrl,
                path: OpenAIGPT.apiPath,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OpenAIGPT.apiKey}`,
                },
            };

            const response = await new Promise<string>((resolve, reject) => {
                const req = https.request(options, (res) => {
                    let data = '';

                    res.on('data', (chunk) => {
                        data += chunk;
                    });

                    res.on('end', () => {
                        resolve(data);
                    });
                });

                req.on('error', (error) => {
                    reject(error);
                });

                req.write(postData);
                req.end();
            });

            const responseData = JSON.parse(response);
            return responseData.choices[0].text;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
}

// 在这里可以添加其他逻辑

export default OpenAIGPT;
