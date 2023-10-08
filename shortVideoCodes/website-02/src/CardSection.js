import React from "react";

import Card from "./Card";

const CardSection = ()  => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <Card title="HTML" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
          <Card title="CSS" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
          <Card title="JAVASCRIPT" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit." />
        </div>
      </div>
    </section>
);

export default CardSection;