import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { User, UserRelations, Customer, Role } from '../models';
import { CustomerRepository } from './customer.repository';
import { RoleRepository } from './role.repository';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    protected customerRepositoryGetter: Getter<CustomerRepository>;
    protected roleRepositoryGetter: Getter<RoleRepository>;
    readonly customer: BelongsToAccessor<Customer, typeof User.prototype.id>;
    readonly role: BelongsToAccessor<Role, typeof User.prototype.id>;
    constructor(dataSource: PgDataSource, customerRepositoryGetter: Getter<CustomerRepository>, roleRepositoryGetter: Getter<RoleRepository>);
}
