import React from "react";
import "./imagecard.css";

function ImageCard(props) {
  return (
    <div>
      <div class="container">
        <h3 style={{ color: "red" }}>{props.heading}</h3>
        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: "2.8rem",
            marginBottom: "25px",
          }}
        >
          {props.headingcaption}
        </h1>

        <div class="flex">
          <div>
            <img src={props.imageone} alt="imageone" className="imagecard" />
            <h4 className="imagecard-caption">{props.captionone}</h4>
          </div>
          <div>
            <img src={props.imagetwo} alt="imagetwo" className="imagecard" />
            <h4 className="imagecard-caption">{props.captiontwo}</h4>
          </div>
          <div>
            <img
              src={props.imagethree}
              alt="imagethree"
              className="imagecard"
            />
            <h4 className="imagecard-caption">{props.captionthree}</h4>
          </div>
          <div>
            <img src={props.imagefour} alt="imagefour" className="imagecard" />
            <h4 className="imagecard-caption">{props.captionfour}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ImageCard;
