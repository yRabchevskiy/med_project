/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { IUser } from "../../Models/user";
import ModalWindow from "../../Components/ModalWindow";
import { useGetCollection } from "../../Contexts/Api/api";
interface Props { }
const HomePage: React.FC<Props> = (props: Props) => {
  const [users, setUsers] = React.useState<IUser[] | null>(null);
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
  return (
    <>
      <div>
        <div>
          <button onClick={onCreateUser}>Add</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Name</th>
              <th>Birthday</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Rang</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length && users.map((user, i) => (
              <tr key={'user' + user.id}>
                <td>{i + 1}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.birthday}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.rang}</td>
                <td>{user.unit.unit_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <div>Loading</div>}
      </div>
      {openUserModal && <ModalWindow title="Create user" onClose={onCloseUserModal}></ModalWindow>}
    </>
  );
};

export default React.memo(HomePage);
