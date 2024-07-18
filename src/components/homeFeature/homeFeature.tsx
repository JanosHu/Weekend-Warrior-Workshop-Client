import "./homeFeature.css";
import mainFeatureCarpenter from "../../assets/mainFeatureCarpenter.jpg"; // Tell webpack this JS file uses this image
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function HomeFeature() {
  return (
    <div className="home-feature">
      <div className="background-image-container">
        <div className="image-gradient-container">
          <img src={mainFeatureCarpenter} alt="image" />
          <div className="background-gradient"></div>
        </div>
        <div className="featured-content-container">
          <h1>Welcome to Weekend Warrior Workshop</h1>
          <p>
            Learn new skills and complete projects with expert guidance in no
            time!
          </p>
          <Link to="workshop">
            <Button variant="contained">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeFeature;
