import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { PgDataSource } from '../datasources';
import { Role, RoleRelations, User } from '../models';
import { UserRepository } from './user.repository';
export declare class RoleRepository extends DefaultCrudRepository<Role, typeof Role.prototype.name, RoleRelations> {
    protected userRepositoryGetter: Getter<UserRepository>;
    readonly users: HasManyRepositoryFactory<User, typeof Role.prototype.name>;
    constructor(dataSource: PgDataSource, userRepositoryGetter: Getter<UserRepository>);
}
