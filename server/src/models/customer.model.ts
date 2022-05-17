import {Entity, hasMany, model, property} from '@loopback/repository';
import {User} from './user.model';

@model({name: 'customer1'})
export class Customer extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  website: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @hasMany(() => User, {
    keyFrom: 'customerId',
    keyTo: 'customerId',
  })
  users: User[];

  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
