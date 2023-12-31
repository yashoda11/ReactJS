import React, { useState, useContext } from "react";
import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  // InputGroupAddon
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";
import { FaLeaf } from "react-icons/fa";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo");
    }

    const todo = {
      todoString,
      id: v4()
    };
    dispatch({
      type: ADD_TODO,
      payload: todo
    });

    setTodoString("");
  };

  return (
    <Form onSubmit={handleSubmit} style={{marginLeft: "480px", width: "600px"}}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
            style={{backgroundColor:"#ecf0f1"}}
          />
          {/* <InputGroupAddon addonType="prepend"> */}
            <Button
              color="warning"
              //TODO: onclick
            >
              Add
            </Button>
          {/* </InputGroupAddon> */}
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;