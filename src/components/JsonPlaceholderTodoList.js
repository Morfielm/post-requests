import React, { useEffect, useState } from "react";
import { TodoElement } from "./TodoElement";

import { Layout } from "antd";

const { Header, Content } = Layout;

export const JsonPlaceholderTodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((loadedData) => loadedData.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
      });
  }, []);

  return (
    <Layout className="layout">
      <Header className="header">
        <h3>Todo лист (JSON PLACEHOLDER)</h3>
      </Header>
      <Content style={{ padding: "50px 50px" }}>
        {todos.map((todo) => {
          return (
            <TodoElement
              key={todo.id}
              item={todo}
            />
          );
        })}
      </Content>
    </Layout>
  );
};
