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
          Abhay Singh Tomar
        </h1>

        <p>
          I am a Artificial Intelligence and Data Science Student passionate about AI, ML, and Web
          Development.
        </p>
      </div>
    </div>
  );
}

export default Home;