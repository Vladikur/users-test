interface IAdress {
  street: string;
  city: string;
  zipcode: string;
}

interface ICompany {
  name: string;
}


export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAdress;
  phone: string;
  website: string;
  company: ICompany;
  comment?: string | undefined,
}

export interface IValues {
  name: string,
  username: string,
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
  comment: string | undefined,
}