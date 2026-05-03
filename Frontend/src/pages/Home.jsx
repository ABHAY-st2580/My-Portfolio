import "./Home.css";
import profileimg from "../assets/profileimg.jpeg";

function Home() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="image-box">
          <img src={profileimg} alt="profile" />
        </div>
      </div>
      <div className="hero-right">
        <h1>
          My Portfolio
        </h1>

        <p>
          I am a Artificial Intelligence and Data Science Student passionate about AI, ML, and Web
          Development. I build impactful projects and solve real-world problems.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default Home;