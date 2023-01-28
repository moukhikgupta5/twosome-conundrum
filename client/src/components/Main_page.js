import "../assets/css/main_page.css";
const Main_Page = () => {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
        rel="stylesheet"
      ></link>
      <section id="page1">
        <div className="registration">
          <div className="main_page_links">
            <a className="btn btn-light" href="./register" role="button">
              REGISTER NOW
            </a>
            <a className="btn btn-light" href="#" role="button">
              LOGIN PORTAL
            </a>
          </div>
        </div>
        {/* <div className="main">
          <img
            className="main_page"
            src={require("../assets/images/main_page_images/1.png")}
            alt="main page"
          />
        </div> */}
      </section>

      <section id="page2">
        <div className="event_overiew">
          <img
            className="event_page"
            src={require("../assets/images/main_page_images/2(font of overview chg).png")}
            alt="event_overiew"
          />
        </div>
      </section>
      <section id="page3">
        <div className="rules">
          <img
            className="event_page"
            src={require("../assets/images/main_page_images/3.png")}
            alt="rules"
          />

          <div className="rules_carausel">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={require("../assets/images/main_page_images/2.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../assets/images/main_page_images/1.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={require("../assets/images/main_page_images/12.png")}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="page4">
        <div className="gallery">
          <img
            className="event_page"
            src={require("../assets/images/main_page_images/4.png")}
            alt="gallerytc1"
          />
        </div>

        <div className="row">
          <div className="column">
            <img
              src={require("../assets/images/main_page_images/a.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/b.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/c.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/d.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/p (2).jpg")}
              alt=""
            />
          </div>
          <div className="column">
            <img
              src={require("../assets/images/main_page_images/e.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/f.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/g.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/h.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/p (3).jpg")}
              alt=""
            />
          </div>
          <div className="column">
            <img
              src={require("../assets/images/main_page_images/i.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/j.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/k.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/l.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/p (4).jpg")}
              alt=""
            />
          </div>
          <div className="column">
            <img
              src={require("../assets/images/main_page_images/m.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/n.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/o.jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/p (1).jpg")}
              alt=""
            />
            <img
              src={require("../assets/images/main_page_images/p (5).jpg")}
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="page5">
        <div className="contact_us">
          <img
            className="event_page"
            src={require("../assets/images/main_page_images/7.png")}
            alt="Contact Us"
          />

          <button className="buton_footer" type="button" name="Register Now!">
            <a href="/register">Link for Registeration</a>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Main_Page;
