import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'


export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    return {
      id: 'any_id',
      name: 'any_name',
      email: 'any_mail',
      password: 'any_password'
    }
  }
}
