/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { IUser } from "../../Models/user";
import ModalWindow from "../../Components/ModalWindow";
import { useGetCollection } from "../../Contexts/Api/api";
import { DataTable } from 'primereact/datatable';
import { Column, ColumnBodyOptions } from 'primereact/column';
import { format, parseISO } from "date-fns";

interface Props { }
const HomePage: React.FC<Props> = (props: Props) => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [openUserModal, setUserModalState] = React.useState<boolean>(false);
  const { response, loading, onGetCollection } = useGetCollection<IUser[]>();

  React.useEffect(() => {
    getUsers();
  }, []);

  React.useEffect(() => {
    if (response) {
      setUsers(response);
    }
  }, [response]);

  const getUsers = () => {
    onGetCollection('users');
  };

  const onCreateUser = () => {
    setUserModalState(true);
  };

  const onCloseUserModal = () => { setUserModalState(false) };

  const nameRow = (data: IUser, options: ColumnBodyOptions) => {
    return (
      <>{data.first_name} {data.last_name}</>
    );
  };

  const birthdayRow = (data: IUser, options: ColumnBodyOptions) => {
    console.log(data.birthday);
    return (
      <>{format(parseISO(data.birthday), 'dd.MM.yyyy')}</>
      // <></>
      );
  }
  return (
    <>
      <div>
        <div>
          <button onClick={onCreateUser}>Add</button>
        </div>
        <DataTable value={users} loading={loading}>
          <Column header="№" body={(data, options) => options.rowIndex + 1}></Column>
          <Column field="first_name" header="Name" body={nameRow}></Column>
          <Column field="birthday" header="Birthday" body={birthdayRow}></Column>
          <Column field="email" header="Email"></Column>
          <Column field="phone" header="Phone"></Column>
          <Column field="rang" header="Rang"></Column>
          <Column field="unit.unit_name" header="Unit"></Column>
        </DataTable>
      </div>
      {openUserModal && <ModalWindow title="Create user" onClose={onCloseUserModal}></ModalWindow>}
    </>
  );
};

export default React.memo(HomePage);
