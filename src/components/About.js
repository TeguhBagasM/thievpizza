import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO MAESTRO PIZZINI</h1>
            <p>
              At Maestro Pizzini, we are passionate about delivering the best pizza experience. Our
              pizzas are made with the freshest ingredients and baked to perfection. Whether you are
              looking for a classic Margherita or a gourmet creation, we have something for everyone.
            </p>
            <div className="about__btn">
              <a href="#more" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
