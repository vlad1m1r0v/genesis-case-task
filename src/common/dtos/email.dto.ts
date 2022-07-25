interface EmailDtoProps {
  email: string;
}

export class EmailDto {
  email: string;

  constructor({ email }: EmailDtoProps) {
    this.email = email;
  }
}
