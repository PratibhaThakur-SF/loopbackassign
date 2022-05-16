import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    address: string;
    customerId: number;
    roleName: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
