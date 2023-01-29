import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/css/main_page_final.css";
import { useNavigate } from "react-router-dom";

const Main_Site_Page = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <section id="page1">
        <div className="registration">
          <a className="btn btn-light" href="/register" role="button">
            REGISTER NOW
          </a>
          <a className="btn btn-light" href="#" role="button">
            LOGIN PORTAL
          </a>
        </div>
        <div className="main">
          <img
            className="main_page"
            src={require("../assets/images/main_page_final_images/1.png")}
            alt="main page"
          />
        </div>
      </section>

      <section id="page2">
        <div className="event_overiew">
          <img
            className="event_page"
            src={require("../assets/images/main_page_final_images/2(tc).png")}
            alt="event_overiew"
          />
        </div>
      </section>
      <section id="page3">
        <div className="rules">
          <Carousel
            activeIndex={index}
            onSelect={() => {
              handleSelect();
            }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../assets/images/main_page_final_images/rule1.png")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../assets/images/main_page_final_images/rule2.png")}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section id="Sponsers">
        <div className="sponsers">
          <h1>Our Sponsers</h1>
          {/* <img
            className="event_page"
            src={require("../assets/images/main_page_final_images/oursponsers.png")}
            alt="event_overiew"
          /> */}

          {/* <button
            className="btn1"
            onclick={() => {
              console.log("23");
              window.location.href("https://nic.xyz/");
            }}
            href="https://nic.xyz/"
            >
            lksdfkdsfk
          </button> */}
          <div className="top_layer_sponsers">
            <a href="https://nic.xyz/">
              <img
                className="sponser_logo_images"
                src={require("../assets/images/main_page_final_images/xyzsponser.png")}
              ></img>
            </a>
            <a href="https://www.taskade.com/">
              <img
                className="sponser_logo_images elearner_sponser"
                src={require("../assets/images/main_page_final_images/taskade_sponser.png")}
              ></img>
            </a>
            <a href="https://www.grabon.in/">
              <img
                className="sponser_logo_images graponsponser"
                src={require("../assets/images/main_page_final_images/grabon_sponser.jpeg")}
              ></img>
            </a>
          </div>
          <div className="top_layer_sponsers">
            <a href="https://stockpe.in/">
              <img
                className="sponser_logo_images"
                src={require("../assets/images/main_page_final_images/stockpe_sponser.jpeg")}
              ></img>
            </a>
            <a href="https://www.elearnmarkets.com/">
              <img
                className="sponser_logo_images elearner_sponser"
                src={require("../assets/images/main_page_final_images/elearnmarketsponser.jpeg")}
              ></img>
            </a>
            <a href="https://givemycertificate.com/">
              <img
                className="sponser_logo_images"
                src={require("../assets/images/main_page_final_images/arrow_sponser.jpeg")}
              ></img>
            </a>
          </div>
        </div>
      </section>

      <section id="page4">
        <div className="gallery">
          <img
            className="event_page"
            src={require("../assets/images/main_page_final_images/gallery.png")}
            alt="gallerytc1"
          />
        </div>
      </section>

      <section id="page5">
        <div className="contact_us">
          <img
            className="event_page"
            src={require("../assets/images/main_page_final_images/6.png")}
            alt="Contact Us"
          />

          <button className="button" type="button" name="Register Now!">
            <a href="./register">REGISTER NOW</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main_Site_Page;
