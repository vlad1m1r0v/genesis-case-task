import {promises as fs} from 'fs';
import path from "path";
import {RepositoryInterface} from "../common/interfaces/repository.interface";
import {ItemProps} from "../common/interfaces/item.props.interface";

const STORAGE_DIR = path.join(__dirname, "..", "..", "emails.json");

class EmailRepository implements RepositoryInterface {
    async save(item: ItemProps): Promise<void> {
        try {
            const emailsJSON = await fs.readFile(STORAGE_DIR, 'utf-8');
            const emails = JSON.parse(emailsJSON) as ItemProps[];
            emails.push(item);
            const newEmailsJSON = JSON.stringify(emails);
            await fs.writeFile(STORAGE_DIR, newEmailsJSON, {encoding: 'utf-8'})
        } catch (e) {
            throw e
        }
    }

    async find(predicate: (item: ItemProps) => boolean): Promise<ItemProps | null> {
        try {
            const emailsJSON = await fs.readFile(STORAGE_DIR, 'utf-8');
            const emails = JSON.parse(emailsJSON) as ItemProps[];
            return emails.find(predicate) || null;
        } catch (e) {
            throw e
        }
    }
}

export default EmailRepository;