import {Entity, hasMany, model, property} from '@loopback/repository';
import {User} from './user.model';
enum RoleKey {
  superadmin = 'superadmin',
  admin = 'admin',
  subscriber = 'subscriber',
}
@model({
  name: 'roles',
})
export class Role extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(RoleKey),
    },
  })
  key: RoleKey;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @hasMany(() => User, {
    keyFrom: 'roleName',
    keyTo: 'roleName',
  })
  users: User[];

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
