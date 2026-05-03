import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "Phishing Detection System",
      desc: "Detects malicious URLs using ML",
      details: {
        problem: (
          <div>
            <p>
              A Cyber-Attack where fraudulent websites steal sensitive information when users click on malicious links. Inorder to stop this, I built a ML-based system to classify URLs as safe or phishing.
            </p>
          </div>
        ),
        description: (
          <div>
            <p>
              Developed a machine learning-based web application to detect phishing URLs in real-time.
              The system analyzes multiple lexical and domain-based features extracted from URLs and
              classifies them as <b>phishing</b> or <b>legitimate</b>.
            </p>
            <br />
            <h6>Dataset Used:</h6>
            <ul>
              <li><u>Sources</u>: PhishTank(Json), Kaggle, Mendeley Phishing Data</li>
              <li><u>Data Collected</u>: PhishTank(Json Data: 54K), Kaggle(Same as PhishTank)), Mendeley(Training Data: 45L, Test Data: 25L)</li>
              <li><u>Total Samples</u>: 221401 rows taken from the data collected (Mixed Data to Cover all patterns)</li>
              <li><u>Features Present in Dataset</u>: 2(url, Phish?)</li>
              <li><u>Features Extracted from given URLs</u>: 22(Length, Dots, Subdomains, etc.)</li>
              <li><u>Train/Test Split</u>: 80% / 20%</li>
            </ul>

            <h6>Feature Engineering:</h6>
            <p>Extracted <b>[22]</b> features including:</p>
            <ul>
              <li>URL Length, Number of Dots, Subdomains</li>
              <li>Digit Ratio, Special Characters</li>
              <li>Domain Age, HTTPS Usage</li>
              <li>IP Presence, Suspicious Keywords</li>
            </ul>

            <h6>Models Implemented:</h6>
            <ul>
              <li>Logistic Regression - 92%</li>
              <li>Decision Tree - 88%</li>
              <li>Random Forest - 95%</li>
              <li>XGBoost - 94%</li>
              <li>SVM - 90%</li>
            </ul>

            <h6>Best Model:</h6>
            <ul>
              <li>Model: Random Forest</li>
              <li>Accuracy: 95.1604%</li>
              <li>Precision: 93.1146%</li>
            </ul>

            <h6>Technologies:</h6>
            <ul>
              <li>React.js used in Frontend</li>
              <li>Django framework used in Backend</li>
              <li>Scikit-learn for Model Development, Pandas and NumPy for handling and manipulating the Data, matplotlib and Seaborn for Data Visualisation</li>
            </ul>

            <h6>Key Features:</h6>
            <ul>
              <li>Real-time detection</li>
              <li>API-based prediction</li>
            </ul>

            <h6>Future Improvements:</h6>
            <ul>
              <li>Deep learning integration</li>
              <li>Screenshot-based detection</li>
              <li>Text analysis and Classification as part of the detection process</li>
              <li>Browser extension</li>
            </ul>
          </div>
        ),
        github: "#"
      }
    },
    // {
    //   title: "Smart Traffic System",
    //   desc: "Optimizes traffic flow using ML",
    //   details: {
    //     problem: "Traffic congestion causes delays in cities.",
    //     solution: "Predict traffic and suggest optimal routes.",
    //     features: [
    //       "Traffic prediction",
    //       "Route optimization",
    //       "Visualization dashboard"
    //     ],
    //     tech: "Python, ML, Matplotlib",
    //     impact: "Reduced travel time in simulation by 25%",
    //     github: "#",
    //     live: "#"
    //   }
    // }
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Projects</h2>

      <div className="row">

        {/* LEFT SIDE */}
        <div className="col-md-3" >
          {projects.map((p, i) => (
            <div
              key={i}
              className={`card p-3 mb-3 shadow ${selected.title === p.title ? "border-primary" : ""}`}
              style={{ cursor: "pointer", backgroundColor: "#193573", color: "white"}}
              onClick={() => setSelected(p)}
            >
              <h5>{p.title}</h5>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-9">
          <div className="card p-4 shadow" style={{ backgroundColor: "#193573", color: "white", overflowY: "auto", scrollbarbehaviour: "smooth", height: "100vh",}}>
            <h3>{selected.title}</h3>
            <hr />

            <div><b className = "fw-bold">PROBLEM:</b> {selected.details.problem}</div>

            <hr />
            <div><b className = "fw-bold" >DESCRIPTION:</b>{selected.details.description}</div>
            <div className="mt-3">
              <a href={selected.details.github} className="btn btn-dark me-2">
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;