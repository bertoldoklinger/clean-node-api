import { AccountModel } from '../models/account'

export interface AddAccountModel {
  id: string
  name: string
  email: string
  password: string
}

export interface AddAccount {
  add(account: AddAccountModel): Promise<AccountModel>
}
