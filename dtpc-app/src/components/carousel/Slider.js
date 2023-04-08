import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slimg1 from "../../images/slimg1.webp"
import slimg2 from "../../images/slimg2.webp"
import slimg3 from "../../images/slimg3.jpg"


function Slider() {
  return (
    <Carousel>
                <div>
                    <img src={slimg1} alt=""/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slimg2} alt=""/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slimg3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  );
}

export default Slider;