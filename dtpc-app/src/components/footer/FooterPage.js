import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <div class="container ">
        <div class="row p-4">
          <div class="col-lg-3 col-md-3 col-6 p-2 ">
            <ul class="list-style-none list-group ">
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/destination"
                  class="text-dark text-decoration-none  "
                  title="Destinations"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span>{" "}
                  Destinations{" "}
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/experiences"
                  class="text-dark text-decoration-none"
                  title="Experiences"
                >
                  <span class="small text-theme pe-2  text-danger">❯</span>{" "}
                  Experiences
                </a>
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/upcoming-events"
                  class="text-dark text-decoration-none"
                  title="Upcoming Events"
                >
                  <span class="small text-theme pe-2 color-warning  text-danger">
                    ❯
                  </span>{" "}
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/ebrochure"
                  class="text-dark text-decoration-none"
                  title="Ebrochure"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span>{" "}
                  Ebrochure
                </a>
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/travel-info"
                  class="text-dark text-decoration-none"
                  title="Travel Info"
                >
                  <span class="small text-theme pe-2">❯</span> Travel Info
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-3 col-6 p-2">
            <ul class="list-style-none list-group">
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/media"
                  class="text-dark text-decoration-none"
                  title="Media"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span> Media
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/tenders"
                  class="text-dark text-decoration-none"
                  title="Tenders"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span>{" "}
                  Tenders
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/announcements"
                  class="text-dark text-decoration-none"
                  title="News &amp; Updates"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span> News
                  &amp; Updates
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/feedback"
                  class="text-dark text-decoration-none"
                  title="Feedback Form"
                >
                  <span class="small text-theme pe-2 text-danger" text-danger>
                    ❯
                  </span>{" "}
                  Feedback Form
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/contact"
                  class="text-dark text-decoration-none"
                  title="Contact"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span>{" "}
                  Contact
                </a>{" "}
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-3 col-12 mb-3  p-2">
            <ul class="list-style-none list-group ">
              <li>
                {" "}
                <a
                  href="https://www.keralatourism.org/where-to-stay"
                  target="_blank"
                  rel="noreferrer"
                  class="text-dark text-decoration-none"
                  title="Accredited Service Providers"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span>{" "}
                  Accredited Service Providers
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/tourist-information-offices"
                  class="text-dark text-decoration-none"
                  title="Tourist Information Offices"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span>{" "}
                  Tourist Information Offices
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/emergency-contact-numbers"
                  class="text-dark text-decoration-none"
                  title="Telephone/Emergency Numbers"
                >
                  <span class="small text-theme pe-2 text-danger">❯</span>{" "}
                  Telephone/Emergency Numbers
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.dtpcpalakkad.com/beta/map"
                  class="text-dark text-decoration-none"
                  title="Map View"
                >
                  <span class="small text-theme pe-2  text-danger">❯</span>Map
                  View
                </a>{" "}
              </li>
              {/* <!-- <li><a href="https://www.dtpcpalakkad.com/beta/passport-offices" class="text-dark text-decoation-none" title="Passport offices">Passport offices</a> </li>
            <li><a href="https://www.dtpcpalakkad.com/beta/major-bus-stations" class="text-dark text-decoation-none" title="Major Bus Stations">Major Bus Stations</a> </li> --> */}
            </ul>
          </div>

          <div class="col-lg-3 col-md-3 col-12">
            <h6 class="mb-3">Follow Us</h6>
            <a
              href="https://www.facebook.com/dtpcpalakkad"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                class="me-3"
                width="10.393"
                height="18.995"
                viewBox="0 0 10.393 18.995"
              >
                <g id="facebook" transform="translate(-10.203 -3.75)">
                  <path
                    id="Path_185"
                    data-name="Path 185"
                    d="M12.6,22.745h4V14.737h3.6l.4-3.979h-4V8.749a1,1,0,0,1,1-1h3v-4h-3a5,5,0,0,0-5,5v2.009h-2l-.4,3.979h2.4v8.008Z"
                  ></path>
                </g>
              </svg>
            </a>
            {/* <!-- <a href="https://twitter.com/dtpc_palakkad" target="_blank">
            <svg class="me-3" width="22.633" height="18.386" viewBox="0 0 22.633 18.386" >
              <path id="twitter-bird"
                d="M22.633,2.178a9.4,9.4,0,0,1-2.32,2.4q.014.266.014.6a13.338,13.338,0,0,1-2.2,7.3A14.107,14.107,0,0,1,15.467,15.5a11.849,11.849,0,0,1-3.708,2.1,13.544,13.544,0,0,1-4.642.783A12.924,12.924,0,0,1,0,16.3a10.04,10.04,0,0,0,1.108.064,9.1,9.1,0,0,0,5.768-1.989,4.505,4.505,0,0,1-2.7-.927,4.564,4.564,0,0,1-1.639-2.3,4.642,4.642,0,0,0,2.1-.078,4.526,4.526,0,0,1-2.666-1.6A4.493,4.493,0,0,1,.912,6.521V6.463a4.582,4.582,0,0,0,2.1.581A4.613,4.613,0,0,1,1.507,5.39,4.531,4.531,0,0,1,.949,3.182,4.562,4.562,0,0,1,1.577.849,13.221,13.221,0,0,0,5.811,4.276,12.9,12.9,0,0,0,11.146,5.7a4.54,4.54,0,0,1-.122-1.057,4.473,4.473,0,0,1,1.36-3.282,4.645,4.645,0,0,1,6.672.1A9.248,9.248,0,0,0,22.005.338a4.489,4.489,0,0,1-2.039,2.569A9.279,9.279,0,0,0,22.633,2.178Z"
                />
            </svg>
          </a>        --> */}
            <a
              href="https://instagram.com/dtpcpalakkad?igshid=NDk5N2NlZjQ="
              target="_blank"
              title="Instagram"
              rel="noreferrer"
            >
              <svg
                class="me-3"
                width="20"
                height="27.057"
                viewBox="0 0 27.011 27.057"
              >
                <g id="bxl-instagram-alt" transform="translate(-4.495 -4.47)">
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M31.42,12.457a9.8,9.8,0,0,0-.628-3.324,6.915,6.915,0,0,0-3.95-3.95,9.909,9.909,0,0,0-3.279-.63C22.12,4.488,21.663,4.47,18,4.47s-4.133,0-5.565.083a9.909,9.909,0,0,0-3.277.63,6.911,6.911,0,0,0-3.95,3.95,9.831,9.831,0,0,0-.628,3.277c-.065,1.444-.084,1.9-.084,5.565s0,4.131.084,5.565a9.887,9.887,0,0,0,.628,3.28,6.915,6.915,0,0,0,3.951,3.948,9.876,9.876,0,0,0,3.277.675c1.444.065,1.9.084,5.565.084s4.133,0,5.565-.084a9.885,9.885,0,0,0,3.279-.628,6.923,6.923,0,0,0,3.95-3.95,9.852,9.852,0,0,0,.628-3.28c.065-1.443.084-1.9.084-5.565s0-4.128-.087-5.564ZM17.991,24.9a6.934,6.934,0,1,1,6.934-6.934A6.932,6.932,0,0,1,17.991,24.9ZM25.2,12.394a1.617,1.617,0,1,1,1.615-1.617A1.615,1.615,0,0,1,25.2,12.394Z"
                  ></path>
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M22.5,17.968a4.5,4.5,0,1,1-4.5-4.505,4.5,4.5,0,0,1,4.5,4.505Z"
                  ></path>
                </g>
              </svg>
            </a>
            {/* <!-- <a href="https://www.youtube.com/channel/UCs9TjHV58uG4nqcBHftotBQ" target="_blank">
            <svg class="me-3" width="22.819" height="16.048" viewBox="0 0 22.819 16.048"  >
              <path id="youtube"
                d="M12.052,18.484V12.073l6.164,3.217-6.164,3.194Zm13.537-7.521A4.925,4.925,0,0,0,24.682,8.7,3.265,3.265,0,0,0,22.4,7.731C19.2,7.5,14.413,7.5,14.413,7.5H14.4s-4.789,0-7.982.23A3.265,3.265,0,0,0,4.136,8.7a4.934,4.934,0,0,0-.907,2.266A34.518,34.518,0,0,0,3,14.656v1.731a34.537,34.537,0,0,0,.228,3.693,4.927,4.927,0,0,0,.907,2.265,3.861,3.861,0,0,0,2.516.975c1.825.174,7.758.228,7.758.228s4.8-.007,7.988-.237a3.264,3.264,0,0,0,2.286-.966,4.933,4.933,0,0,0,.907-2.265,34.537,34.537,0,0,0,.228-3.693V14.656a34.5,34.5,0,0,0-.228-3.693Z"
                transform="translate(-3 -7.5)"  fill-rule="evenodd" />
            </svg>
          </a> --> */}
          </div>
        </div>
      </div>

      <div className="footer-copyright-container">
        <div class="container ">
          <p class="text-muted mb-1 small">
            All rights reserved © District Tourism Promotion Council, Palakkad.
          </p>
          <p class="text-muted  small mb-4 mb-md-0">
            Developed &amp; Maintained by{" "}
            <span title="Invis Private Limited, Kowdiar, Thiruvananthapuram.">
              Invis
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
