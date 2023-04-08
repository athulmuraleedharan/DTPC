import React from "react";
// import "../../style/all-minify.css"
import pariyanampetta from "../../images/slimg1.webp";
import pattambinercha from "../../images/slimg2.webp";
import kalapthi from "../../images/slimg3.jpg";
    
function Welcome() {
  return (
    <div>
      <section class="section-padding  py-4">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-6 col-sm-12 col-12  mb-0 mb-md-2 d-flex align-items-center ">
              <div class="desc mb-4">
                <h2 class="text-dark text-start headingCaption">
                  Welcome to
                  <br />
                  Palakkad
                </h2>
                <p class="mb-0 pe-md-5 pe-0  text-start mb-2">
                  Palakkad is a blessed land that boasts of lush green paddy
                  fields, mist-drenched mountain ranges, dense forest ranges
                  where rare flora and fauna flourish and even majestic
                  monuments{" "}
                </p>
              </div>
            </div>
            <div class="col-md-7 col-12 box mb-3 ">
              <figure class="active-animation">
                <div
                  class="hero slick-initialized slick-slider slick-dotted"
                  data-arrows="true"
                  data-autoplay="true"
                >
                  <div class="slick-list draggable">
                    <div class="slick-track" style={{opacity: "1", width:" 2238px"}}>
                      <div
                        class="slick-slide"
                        data-slick-index="0"
                        aria-hidden="true"
                        role="tabpanel"
                        id="slick-slide10"
                        aria-describedby="slick-slide-control10"
                        tabindex="-1"
                        style={{width: "726px",
                         position: "relative", left: "0px" ,top: "0px" ,zIndex: "998", opacity:" 0",
                         transition: "opacity 600ms linear 0s"}}
                      >
                        <section>
                          <div
                            class="hero-slide rounded"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <img
                              src={pariyanampetta}
                              class="w-100 rounded  "
                              alt="Pariyanampetta Pooram"
                              title="Pariyanampetta Pooram"
                            />
                            <div class="overlay-bg rounded">
                              <div class="header-content  slide-content text-white slide-content text-start col-lg-6  col-8 ">
                                <span class="mb-1 text-white theme-bg px-1 pointer">
                                  Latest Events
                                </span>
                                <h2 class="text-white  mb-1">
                                  Pariyanampetta Pooram
                                </h2>
                                <p class="mb-1 text-white fw-bold">
                                  19 Feb 2023
                                </p>
                                <a
                                  href="https://www.dtpcpalakkad.com/beta/culture/pariyanampetta-pooram"
                                  target="_blank"
                                  rel="noreferrer"
                                  class="text-white"
                                  tabindex="-1"
                                >
                                  Explore more <span class="small">❯</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div
                        class="slick-slide slick-current slick-active"
                        data-slick-index="1"
                        aria-hidden="false"
                        role="tabpanel"
                        id="slick-slide11"
                        aria-describedby="slick-slide-control11"
                        style={{width: "726px", position: "relative",
                         left:" -746px",top: "0px", zIndex: "999", opacity: "1"}}
                      >
                        <section>
                          <div
                            class="hero-slide rounded"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <img
                              src={pattambinercha}
                              class="w-100 rounded  "
                              alt="Pattambi Nercha"
                              title="Pattambi Nercha"
                            />
                            <div class="overlay-bg rounded">
                              <div class="header-content  slide-content text-white slide-content text-start col-lg-6  col-8 ">
                                <span class="mb-1 text-white theme-bg px-1 pointer">
                                  Latest Events
                                </span>
                                <h2 class="text-white  mb-1">
                                  Pattambi Nercha
                                </h2>
                                <p class="mb-1 text-white fw-bold">
                                  05 Mar 2023
                                </p>
                                <a
                                  href="https://www.dtpcpalakkad.com/beta/culture/pattambinercha"
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-white"
                                  tabindex="0"
                                >
                                  Explore more <span class="small">❯</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div
                        class="slick-slide"
                        data-slick-index="2"
                        aria-hidden="true"
                        role="tabpanel"
                        id="slick-slide12"
                        aria-describedby="slick-slide-control12"
                        tabindex="-1"
                        style={{width: "726px", position: "relative", left: "-1492px", top: "0px", zIndex: "998", opacity: "0", transition: "opacity 600ms linear 0s"}}
                      >
                        <section>
                          <div
                            class="hero-slide rounded"
                            style={{width: "100%", display: "inline-block"}}
                          >
                            <img
                              src={kalapthi}
                              class="w-100 rounded  "
                              alt="Kalpathi Ratholsavam"
                              title="Kalpathi Ratholsavam"
                            />
                            <div class="overlay-bg rounded">
                              <div class="header-content  slide-content text-white slide-content text-start col-lg-6  col-8 ">
                                <span class="mb-1 text-white theme-bg px-1 pointer">
                                  Latest Events
                                </span>
                                <h2 class="text-white  mb-1">
                                  Kalpathi Ratholsavam
                                </h2>
                                <p class="mb-1 text-white fw-bold">
                                  14 - 16 Nov 2023
                                </p>
                                <a
                                  href="https://www.dtpcpalakkad.com/beta/culture/kalpathi-ratholsavam"
                                  target="_blank"
                                  class="text-white"
                                  tabindex="-1"
                                  rel="noreferrer"
                                >
                                  Explore more <span class="small">❯</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                  <ul class="slick-dots"  role="tablist">
                    <li class="" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control10"
                        aria-controls="slick-slide10"
                        aria-label="1 of 3"
                        tabindex="-1"
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" class="slick-active">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control11"
                        aria-controls="slick-slide11"
                        aria-label="2 of 3"
                        tabindex="0"
                        aria-selected="true"
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" class="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control12"
                        aria-controls="slick-slide12"
                        aria-label="3 of 3"
                        tabindex="-1"
                      >
                        3
                      </button>
                    </li>
                  </ul>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Welcome;
