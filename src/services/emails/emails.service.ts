import { EmailsServiceInterface } from "../../common/interfaces/emails.service.interface";
import { EmailDto } from "../../common/dtos/email.dto";
import { Repository } from "../../common/types/repository.type";
import { EmailsServicePropsInterface } from "../../common/interfaces/emails.service.props.interface";

class EmailsService implements EmailsServiceInterface {
  repository: Repository;

  constructor({ repository }: EmailsServicePropsInterface) {
    this.repository = repository;
  }

  async findEmail(
    predicate: (item: EmailDto) => boolean
  ): Promise<EmailDto | null> {
    try {
      return await this.repository.find(predicate);
    } catch (e) {
      throw e;
    }
  }

  async addEmail(email: EmailDto): Promise<void> {
    try {
      await this.repository.save(email);
    } catch (e) {
      throw e;
    }
  }

  async selectAll(): Promise<EmailDto[]> {
    try {
      return await this.repository.selectAll();
    } catch (e) {
      throw e;
    }
  }
}

export default EmailsService;
