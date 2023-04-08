import React from "react";
// import "../style/all-minify.css";
import Header from "../components/header/Header";
import Spotlight from "../components/spotlight/Spotlight";
import "./home.css";
// import Slider from "../components/Slider";
import Slider from "../components/carousel/Slider";
import ExploreGallery from "../components/exploregallery/ExploreGallery";
import monuments from "../images/monuments.webp";
import worships from "../images/places-of-worship.webp";
import hills from "../images/hills.webp";
import forts from "../images/forts.webp";
import villagelife from "../images/village-life.webp";
import cuisine from "../images/cuisine.webp";
// import waterfall from "../images/waterfalls.webp";
import ImageCard from "../components/imagecard/ImageCard";
import culture from "../images/culture.webp";
import adventure from "../images/adventure.webp";
import resort from "../images/resort.webp";
import hotel from "../images/hotel.webp";
import villas from "../images/sv.webp";
import homestay from "../images/homestay.webp";
import Advertisement from "../components/advertisement/Advertisement";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/FooterPage";

function Home() {
  return (
    <div>
      <Header> </Header>
      <Spotlight></Spotlight>
      {/* <Welcome></Welcome> */}
      <div className="welcomepage d-flex">
        <div className="welcomepage-left">
          <div className="welcomepage-left-text">
            <h2 class=" headingCaption">
              Welcome to
              <br />
              Palakkad
            </h2>
            <p class="mb-0 pe-md-5 pe-0  text-start mb-2">
              Palakkad is a blessed land that boasts of lush green paddy fields,
              mist-drenched mountain ranges, dense forest ranges where rare
              flora and fauna flourish and even majestic monuments{" "}
            </p>
          </div>
        </div>
        <div className="welcomepage-right">
          <Slider />
        </div>
      </div>
      <ImageCard
        imageone={monuments}
        imagetwo={worships}
        imagethree={hills}
        imagefour={forts}
        heading={"DESTINATION"}
        headingcaption={"Top Places To Go"}
        captionone={"Monuments"}
        captiontwo={"Worships"}
        captionthree={"Hills"}
        captionfour={"Forts"}
      ></ImageCard>
      <div className="experiance-section" style={{ paddingTop: "100px" }}>
        <ImageCard
          imageone={adventure}
          imagetwo={cuisine}
          imagethree={culture}
          imagefour={villagelife}
          heading={"Experiances"}
          headingcaption={"Change the Way you Travel"}
        ></ImageCard>
      </div>
      <div>
        <h3 className="exploregallery-heading">Photos | Videos</h3>
        <h1 className="exploregallery-heading-caption">Explore Gallery</h1>
        <ExploreGallery />
      </div>
      <div className="service-section" style={{ marginTop: "150px" }}>
        <ImageCard
          imageone={homestay}
          imagetwo={hotel}
          imagethree={resort}
          imagefour={villas}
          heading={"SERVICE PROVIDERS"}
          headingcaption={"Trip Essentials"}
        ></ImageCard>
      </div>
      <div className="ad-section">
        <Advertisement></Advertisement>
      </div>
      <div className="contact-section">
        <Contact> </Contact>
      </div>
      <div className="footer-section">
        <Footer></Footer>
      </div>
    </div>
  );
}
export default Home;
