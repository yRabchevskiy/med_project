import React from "react";
import { IUser } from "../../Models/user";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
interface Props { }
const HomePage: React.FC<Props> = (props: Props) => {
  const [users, setUsers] = React.useState<IUser[] | null>(null);

  React.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const colRef = collection(db, "users");
    const docs = await getDocs(colRef);
    const _users = docs.docs.map(doc => doc.data());
    setUsers(_users as IUser[]);
  }
  return (
    <div>
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
            <tr>
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
    </div>
  );
};

export default React.memo(HomePage);
