import React from "react";
import { Link } from "react-router-dom";
import "./home.styles.css";
import CustomButton from "../../components/custom-button/custom-button.component";
import Service from "../../components/service-description/service-description.component";
import ServiceArray from "../../assets/Services";
import About from "../../components/About/about-component";
import Contact from "../../components/Contact/contact.component";
import { zoomIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
// import images from "../../assets/galleryImages";
import ImageSlider from "../../components/Gallery/gallery.component";

const styles = {
  zoomIn: {
    animation: "x 4s",
    animationName: Radium.keyframes(zoomIn, "zoomIn")
  }
};

const Home = () => {
  return (
    <StyleRoot>
      <div className="Home" id="Home">
        <div className="Intro">
          <div className="Welcome" style={styles.zoomIn}>
            <div className="note">
              Welcome to Ojoo Agbala Daniel Anu-Oluwapo Cooperative Society
            </div>
            <p>Your partner in building financial stability...</p>
            <CustomButton>
              <Link to="/register">BECOME A MEMBER</Link>
            </CustomButton>
          </div>

          <div className="image">
            <img src="Finance.gif" alt="" />
          </div>
        </div>
        <div className="services">
          <div className="service-title" id="Services">
            <h2>Services</h2>
          </div>
          <div className="service-options">
            {ServiceArray.map((service) => {
              return (
                <Service
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  logo={service.logo}
                  notes={service.notes}
                />
              );
            })}
          </div>
        </div>
        <ImageSlider />
        <div className="others">
          <About />
          <Contact />
        </div>
      </div>
    </StyleRoot>
  );
};

export default Home;
