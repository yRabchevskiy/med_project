export interface IUnit {
  unit_name: string;
}
export interface IUser {
  id: string;
  birthday: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  role: string;
  rang: string;
  unit: IUnit;
}

export interface ICurrentUser {
  uid: string;
  email: string | null;
}