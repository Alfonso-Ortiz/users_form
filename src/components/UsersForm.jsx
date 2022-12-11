import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/usersForm.css";

const UsersForm = ({
  createNewUser,
  updateInfo,
  updateUser,
  setUpdateInfo,
  setCloseForm,
  alert,
}) => {
  const { register, reset, handleSubmit } = useForm();

  const resetobj = {
    email: "",
    first_name: "",
    last_name: "",
    birthday: "",
    password: "",
  };

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      // Update
      updateUser(updateInfo.id, data);
      setUpdateInfo();
    } else {
      // Create
      createNewUser(data);
    }

    setCloseForm(true);

    reset(resetobj);
  };

  useEffect(() => {
    updateUser ? reset(updateUser) : reset(resetobj);
  }, [updateUser]);

  return (
    <form className="form" onSubmit={(alert, handleSubmit(submit))}>
      <div onClick={() => setCloseForm(true)} className="form__exit">
        X
      </div>
      <h2 className="form__title">
        {updateInfo ? "Update User" : "Create User"}
      </h2>
      <div className="form__div">
        <label className="form__label" htmlFor="email">
          Email:
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          placeholder="example@gmail.com
"
          {...register("email")}
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="password">
          Password:
        </label>
        <input
          className="form__input"
          type="password"
          id="password"
          {...register("password")}
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="first_name">
          First name:
        </label>
        <input
          className="form__input"
          type="text"
          id="first_name"
          placeholder="Pepito"
          {...register("first_name")}
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="last_name">
          Last name:
        </label>
        <input
          className="form__input"
          type="text"
          id="last_name"
          placeholder="Peréz"
          {...register("last_name")}
        />
      </div>
      <div className="form__div">
        <label className="form__label" htmlFor="birthday">
          Birthday:
        </label>
        <input
          className="form__input"
          type="date"
          id="birthday"
          {...register("birthday")}
        />
      </div>
      <button onClick={alert} className="form__btn">
        Submit
      </button>
    </form>
  );
};

export default UsersForm;
