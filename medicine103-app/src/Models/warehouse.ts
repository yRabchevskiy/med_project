
export enum IMedicineState {
  CREMA = 'crema',
  TUBE = 'tube',
  TABLET = 'tablet',
  INJECTION = 'injection'
}

export interface IMedicine {
  _id?: string;
  name: string;
  dose: string;
  count: string;
  group: string;
  description: string;
  state: IMedicineState | string;
  expDate: string;
}

export const createMedicineItem = (dataItem?: IMedicine): IMedicine => {
  if (dataItem) return dataItem;
  return {
    name: '',
    dose: '',
    count: '',
    group: '',
    description: '',
    state: '',
    expDate: '',
  }
};