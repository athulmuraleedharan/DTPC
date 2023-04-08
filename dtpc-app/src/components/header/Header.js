import React from "react";
import  search from "./../../images/icons/search.png";
import logo from "./../../images/logo.png";

function Header() {
  return (
    <div>
      <header
        id="header"
        class="position-fixed w-100  main-header fixed-top fixed-header bg-white"
      >
        <div class="container-fluid px-2 px-md-5">
          <nav class="navbar navbar-expand-lg">
          
            <div class="container-fluid d-flex justify-content-around">
              <a
                class="navbar-brand"
                href="https://www.dtpcpalakkad.com/beta/"
                title="DTPC Palakkad"
              >
                <img
                  src={logo}
                  alt="DTPC Palakkad"
                  title="DTPC Palakkad"
                  class="w-100"
                  width="70"
                  height="70"
                />
              </a>
              <h1 class="d-none">DTPC Palakkad</h1>

              <div class="stellarnav right desktop">
                <a
                  href="https://www.dtpcpalakkad.com/beta/#"
                  class="menu-toggle"
                >
                  <span class="bars">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>{" "}
                </a>

                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <a
                    href="https://www.dtpcpalakkad.com/beta/#"
                    class="close-menu full"
                  >
                    <span class="icon-close"></span>
                  </a>
                  <li class="nav-item px-3">
                    <a
                      class="nav-link active"
                      href="https://www.dtpcpalakkad.com/beta/"
                      title="Home"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item px-3">
                    <a
                      class="nav-link "
                      href="https://www.dtpcpalakkad.com/beta/about"
                      title="About"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item px-3">
                    <a
                      class="nav-link "
                      href="https://www.dtpcpalakkad.com/beta/destination"
                      title="Destinations"
                    >
                      Destinations
                    </a>
                  </li>
                  {/* <!-- <li class="nav-item px-3">
                <a class="nav-link " href="https://www.dtpcpalakkad.com/beta/adventure" title="Experiences">Adventure</a>
              </li> --> */}

                  <li class="nav-item px-3">
                    <a
                      class="nav-link "
                      href="https://www.dtpcpalakkad.com/beta/experiences"
                      title="Experiences"
                    >
                      Experiences
                    </a>
                  </li>
                  {/* <!-- <li class="nav-item px-3">
                <a class="nav-link "href="https://www.dtpcpalakkad.com/beta/live-culture" title="Experiences">Live culture</a>
              </li> --> */}
                  <li class="nav-item px-3 has-sub">
                    <a
                      class="nav-link "
                      href="https://www.dtpcpalakkad.com/beta/#"
                    >
                      Gallery
                    </a>
                    <ul style={{display: "none"}}>
                      <li>
                        <a
                          class="nav-link "
                          href="https://www.dtpcpalakkad.com/beta/gallery"
                          title="Image Gallery"
                        >
                          Image Gallery
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          class="nav-link "
                          href="https://www.dtpcpalakkad.com/beta/video-gallery"
                          title="Video Gallery"
                        >
                          Video Gallery
                        </a>
                      </li>
                    </ul>
                    <a
                      class="dd-toggle"
                      href="https://www.dtpcpalakkad.com/beta/#"
                    >
                      <span class="icon-plus"></span>
                    </a>
                  </li>
                  {/* <!-- <li class="nav-item px-3">
                <a class="nav-link " href="https://www.dtpcpalakkad.com/beta/gallery" title="Image Gallery">Image Gallery</a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link " href="https://www.dtpcpalakkad.com/beta/video-gallery" title="Video Gallery">Video Gallery</a>
              </li> --> */}
                  <li class="nav-item px-3">
                    <a
                      class="nav-link "
                      href="https://www.dtpcpalakkad.com/beta/contact"
                      title="Contact"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <form
                  action="https://www.dtpcpalakkad.com/beta/search/"
                  name="frm_srch"
                  id="frm_srch"
                  autocomplete="off"
                  enctype="multipart/form-data"
                  method="post"
                  accept-charset="utf-8"
                >
                  <input
                    type="hidden"
                    name="csrf_test_name"
                    value="3d3eeef631bfbce53581136e1772f833"
                  />
                </form>
              </div>

              <div class="text-end">
                <a
                  href="https://www.dtpcpalakkad.com/beta/#search"
                  class="search-div "
                  title="search"
                >
                  <img
                    src={search}
                    alt="Search"
                    title="search"
                    width="20"
                    height="20"
                  />
                </a>
              </div>
              <div class="social-share d-block d-md-none">
                <div class="btn-share " id="btnshare">
                  <svg width="22" height="31.536" viewBox="0 0 29.279 31.536">
                    <path
                      id="share"
                      d="M25.875,22.5A5.625,5.625,0,0,0,21.5,24.626l-8.224-5.141a5.018,5.018,0,0,0,0-2.97L21.5,11.374a5.625,5.625,0,1,0-1.249-3.5,5.389,5.389,0,0,0,.225,1.485L12.251,14.5a5.625,5.625,0,1,0,0,7l8.224,5.141a5.389,5.389,0,0,0-.225,1.486A5.625,5.625,0,1,0,25.875,22.5Zm0-18A3.375,3.375,0,1,1,22.5,7.875,3.375,3.375,0,0,1,25.875,4.5Zm-18,16.875A3.375,3.375,0,1,1,11.25,18a3.375,3.375,0,0,1-3.375,3.375Zm18,10.125a3.375,3.375,0,1,1,3.375-3.375A3.375,3.375,0,0,1,25.875,31.5Z"
                      transform="translate(-2.221 -2.214)"
                      fill="#161616"
                    ></path>
                  </svg>
                </div>
                {/* <!-- </label> --> */}
              </div>

              <div class="social-share d-none d-md-block">
                <label class="toggle" for="toggle">
                  {/* <input type="checkbox" id="toggle" /> */}
                  <div class="btn-share">
                    <svg width="22" height="31.536" viewBox="0 0 29.279 31.536">
                      <path
                        id="share"
                        d="M25.875,22.5A5.625,5.625,0,0,0,21.5,24.626l-8.224-5.141a5.018,5.018,0,0,0,0-2.97L21.5,11.374a5.625,5.625,0,1,0-1.249-3.5,5.389,5.389,0,0,0,.225,1.485L12.251,14.5a5.625,5.625,0,1,0,0,7l8.224,5.141a5.389,5.389,0,0,0-.225,1.486A5.625,5.625,0,1,0,25.875,22.5Zm0-18A3.375,3.375,0,1,1,22.5,7.875,3.375,3.375,0,0,1,25.875,4.5Zm-18,16.875A3.375,3.375,0,1,1,11.25,18a3.375,3.375,0,0,1-3.375,3.375Zm18,10.125a3.375,3.375,0,1,1,3.375-3.375A3.375,3.375,0,0,1,25.875,31.5Z"
                        transform="translate(-2.221 -2.214)"
                        fill="#161616"
                      ></path>
                    </svg>
                    {/* <div class="social ">
                      <a
                        href="javascript:void(0)"
                        title="whatsapp"
                        onclick="whatsapp()"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24.56"
                          height="34.83"
                          viewBox="0 0 34.56 34.83"
                        >
                          <path
                            id="whatsapp"
                            d="M22.162,19.755a10.272,10.272,0,0,1,2.194.99,9.748,9.748,0,0,1,2.014,1.192.955.955,0,0,1,.045.337,4.739,4.739,0,0,1-.383,1.71,3.02,3.02,0,0,1-1.6,1.474,5.321,5.321,0,0,1-2.3.6,12.156,12.156,0,0,1-4.275-1.4A12.828,12.828,0,0,1,14.04,22a29.673,29.673,0,0,1-3.33-4.163,7.868,7.868,0,0,1-1.6-4.365V13.3a4.976,4.976,0,0,1,1.665-3.555,1.7,1.7,0,0,1,1.17-.495,3.555,3.555,0,0,1,.4.034,3.617,3.617,0,0,0,.427.034.925.925,0,0,1,.6.146,1.623,1.623,0,0,1,.349.619q.18.45.742,1.98a13.37,13.37,0,0,1,.563,1.688,2.286,2.286,0,0,1-.776,1.294q-.776.822-.777,1.045a.641.641,0,0,0,.112.337,10.144,10.144,0,0,0,2.3,3.083,14.359,14.359,0,0,0,3.4,2.272,1,1,0,0,0,.5.158q.337,0,1.215-1.091t1.17-1.091ZM17.6,31.68a13.754,13.754,0,0,0,5.479-1.125A13.915,13.915,0,0,0,30.6,23.029a13.9,13.9,0,0,0,0-10.958,13.915,13.915,0,0,0-7.526-7.526,13.9,13.9,0,0,0-10.958,0A13.915,13.915,0,0,0,4.59,12.071,13.991,13.991,0,0,0,6.165,25.83L4.388,31.072,9.833,29.34A13.835,13.835,0,0,0,17.6,31.68ZM17.6.585a16.485,16.485,0,0,1,6.581,1.35,16.77,16.77,0,0,1,9.034,9.034,16.716,16.716,0,0,1,0,13.162,16.77,16.77,0,0,1-9.034,9.034,16.476,16.476,0,0,1-6.581,1.35A16.706,16.706,0,0,1,9.382,32.4L0,35.415,3.06,26.3A16.867,16.867,0,0,1,1.98,10.969a16.77,16.77,0,0,1,9.034-9.034A16.458,16.458,0,0,1,17.595.585Z"
                            transform="translate(0 -0.585)"
                            fill="#ed7d69"
                          ></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        title="facebook"
                        href="http://www.facebook.com/sharer/sharer.php?s=100&amp;p[url]=https%3A%2F%2Fwww.dtpcpalakkad.com%2Fbeta%2Findex.php&amp;p[images][0]=https://www.dtpcpalakkad.com/beta/images/share-img.jpg&amp;p[title]=&amp;p[summary]="
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="28"
                          viewBox="0 0 53.063 105"
                        >
                          <path
                            id="social-facebook-outline"
                            d="M45.914,39.167V28.848c0-4.657,1.028-7.014,8.262-7.014h9.071V4.5H48.109C29.559,4.5,23.438,13,23.438,27.6V39.167H11.251V56.5H23.438v52H45.918v-52H61.194l2.057-17.333H45.918Zm11.428,13H41.58v52H27.768v-52H15.58V43.5H27.768V27.6c0-6.637,1.464-11.159,4.2-14.028C35,10.324,40.39,8.837,48.109,8.837h10.8V17.5H54.176c-3.251,0-7.449.3-10.049,3.17-2.2,2.438-2.546,5.443-2.546,8.151V43.5h16.79l-1.028,8.667Z"
                            transform="translate(-10.751 -4)"
                            stroke="#ed7d69"
                            stroke-width="2"
                            fill="#ed7d69"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.dtpcpalakkad.com%2Fbeta%2Findex.php&amp;text="
                        title="twitter"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24.824"
                          height="28.094"
                          viewBox="0 0 34.824 28.094"
                        >
                          <path
                            id="social-twitter-outline"
                            d="M34.594,7.7a13.779,13.779,0,0,1-3.909,1.076A6.832,6.832,0,0,0,33.68,5.006a13.528,13.528,0,0,1-4.324,1.652,6.8,6.8,0,0,0-11.777,4.654,6.641,6.641,0,0,0,.176,1.554A19.3,19.3,0,0,1,3.714,5.743a6.827,6.827,0,0,0,2.109,9.1,6.617,6.617,0,0,1-3.081-.849v.084A6.813,6.813,0,0,0,8.2,20.756a6.841,6.841,0,0,1-1.793.239,6.38,6.38,0,0,1-1.28-.127A6.818,6.818,0,0,0,11.495,25.6a13.648,13.648,0,0,1-8.459,2.918,13.857,13.857,0,0,1-1.624-.1A19.035,19.035,0,0,0,11.834,31.5c12.529,0,19.385-10.385,19.385-19.392,0-.3-.007-.591-.021-.879A13.972,13.972,0,0,0,34.594,7.7ZM30.53,10.315l-.492.359.028.6c.014.267.021.548.021.83a18.607,18.607,0,0,1-1.195,6.434,18.9,18.9,0,0,1-3.516,5.892,17.167,17.167,0,0,1-5.7,4.275,18.458,18.458,0,0,1-7.84,1.659,18.1,18.1,0,0,1-5.941-1A14.683,14.683,0,0,0,12.165,26.5l2.482-1.948-3.157-.056a5.672,5.672,0,0,1-4.521-2.384,7.854,7.854,0,0,0,1.512-.26l4.268-1.42-4.338-.766A5.688,5.688,0,0,1,4.1,15.739a8.6,8.6,0,0,0,1.68.232s2.236.1,3.923-.007c-.914-.436-3.262-2.053-3.262-2.053A5.694,5.694,0,0,1,3.911,9.172a6.051,6.051,0,0,1,.155-1.336,20.333,20.333,0,0,0,5.28,3.9,20.283,20.283,0,0,0,8.339,2.243l1.491.077L18.839,12.6a5.686,5.686,0,0,1,9.688-5.175l.429.457.612-.12c.316-.063.626-.134.935-.218a7.924,7.924,0,0,1-.773.759c-.316.281-1.252,1.16-1.252,1.16a10.33,10.33,0,0,0,1.484.352,5.723,5.723,0,0,0,1.329-.056c-.2.162-.548.408-.759.555Z"
                            transform="translate(-1.139 -3.906)"
                            stroke="#ed7d69"
                            stroke-width="1"
                            fill="#ed7d69"
                          ></path>
                        </svg>
                      </a>
                    </div> */}
                  </div>
                </label>
              </div>
              <p class="result "></p>

              {/* <!-- trigger search with a link to an anchor --> */}

              {/* <!-- <a href='#search'>
<span>&#9906;</span>

    </a> --> */}
            </div>
          </nav>
        </div>
        <div id="search" class="fade position-absolute">
          <a
            href="https://www.dtpcpalakkad.com/beta/#"
            class="close-btn"
            id="close-search"
            title="close"
          >
            <img
              src="./DTPC alakkad _ Palakkad Tourist Places_files/close-black.png"
              alt="close"
              title="close"
              width="20px"
            />
          </a>
          <input
            placeholder="Search here"
            id="searchbox"
            name="searchbox"
            type="search"
          />
          <button
            type="button"
            onclick="getSearchResult()"
            class="btn btn-default"
            style={{marginLeft: "38px"}}
          >
            <img
              src="./DTPC Palakkad _ Palakkad Tourist Places_files/search.png"
              alt="search"
              title="search"
              width="20px"
            />
          </button>
        </div>
        {/* <!-- <input type="text" id="hit" name="hit" value=""> --> */}
      </header>
    </div>
  );
}
export default Header;
