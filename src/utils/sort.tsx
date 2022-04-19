import { IUser } from "../types/types";

function byField(field1: string, field2: string) {
  return (a: any, b: any) => a[field1][field2] > b[field1][field2] ? 1 : -1;
}

export const sortOnCity = (arr: IUser[]): IUser[] => {
  const sortHotels = arr.sort(byField('address', 'city'));
  return sortHotels
};

export const sortOnCompany = (arr: IUser[]): IUser[] => {
  const sortHotels = arr.sort(byField('company', 'name'));
  return sortHotels
};