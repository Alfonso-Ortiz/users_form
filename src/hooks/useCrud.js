import axios from "axios";
import { useState } from "react";

const useCrud = () => {
  const [users, setUsers] = useState();

  const getAllUsers = () => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  const createNewUser = (data) => {
    const URL = "https://users-crud.academlo.tech/users/";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .delete(URL)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
        sweetAlert;
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (id, data) => {
    const URL = `https://users-crud.academlo.tech/users/${id}/`;
    axios
      .patch(URL, data)
      .then((res) => {
        console.log(res.data);
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  return {
    users,
    createNewUser,
    getAllUsers,
    deleteUser,
    updateUser,
  };
};

export default useCrud;
