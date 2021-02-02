import "../App.scss";
import bottleshop from "../assets/projects/bottleshop.png";
import portfolio from "../assets/projects/portfolio.png";
import weatherapp from "../assets/projects/weather-app.png";
import murky from "../assets/projects/murky.png";
import cc from "../assets/projects/cc.png";
import covid from "../assets/projects/covid.png";

export default function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="flex-row">
        <div className="frontend">
          <h2>Web</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>BottleShop</h3>
              <p>Craft Beer Shop</p>
              <img src={bottleshop} alt="bottleshop" />
              <div className="tech">
                <small>NuxtJS</small> <small>Strapi</small> <small>MySQL</small>{" "}
                <small>GraphQL</small>{" "}
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://bottle-shop.vercel.app/"
              >
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Portfolio</h3>
              <p>First attempt to display my work .</p>
              <img src={portfolio} alt="portfolio" />
              <div className="tech">
                <small>NuxtJS</small> <small>Strapi</small> <small>MySQL</small>{" "}
                <small>GraphQL</small>{" "}
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://portfolio-blue-five.now.sh/"
              >
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Covid19 Romania</h3>
              <p>
                Recently discovered the beauty of APIs so decided to fire this
                up for myself .
              </p>
              <img src={covid} alt="portfolio" />
              <div className="tech">
                <small>NuxtJS</small> <small>Strapi</small> <small>MySQL</small>{" "}
                <small>GraphQL</small>{" "}
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://covid-livid.vercel.app/"
              >
                Check it out ...
              </a>
            </div>

            <div className="project-item">
              <h3>Murky Art</h3>
              <p>
                This Online Art Gallery was my first attempt to a CRUD
                application with my beloved Rails .
              </p>
              <img src={murky} alt="murky" />
              <div className="tech">
                <small>HTML</small> <small>CSS</small> <small>Rails</small>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                className="btn"
                href="https://murky-art.herokuapp.com/"
              >
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Calculated Carpentry</h3>
              <p>
                Presentation Website for a friend's construction company in
                London .
              </p>
              <img src={cc} alt="cc" />
              <div className="tech">
                <small>HTML</small> <small>CSS</small> <small>JS</small>{" "}
              </div>
              <a className="btn" href="https://calculated-carpentry.now.sh/">
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Vue Weather App</h3>
              <p>
                Simple Vue weather app with help from the OpenWeatherMapAPI .
              </p>
              <img src={weatherapp} alt="weatherapp" />
              <div className="tech">
                <small>Vue</small> <small>CSS</small> <small>HTML</small>{" "}
                <small>OpenWeatherMapAPI</small>{" "}
              </div>
              <a
                target="_blank"
                rel="
                noreferrer"
                className="btn"
                href="https://vue-weather-app-alpha.vercel.app/"
              >
                Check it out ...
              </a>
            </div>
          </div>
        </div>
        <div className="backend">
          <h2>Back End</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>BottleShop</h3>
              <p>Craft Beer Shop</p>

              <div className="tech">
                <small>NuxtJS</small> <small>Strapi</small> <small>MySQL</small>{" "}
                <small>GraphQL</small>{" "}
              </div>
              <a className="btn" href="https://bottle-shop.vercel.app/">
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Portfolio</h3>
              <p>First attempt to display my work .</p>

              <div className="tech">
                <small>NuxtJS</small> <small>Strapi</small> <small>MySQL</small>{" "}
                <small>GraphQL</small>{" "}
              </div>
              <a className="btn" href="https://portfolio-blue-five.now.sh/">
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Covid19 Romania</h3>
              <p>
                Recently discovered the beauty of APIs so decided to fire this
                up for myself .
              </p>

              <div className="tech">
                <small>NuxtJS</small> <small>Strapi</small> <small>MySQL</small>{" "}
                <small>GraphQL</small>{" "}
              </div>
              <a className="btn" href="https://covid-livid.vercel.app/">
                Check it out ...
              </a>
            </div>

            <div className="project-item">
              <h3>Murky Art</h3>
              <p>
                This Online Art Gallery was my first attempt to a CRUD
                application with my beloved Rails .
              </p>

              <div className="tech">
                <small>HTML</small> <small>CSS</small> <small>Rails</small>
              </div>
              <a className="btn" href="https://murky-art.herokuapp.com/">
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Calculated Carpentry</h3>
              <p>
                Presentation Website for a friend's construction company in
                London .
              </p>

              <div className="tech">
                <small>HTML</small> <small>CSS</small> <small>JS</small>{" "}
              </div>
              <a className="btn" href="https://calculated-carpentry.now.sh/">
                Check it out ...
              </a>
            </div>
            <div className="project-item">
              <h3>Vue Weather App</h3>
              <p>
                Simple Vue weather app with help from the OpenWeatherMapAPI .
              </p>

              <div className="tech">
                <small>Vue</small> <small>CSS</small> <small>HTML</small>{" "}
                <small>OpenWeatherMapAPI</small>{" "}
              </div>
              <a
                className="btn"
                href="https://vue-weather-app-alpha.vercel.app/"
              >
                Check it out ...
              </a>
            </div>
          </div>
        </div>

        <div className="CSS Illustration">
          <h2>CSS Illustrations</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>project name</h3>
              <p>description</p>
              <small>technologies</small>{" "}
            </div>
            <div className="project-item">
              <h3>project name</h3>
              <p>description</p>
              <small>technologies</small>{" "}
            </div>

            <div className="project-item">
              <h3>project name</h3>
              <p>description</p>
              <small>technologies</small>{" "}
            </div>
            <div className="project-item">
              <h3>project name</h3>
              <p>description</p>
              <small>technologies</small>{" "}
            </div>
            <div className="project-item">
              <h3>project name</h3>
              <p>description</p>
              <small>technologies</small>{" "}
            </div>
            <div className="project-item">
              <h3>project name</h3>
              <p>description</p>
              <small>technologies</small>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
