import React, { useEffect, useState } from "react";
import { ref, onValue, push, update, remove } from "firebase/database";
import { Layout } from "antd";

import { TodoElement } from "./TodoElement";
import { NewTodoInput } from "./NewTodoInput";

import { db } from "../firebase";

const { Header, Content } = Layout;

export const FirebaseTodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const todosDbRef = ref(db, "todos");

    return onValue(todosDbRef, (snapshot) => {
      const loadedTodos = snapshot.val() || {};
      setTodos(loadedTodos);
      setLoading(false);
    });
  }, []);

  const onAddTodoItem = async (value) => {
    const todosDbRef = ref(db, "todos");

    await push(todosDbRef, {
      title: value,
      completed: false,
    });
  };

  const onCheckboxClick = async (id) => {
    const findedItem = todos[id];
    console.log(findedItem);
    const todosDbRef = ref(db, `todos/${id}`);
    update(todosDbRef, { completed: !findedItem.completed });
  };

  const onDeleteClick = async (id) => {
    const todosDbRef = ref(db, `todos/${id}`);
    remove(todosDbRef);
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <h3>Todo лист (JSON Server)</h3>
      </Header>
      <Content style={{ padding: "50px 50px" }}>
        <NewTodoInput onAddTodoItem={onAddTodoItem} loading={loading} />
        {Object.entries(todos).map(([id, todo]) => {
          return (
            <TodoElement
              key={id}
              item={{ ...todo, id }}
              onCheckboxClick={onCheckboxClick}
              onDeleteClick={onDeleteClick}
              loading={loading}
            />
          );
        })}
      </Content>
    </Layout>
  );
};
