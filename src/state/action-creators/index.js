import axios from "axios";

export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};
export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
export const payLoan = (loan) => {
  return (dispatch) => {
    dispatch({
      type: "pay",
      payload: loan,
    });
  };
};
export const getLoan = (loan) => {
  return (dispatch) => {
    dispatch({
      type: "get",
      payload: loan,
    });
  };
};
export const addBug = (description) => {
  return (dispatch) => {
    dispatch({
      type: "bugAdded",
      payload: {
        description,
      },
    });
  };
};
export const removeBug = (id) => {
  return (dispatch) => {
    dispatch({
      type: "bugRemoved",
      payload: {
        id,
      },
    });
  };
};
export const resolveBug = (id) => {
  return (dispatch) => {
    dispatch({
      type: "bugResolved",
      payload: {
        id,
      },
    });
  };
};

//GET API DATA AND STORE IT IN STATE STORE
const fetchDataStart = () => ({
  type: "fetchDataStart",
});
const fetchDataSuccess = (posts) => ({
  type: "fetchDataSuccess",
  payload: posts,
});
const fetchDataFail = (error) => ({
  type: "fetchDataFail",
  payload: error,
});
export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataStart());
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
    }).catch((error) => {
        dispatch(fetchDataFail(error.message));
    })
  };
};
