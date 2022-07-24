import {CryptoAPIServiceInterface} from "../../common/interfaces/cryptoAPI.service.interface";
import axios from 'axios';
import {CryptoAPIResponseInterface} from "../../common/interfaces/cryptoAPI.response.interface";
import {CRYPTOCURRENCY_API_KEY} from "../../configs/config";

const BITCOIN_RATE_API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin&convert=UAH'

class CryptoAPIService implements CryptoAPIServiceInterface {
    http: typeof axios;

    constructor() {
        this.http = axios;
    }

    async getBitcoinRate(): Promise<number> {
        try {
            const response = await this.http.get(BITCOIN_RATE_API_URL, {
                headers: {
                    'X-CMC_PRO_API_KEY': CRYPTOCURRENCY_API_KEY!
                }
            })
            const data = response.data as CryptoAPIResponseInterface;
            return data.data["1"].quote.UAH.price;
        } catch (e) {
            throw e;
        }
    }
}

export default CryptoAPIService;