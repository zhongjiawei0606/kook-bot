import axios from 'axios';

class StarfireModel {
    private apiKey: string;
    private apiSecret: string;

    constructor(apiKey: string, apiSecret: string) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
    }

    async request(endpoint: string, params?: any): Promise<any> {
        const url = `https://api.starfire.cn${endpoint}`;
        const response = await axios.post(url, params, {
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': this.apiKey,
                'X-API-SECRET': this.apiSecret,
            },
        });
        return response.data;
    }
}

export default StarfireModel;
