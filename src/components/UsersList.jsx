import React from "react";
import "./styles/userList.css";

const UsersList = ({ user, deleteUser, setUpdateInfo, setCloseForm }) => {
  const handleUpdate = () => {
    setUpdateInfo(user);
    setCloseForm(false);
  };

  return (
    <article className="card">
      <h3 className="card__title">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="card__body">
        <li className="card__item">
          <span className="card__span">Email: </span> {user.email}
        </li>
        <li className="card__item">
          <span className="card__span">Birthday: </span>
          <div className="card__birthday">
            <i className="fa-regular fa-calendar-days"></i>
            {user.birthday}
          </div>
        </li>
      </ul>
      <footer className="card__footer">
        <button
          className="card__btn card__btn-trash"
          onClick={() => deleteUser(user.id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="card__btn card__btn-update" onClick={handleUpdate}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
      </footer>
    </article>
  );
};

export default UsersList;
