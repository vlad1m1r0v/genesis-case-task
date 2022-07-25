import EmailRepository from "../../data/email.repository";
import EmailsService from "../../services/emails/emails.service";
import CryptoAPIService from "../../services/cryptoAPI/cryptoAPI.service";
import SenderService from "../../services/sender/sender.service";
import SenderController from "./sender.controller";

const emailRepository = new EmailRepository();
const emailService = new EmailsService({ repository: emailRepository });
const cryptoAPIService = new CryptoAPIService();
const senderService = new SenderService();
const senderController = new SenderController({
  mailer: senderService,
  bitcoinRateService: cryptoAPIService,
  emailService: emailService,
});

export default senderController;
