import { Request, Response } from "express";
import { EmailsControllerInterface } from "../../common/interfaces/emails.controller.interface";
import { EmailDto } from "../../common/dtos/email.dto";
import { EmailService } from "../../common/types/emails.service.type";
import { EmailsControllerPropsInterface } from "../../common/interfaces/emails.controller.props.interface";
import { StatusCodes } from "../../common/enums/statuscodes.enums";
import { HttpMessages } from "../../common/enums/httpmessages.enums";

class EmailsController implements EmailsControllerInterface {
  emailService: EmailService;

  constructor({ emailService }: EmailsControllerPropsInterface) {
    this.emailService = emailService;
  }

  async subscribe(req: Request, res: Response): Promise<void> {
    try {
      const email = req.body as EmailDto;
      const candidate = await this.emailService.findEmail(
        (item) => item.email == email.email
      );
      if (candidate) {
        res.status(StatusCodes.CONFLICT).send();
      } else {
        await this.emailService.addEmail(email);
        res.status(StatusCodes.OK).send(HttpMessages.EMAIL_ADDED);
      }
    } catch (e) {
      res.status(StatusCodes.CONFLICT).send();
    }
  }
}

export default EmailsController;
