export interface Customer {
  firstName: string;
  lastName: string;
  city: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export class WizardState {
  customer: Customer;
  contact: Contact;
  skills: Array<string>;
}
