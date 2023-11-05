import React, { useContext } from "react";
import { ListGroup, ListGroupItem, Button} from "reactstrap";
import { FaTimes } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.types";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 mb-4 items" style={{width: "600px", marginLeft: "480px"}}>
      {todos.map(todo => (
        
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <Button className="float-end">
          <span
            className="float-end"
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id
              });
            }}
          >Remove
            <FaTimes />
          </span>
          </Button>
        </ListGroupItem>
      )
      )}
    </ListGroup>
    
  );
};

export default Todos;