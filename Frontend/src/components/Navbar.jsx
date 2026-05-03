import favicon from '../assets/Portfolioicon.png';

function Navbar({ setCurrentPage }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-sm nav-link" style={{ backgroundColor: "#020b26", position: "sticky", top: 0, zIndex: 1000}}>
        <div className="container">
          <img
              src={favicon}
              alt="logo"
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "10px"
              }}
            />
          <a className="navbar-brand fw-bold">
            Abhay Singh Tomar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item mx-2">
                <a className="nav-link active text-white" style={{ cursor: "pointer" }} onClick={() => setCurrentPage("home")}>Home</a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => setCurrentPage("skills")}>Skills</a>
              </li>
              
              <li className="nav-item mx-2">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} href="/resume.pdf" download>
                  Download_Resume
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link text-white" style={{ cursor: "pointer" }} onClick={() => setCurrentPage("projects")}>
                  Projects
                </a>
              </li>

              <li className="nav-item dropdown mx-2">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-target=".navbar-collapse.show"
                >
                  Profiles
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => setCurrentPage("coding-profiles")}>Coding Profiles</a></li>
                  <li><a className="dropdown-item" style={{ cursor: "pointer" }} onClick={() => setCurrentPage("academic-profiles")}>Academic Profiles</a></li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link text-white" onClick={() => setCurrentPage("contact")}>
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;