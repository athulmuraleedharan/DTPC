import React from "react";
import "./spotlight.css";

function Spotlight() {
  return (
    <div>
      <section id="spotlight" class="position-relative   pt-0 section-padding">
        <video class="w-100 h-100 d-block d-sm-none d-md-none " autoPlay muted playsInline loop>
          <source
            class=""
            src="https://www.dtpcpalakkad.com/beta/video/palakkad-video-banner.mp4"
            type="video/mp4"
          />
        </video>
        <video class="w-100 h-100 d-none d-md-block" autoPlay muted playsInline loop>
          <source
            class=""
            src="https://www.dtpcpalakkad.com/beta/video/palakkad-video-banner.mp4"
            type="video/mp4"
          />
        </video>
        <div class="container">
          <div
            className="bannerCaption "
            style={{ position: "absolute", top: "50%", left: "50%" }}
          >
            <h2 class="text-white text-start mb-3 spotlight-banner-heading">
              The Granary <br /> of Kerala
            </h2>
            <h6 class="text-white pb-4 text-start pe-5 me-0 me-md-5 spotlight-banner-para">
              Palakkad district is a well-known, yet lesser-experienced
              destination that has plenty to offer for a passionate traveller
            </h6>
            <button className="spotlight-explore-btn">
            <a
              href="https://www.dtpcpalakkad.com/beta/search"
              class="main-btn text-white rounded-0"
            >
              Explore more <span class="small">❯</span>
            </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Spotlight;
