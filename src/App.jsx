import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import useCrud from "./hooks/useCrud";
import Swal from "sweetalert2";

function App() {
  const [updateInfo, setUpdateInfo] = useState();

  const [closeForm, setCloseForm] = useState(true);

  const { users, createNewUser, getAllUsers, updateUser, deleteUser } =
    useCrud();

  const alertUsers = () => {
    updateInfo
      ? Swal.fire("El usuario", "ha sido editado correctamente", "success")
      : Swal.fire("El usuario", "ha sido creado correctamente", "success");
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <div className="app__header">
        <h1>Users</h1>
        <button onClick={() => setCloseForm(false)} className="app__btn">
          Open Form
        </button>
      </div>
      <div className={`form-container ${closeForm && "close__form"} `}>
        <UsersForm
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUser={updateUser}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
          alert={alertUsers}
        />
      </div>

      <div className="user-container">
        {users?.map((user) => (
          <UsersList
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
            alert={alertUsers}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
