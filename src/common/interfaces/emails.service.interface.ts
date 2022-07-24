import {EmailDto} from "../dtos/email.dto";

export interface EmailsServiceInterface {
    addEmail: (email: EmailDto) => Promise<void>;

    findEmail(predicate: (item: EmailDto) => boolean): Promise<EmailDto | null>;
}