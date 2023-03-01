import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";
import { useGetAllUserQuery, useGetUserByIdQuery } from "./slices/postApi";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value); //get the data from store
  const dispatch = useDispatch();

  const responseInfo = useGetAllUserQuery();
  const particular = useGetUserByIdQuery(2);
  console.log(particular.data);

  const result = particular.isLoading ? (
    <p>Loading...</p>
  ) : (
    <p>{particular.data.name}</p>
  );

  //   console.log(responseInfo.data);

  const userList = responseInfo.data ? (
    responseInfo.data.map((user) => {
      return (
        <React.Fragment key={user.id}>
          <p>{user.email}</p>
        </React.Fragment>
      );
    })
  ) : (
    <p>No Post yet</p>
  );

  return (
    <div>
      {counter}
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>

      <h4>Api Data</h4>
      {userList}

      {result}
    </div>
  );
};

export default Counter;

