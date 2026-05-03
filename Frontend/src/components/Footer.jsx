function Footer() {
  return (
    <footer
      className="text-light text-center py-4 mt-5"
      style={{ backgroundColor: "#020f36" }}
    >
      <div className="container">
        <p className="mb-2 fw-bold">
          Email: abhaysinghtomar835@gmail.com
        </p>

        <p className="mb-2">
          🔗 
          <a
            href="https://github.com/ABHAY-st2580"
            target="_blank"
            className="text-info text-decoration-none mx-2"
          >
            GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/tomarabhay835/"
            target="_blank"
            className="text-info text-decoration-none mx-2"
          >
            LinkedIn
          </a>
        </p>

        <small className="text-secondary">
          © 2026 Abhay Singh Tomar. All rights reserved.
        </small>

      </div>
    </footer>
  );
}

export default Footer;