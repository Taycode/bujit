import { BaseRepository } from './base';
import { UserModel } from '../model/user';
import { IUser } from '../model/user';

export class UserRepository extends BaseRepository<IUser>{
constructor () {
    super(UserModel);
}
}
