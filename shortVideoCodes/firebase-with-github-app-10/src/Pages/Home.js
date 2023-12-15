import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  // InputGroupAddon
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Move it here

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (eror) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  //Put Anypage behind login

  if (!context.user?.uid) {
    navigate('/'); // Move the navigation here
    return null;  
  }

  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            {/* <InputGroupAddon > */}
              <Button addonType="append" onClick={fetchDetails} color="primary">
                Fetch User
              </Button>
            {/* </InputGroupAddon> */}
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
    </Container>
  );
};

export default Home;