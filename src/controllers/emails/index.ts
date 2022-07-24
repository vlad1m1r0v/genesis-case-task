import EmailRepository from "../../data/email.repository";
import EmailsService from "../../services/emails/emails.service";
import EmailsController from "./emails.controller";

const emailRepository = new EmailRepository();
const emailService = new EmailsService({repository: emailRepository});
const emailController = new EmailsController({emailService})

export default emailController;