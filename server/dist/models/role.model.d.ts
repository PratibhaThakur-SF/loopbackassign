import { Entity } from '@loopback/repository';
import { User } from './user.model';
declare enum RoleKey {
    superadmin = "superadmin",
    admin = "admin",
    subscriber = "subscriber"
}
export declare class Role extends Entity {
    name: string;
    key: RoleKey;
    description: string;
    users: User[];
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export declare type RoleWithRelations = Role & RoleRelations;
export {};
