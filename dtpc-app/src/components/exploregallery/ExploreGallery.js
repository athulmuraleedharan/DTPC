import React from "react";
import "./exploregallery.css";
import verticalone from "../../images/vertical-1.webp"
import verticaltwo from "../../images/vertical-2.webp"
import palakadfort from "../../images/palakkadfort.webp"
import valley from "../../images/valley.webp"
import galone from "../../images/gal-1.webp"
import galtwo from "../../images/gal-2.webp"

function ExploreGallery()
{
    return (
        <div>
            <div className="explore-gallery">
            <div className="explore-gallery-divone ">
                <img src={verticalone}  height="100%" width="100%" alt="vertical"></img>
            </div>
            <div className="explore-gallery-divtwo">
                <div className="explore-gallery-divtwo-sub">
                    <img src={galone} alt="imageone" width="100%" height="210px"/>
                </div>
                <div className="explore-gallery-divtwo-sub">
                    <img src={valley} alt="imagetwo" width="100%" height="210px" style={{paddingTop: "4%"}}/>
                </div>
            </div>
            <div className="explore-gallery-divtwo">
                <div className="explore-gallery-divtwo-sub">
                <img src={galtwo} alt="imageone" width="100%" height="210px" />
                </div>
                <div className="explore-gallery-divtwo-sub">
                <img src={palakadfort} alt="imageone" width="100%" height="210px" style={{paddingTop: "4%"}} />   
                </div>
            </div>
            <div className="explore-gallery-divone">
            <img src={verticaltwo}  height="100%" width="100%" alt="vertical"></img>

            </div>
            </div>
        </div>
    )
}
export default ExploreGallery;