
import { useListUser } from "../hooks/useListUser";
import UserRow from "../components/UserRow";






const HeadTable = () => {
  return (
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Ci</th>
        <th>Nombre completo</th>
        <th>Celular</th>
        <th>Genero</th>
        <th>Fecha Nacimiento</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
  );
};

const FootTable = () => {
  return (
    <tfoot>
      <tr>
        <th></th>
        <th>Ci</th>
        <th>Nombre completo</th>
        <th>Celular</th>
        <th>Genero</th>
        <th>Fecha Nacimiento</th>
        <th></th>
        <th></th>
      </tr>
    </tfoot>
  );
};

const GridUsers = ({ users }) => {
  return (
    <div className="w-full py-16 overflow-x-auto rounded-md">
      <table className="table w-full rounded-md">
        <HeadTable />
        <tbody>
          {users.map((user) => (
            <UserRow key={user._id} {...user} />
          ))}
        </tbody>
        <FootTable />
      </table>
    </div>
  );
};

function UserList() {

  const users = useListUser();
  return (
    <div className="min-h-screen px-10 py-10 text-center place-items-center">
      <h1 className="py-10">Usuarios Registrados</h1>
      {users.length > 0 ? (
        <GridUsers users={users}/>
      ) : (
        <h1>No hay usuarios registrados</h1>
      )}
    </div>
  );
}

export default UserList;
