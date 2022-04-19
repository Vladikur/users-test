import { IUser } from "../types/types"

export const userInitialState: IUser = {
  id: 1,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    city: '',
    zipcode: '',
  },
  phone: '',
  website: '',
  company: {
    name: '',
  },
  comment: '',
}
