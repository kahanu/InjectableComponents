export class Company {
    id: any;
    name: string;
    salesRep: string;
}

export class Supplier {
    id: any;
    name: string;
    desc: string;
    address: string;
}

export class ChildItem {
    companyId: number;
    h1: string;
    content: string;
}

export class Notary {
    companyId: number;
    name: string;
    address: string;
    website: string;
}
