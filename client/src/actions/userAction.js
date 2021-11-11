import axios from "axios";
import { GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING } from "./types";

export const getUsers = () => (dispatch) => {
  dispatch(setUsersLoading());
  axios.get("/api/users").then((res) =>
    dispatch({
      type: GET_USERS,
      payload: res.data,
    })
  );
};

export const deleteUser = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) =>
    dispatch({
      type: DELETE_USER,
      payload: id,
    })
  );
};

export const adduser = (user) => (dispatch) => {
  axios.post("/api/users", user).then((res) =>
    dispatch({
      type: ADD_USER,
      payload: user,
    })
  );
};

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING,
  };
};
