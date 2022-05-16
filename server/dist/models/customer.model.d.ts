import { Entity } from '@loopback/repository';
import { User } from './user.model';
export declare class Customer extends Entity {
    id?: number;
    name: string;
    website: string;
    address: string;
    users: User[];
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export declare type CustomerWithRelations = Customer & CustomerRelations;
