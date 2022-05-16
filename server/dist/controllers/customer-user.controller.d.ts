import { Count, Filter, Where } from '@loopback/repository';
import { Customer, User } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomerUserController {
    protected customerRepository: CustomerRepository;
    constructor(customerRepository: CustomerRepository);
    find(id: number, filter?: Filter<User>): Promise<User[]>;
    create(id: typeof Customer.prototype.id, user: Omit<User, 'id'>): Promise<User>;
    patch(id: number, user: Partial<User>, where?: Where<User>): Promise<Count>;
    delete(id: number, where?: Where<User>): Promise<Count>;
}
