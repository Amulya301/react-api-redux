import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponse } from "../../store/todos-slice";
import "./FetchData.css";
import Pagination from "../Pagination/Pagination";

const FetchData = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const error = useSelector((state) => state.todo.error);

  useEffect(() => {
    dispatch(fetchResponse());
  }, [dispatch]);

  const [current, setCurrent] = useState(1);
  const todosPerPage = 20;
  const indexOfLastTodo = current * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const displayTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const currentPageHandler = (pageno) => {
    setCurrent(pageno);
  };

  if (error) {
    return <span data-testid="error">Unable to fetch data</span>;
  }
  return (
    <div>
      <h1>List of Todos</h1>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
          {displayTodos.map((res, key = Math.random()) => (
            <tr key={key} data-testid="table-items">
              <td>{res.id}</td>
              <td>{res.title}</td>
              <td>
                {res.completed === true ? (
                  <span style={{ color: "green" }}>true</span>
                ) : (
                  <span style={{ color: "red" }}>false</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        data-testid="pagination"
        todosPerPage={todosPerPage}
        totalTodosQuantity={todos.length}
        onChangePage={currentPageHandler}
      />
    </div>
  );
};

export default FetchData;
