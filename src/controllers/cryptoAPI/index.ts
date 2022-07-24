import CryptoAPIService from "../../services/cryptoAPI/cryptoAPI.service";
import CryptoAPIController from "./cryptoAPI.controller";

const cryptoAPIService = new CryptoAPIService();
const cryptoAPIController = new CryptoAPIController({bitcoinRateService: cryptoAPIService});

export default cryptoAPIController;