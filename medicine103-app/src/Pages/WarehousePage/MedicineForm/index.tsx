import React from 'react';
import { IMedicine, createMedicineItem } from '../../../Models/warehouse';
import TextInput from '../../../Components/Inputs/TextInput';
import { jsonClone } from '../../../Helpers/base';

interface Props {
  dataItem?: IMedicine;
  onSubmit: (dataItem: IMedicine) => void;
}

const MedicineForm: React.FC<Props> = (props: Props) => {
  const [dataItem, setDataItem] = React.useState<IMedicine>(createMedicineItem(props.dataItem));

  const updateDataItem = (value: string, field: string) => {
    const _obj: IMedicine = jsonClone(dataItem);
    _obj[field as keyof IMedicine] = value;
    setDataItem(_obj);
  };

  const onSave = (e: React.SyntheticEvent) => {
    e.preventDefault();
    props.onSubmit(dataItem);
  };

  // description: string;
  // state: IMedicineState | string;
  return (
    <form onSubmit={onSave}>
      <TextInput
        label="Name"
        value={dataItem.name}
        name="name"
        onChange={v => updateDataItem(v, 'name')} />
      <TextInput
        label="Dose"
        value={dataItem.dose}
        name="dose"
        onChange={v => updateDataItem(v, 'dose')} />
      <TextInput
        label="Count"
        value={dataItem.count}
        name="count"
        onChange={v => updateDataItem(v, 'count')} />
      <TextInput
        label="Group"
        value={dataItem.group}
        name="group"
        onChange={v => updateDataItem(v, 'group')} />
      <TextInput
        label="Exp Date"
        value={dataItem.expDate}
        name="expDate"
        onChange={v => updateDataItem(v, 'expDate')} />
      <button type='submit'>Save</button>
    </form>
  );
}

export default React.memo(MedicineForm);