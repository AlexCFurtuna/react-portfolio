import "../App.scss";

export default function Landing() {
  return (
    <div className="Landing">
      <div></div>
      <div className="title-container">
        <h2 className="sub-title yellow">Fullstack Developer</h2>
        <h1 className="title">
          <span className="yellow fname">Alex</span>
          <span className="dark lname">
            <span className="f">F</span>
            <span className="yellow u">u</span>rtuna
          </span>
        </h1>
        <h2 className="sub-title dark">
          Beer <span className="line-through">cocktail</span> drinker, ex
          basketball player & bedroom dj
        </h2>
      </div>
    </div>
  );
}
