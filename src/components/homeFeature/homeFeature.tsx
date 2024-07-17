import "./homeFeature.css";
import mainFeatureCarpenter from "../../assets/mainFeatureCarpenter.jpg"; // Tell webpack this JS file uses this image

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
          <span>
            Learn new skills and complete projects with expert guidance in no
            time!
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeFeature;
