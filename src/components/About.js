import "../App.scss";
import alex from "../assets/alex-bg.png";

export default function About() {
  return (
    <div className="About">
      <h1>About</h1>
      <div className="d-inline-flex p">
        <div className="container-fluid">
          <p>
            Hi, my name is Alex and welcome to my corner of the internet! The
            headline above probably gives you a pretty good idea of who I am in
            a nutshell and if you’re happy with that, I kindly invite you to
            scroll further down to check out what I do in more detail. If you’re
            an avid reader, I can give you the long version: I’m a self-taught
            front end developer building my portfolio on commercial website and
            web application development with a touch of CSS illustration (still
            in beta). My career has taken me from semi-professional basketball
            to bar and restaurant management and has finally landed me here. Not
            long ago I decided to try my luck at web development and took up
            independent study alongside my full time job at one of London’s top
            restaurants. Along the way I have dabbled in front and back end
            development and built a few websites. Right now I’m diving deeper
            and exploring Vue & React. Long story short, I’m fascinated by
            beautiful websites and what makes them tick. I welcome any
            opportunity to expand my skillset, from open source projects to
            freelance gigs or even joining a creative team of devs. I’m a big
            team player but need a good coach.
          </p>
        </div>
        <div className="container-fluid alex">
          <img src={alex} alt="logo" />
        </div>
      </div>
    </div>
  );
}
