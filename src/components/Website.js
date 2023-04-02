import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../images/blog4.jpg";
import Slider2 from "../images/blog5.jpg";
import Slider3 from "../images/blog3.jpg";

function Website() {
  return (
    <div className="website">
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Short Quotes 1</h3>
            <p>
              One day the people that don’t even believe in you will tell
              everyone how they met you
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Slider2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Short Quotes 2</h3>
            <p>
              Life becomes easier when you learn to accept the apology you never
              got
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Short Quotes 3</h3>
            <p>
              The true meaning of life is to plant trees, under whose shade you
              do not expect to sit
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="website_wrap">
        <div className="text-center mt-5 mb-5 head">
          <h3>About Website</h3>
          <p>
            React makes it painless to create interactive <span>UIs</span>.
            Design simple views for each state in your <span>application</span>,
            and React will efficiently update and render just the right{" "}
            <span>components</span> when your data changes. Declarative views
            make your code more predictable and easier to
            <span>debug</span>.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={Slider1} className="card-img-top" alt="Img" />
              <div className="card-body">
                <h5 className="card-title">Design</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={Slider2} className="card-img-top" alt="Img" />
              <div className="card-body">
                <h5 className="card-title">Creative</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 4 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src={Slider3} className="card-img-top" alt="Img" />
              <div className="card-body">
                <h5 className="card-title">Development</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 7 mins ago</small>
                </p>
              </div>
            </div>
          </div>

          <div className="card mt-5 border-0">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={Slider2} alt="Img" className="img-fluid card-img" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text">
                    Build encapsulated components that manage their own state,
                    then compose them to make complex UIs. Since component logic
                    is written in JavaScript instead of templates, you can
                    easily pass rich data through your app and keep state out of
                    the DOM.
                  </p>
                  <p className="card-text">
                    React makes it painless to create interactive UIs. Design
                    simple views for each state in your application, and React
                    will efficiently update and render just the right components
                    when your data changes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;
