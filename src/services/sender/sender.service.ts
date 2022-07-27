import nodemailer from "nodemailer";
import { USER, PASS } from "../../configs/config";
import {
  SendEmailPropsInterface,
  SenderServiceInterface,
} from "../../common/interfaces/sender.service.interface";

class SenderService implements SenderServiceInterface {
  transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      auth: {
        user: USER,
        pass: PASS,
      },
    });
  }

  sendEMails({ receivers, bitcoinRate }: SendEmailPropsInterface): void {
    receivers.forEach((receiver) => {
      const options = {
        from: `"₿ news" <${USER}>`,
        to: receiver.email,
        subject: "bitcoin rate",
        html: `<p>current bitcoin rate: <b>${bitcoinRate}<b/> UAH</p>`,
      };
      this.transporter.sendMail(options, (e) => {
        if (e) {
          throw e;
        }
      });
    });
  }
}

export default SenderService;
