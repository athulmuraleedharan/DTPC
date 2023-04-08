import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-page d-flex">
        <div className="contact-page-left ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6230421412474!2d76.65272311477872!3d10.763507492330286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86dee55e8c81f%3A0x9bea40fddb5d22d5!2sDTPC%20Palakkad!5e0!3m2!1sen!2sin!4v1680887230512!5m2!1sen!2sin"
            width="700px" height="400px"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            title="map"
            className="contact-map"
          ></iframe>
        </div>
        <div className="contact-page-right">
          <div class="pe-2 ps-0 ps-md-5">
            <div class="col-12">
              <h3 class="theme-heading text-theme text-md-start ">Contact us</h3>
              <h2 class="text-dark text-start theme-heading-headingCaption">Get in Touch</h2>
            </div>
            District Tourism Promotion Council (DTPC)
            <br />
            West Fort Road, Palakkad
            <br />
            Ph :{" "}
            <a href="tel:+91491 2538996" title="Phone">
              +91 491 2538996
            </a>
            <br />
            Fax: +91 491 2530566
            <br />
            Email:{" "}
            <a
              href="mailto:info@dtpcpalakkad.com"
              title="Email"
              target="_blank"
              rel="noreferrer"
            >
              info@dtpcpalakkad.com
            </a>
            <br />
          </div>
        </div>
      </div>
      
    </div>
    // </div>
  );
}
export default Contact;
