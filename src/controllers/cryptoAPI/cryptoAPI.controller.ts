import {CryptoAPIControllerInterface} from "../../common/interfaces/cryptoAPI.controller.interface";
import {Request, Response} from "express";
import {BitcoinRateService} from "../../common/types/cryptoAPI.service.type";
import {CryptoAPIControllerPropsInterface} from "../../common/interfaces/cryptoAPI.controller.props.interface";
import {StatusCodes} from "../../common/enums/statuscodes.enums";

class CryptoAPIController implements CryptoAPIControllerInterface {
    bitcoinRateService: BitcoinRateService;

    constructor({bitcoinRateService}: CryptoAPIControllerPropsInterface) {
        this.bitcoinRateService = bitcoinRateService;
    }

    async rate(req: Request, res: Response): Promise<void> {
        try {
            const rate = await this.bitcoinRateService.getBitcoinRate();
            res.status(StatusCodes.OK).send({rate});
        } catch (e) {
            console.log(e);
            res.status(StatusCodes.BAD_REQUEST).send();
        }
    }
}

export default CryptoAPIController;