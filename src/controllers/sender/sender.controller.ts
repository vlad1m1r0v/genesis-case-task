import { SenderControllerInterface } from "../../common/interfaces/sender.controller.interface";
import { Mailer } from "../../common/types/sender.service.type";
import { BitcoinRateService } from "../../common/types/cryptoAPI.service.type";
import { EmailService } from "../../common/types/emails.service.type";
import { StatusCodes } from "../../common/enums/statuscodes.enums";
import { Request, Response } from "express";

interface SenderControllerPropsInterface {
  mailer: Mailer;
  bitcoinRateService: BitcoinRateService;
  emailService: EmailService;
}

class SenderController implements SenderControllerInterface {
  mailer: Mailer;
  bitcoinRateService: BitcoinRateService;
  emailService: EmailService;

  constructor({
    mailer,
    bitcoinRateService,
    emailService,
  }: SenderControllerPropsInterface) {
    this.mailer = mailer;
    this.bitcoinRateService = bitcoinRateService;
    this.emailService = emailService;
  }

  async sendEmails(req: Request, res: Response): Promise<void> {
    try {
      const rate = await this.bitcoinRateService.getBitcoinRate();
      const receivers = await this.emailService.selectAll();
      await this.mailer.sendEMails({ receivers, bitcoinRate: rate.toString() });
      res.status(StatusCodes.OK).send();
    } catch (e) {
      res.status(StatusCodes.BAD_REQUEST).send();
    }
  }
}

export default SenderController;
