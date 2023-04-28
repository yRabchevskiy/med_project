export interface ITo {
  date: string;
  run: number;
}
export interface ICarHistory {
  driver: string;
  last_to: ITo;
}
export interface ICar {
  id: string;
  name: string;
  model: string;
  driver: string;
  team_leader: string;
  vin: string;
  year: string;
  history: ICarHistory[];
}