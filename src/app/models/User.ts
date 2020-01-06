import { Role } from './enums/Role';
import { Address } from './Address';

export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    companyName: string;
    address: Address;
    phone: string;
    email: string;
    password?: string;
    role: Role;
    token?: string;
}