import React from "react";
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from "react-icons/fa"

const MyCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
            <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
            <h1>
                <span className="pr-2">{details.name?.title}</span>
                <span>{details.name?.first}</span>
                <span>{details.name?.last}</span>
            </h1>
        </CardTitle>
        <CardText>
            <p><FaMapMarkedAlt />{details.location?.city}</p>
            <p><FaPhone />{details.phone}</p>
            <p><FaEnvelope />{details.email}</p>
            <p>Age: {details.dob?.age}</p>
            <p>STATE : {details.location?.state}</p>
        </CardText>
        </CardBody>        
        </Card>
    );
};

export default MyCard;