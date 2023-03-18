import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assits/images/logos/D.png";
import video from "../assits/videos/backgroundvideo.mp4";
import videowebm from "../assits/videos/backgroundvideowebm.webm";
import dclub from "../assits/images/logos/dclub.png";
export const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <div class="title">
              <div class="title__title">
                <div class="title__title-logo">
                  <img class="title__title-logo--logo" src={logo} alt="" />
                  <div class="title__title-logo--title">
                    DSQ Social Programs
                  </div>
                </div>
                <div class="title__title-subtitle1">
                  Independence and capacity building programs for all age groups
                </div>
                <div class="title__title-subtitle2">
                  We offer an excellent range of social programs to develop
                  skills, build capacity and empower people living with Down
                  syndrome and other intellectual disabilities now and in the
                  future
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <video class="title__title-videodiv--video" autoPlay muted loop>
              <source src={video} type="video/mp4" />
              <source src={videowebm} type="video/webm" />
            </video>
          </Col>
        </Row>
        <div class="upcomingevents">
          <div class="upcomingevents__heading">Upcoming Events</div>
          <div class="upcomingevents__div">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner justify-content-evenly">
                <div class="carousel-item active" data-bs-interval="4000">
                  <div class="banner upcomingevents__contents banner-1">
                    <div class="banner__contents-box">
                      <div class="banner__contents banner__contents-club">
                        <div class="banner__contents-logo">
                          <img
                            class="banner__contents-logo--img banner__contents-logo--img-1"
                            src={dclub}
                            alt=""
                          />
                        </div>
                        <div class="banner__contents-location">Brisbane</div>
                        <div class="banner__contents-month">April</div>
                        <div class="banner__contents-day">23rd</div>
                        <div class="banner__contents-organiser">
                          Lucky B & Sons
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                  <div class="banner upcomingevents__contents banner-2">
                    <div class="banner__contents-box">
                      <div class="banner__contents banner__contents-teens">
                        <div class="banner__contents-logo">
                          {/* <img
                            class="banner__contents-logo--img"
                            src="images/logos/dteens.png"
                            alt=""
                          /> */}
                        </div>
                        <div class="banner__contents-location">
                          Sunshine Coast
                        </div>
                        <div class="banner__contents-month">April</div>
                        <div class="banner__contents-day">9th</div>
                        <div class="banner__contents-organiser">
                          Aussie World
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
