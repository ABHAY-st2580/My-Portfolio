import "./Skills.css";
import react from "../assets/react.png";
import py from "../assets/py.jpg";
import cpp from "../assets/cpp.png";
import django from "../assets/django.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import mysql from "../assets/mysql.png";


function Skills() {
  return (
    <div className="container my-5 p-4 main">
      <h3 className="mb-3"><u>Skill Set</u></h3>
      <br />
      <div>
        <div className="col-12 d-flex flex-wrap align-items-center">
          {[react, py, cpp, django, js, html, css, bootstrap, mysql].map((img, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center m-2"
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#020617",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)"
              }}>
              <img
                src={img}
                alt="skill"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain"
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <div>
      <div className="mb-3">
        <span>Data Structures and Algorithms</span>
        <span>Object Oriented Programming</span>
        <span>Git & Github</span>
        <span>Web Development</span>
        <span>Database Management System</span>
        <span>Machine Learning</span>
        <span>Natural Language Processing</span>
      </div>

      <h6 className="header"><u>Frameworks</u></h6>
      <div className="mb-3">
        <span>Django</span>
        <span>React</span>
        <span>Bootstrap</span>
        <span>Scikit-Learn</span>
      </div>

      {/* Languages */}
      <h6 className="header"><u>Languages</u></h6>
      <div className="mb-3">
        <span>C</span>
        <span>C++</span>
        <span>Python</span>
        <span>MySQL</span>
        <span>CSS</span>
        <span>HTML</span>
        <span>JavaScript</span>
      </div>

      {/* Frontend */}
      <h6 className="header"><u>Frontend</u></h6>
      <div className="mb-3">
        <span>React</span>
        <span>Tailwind CSS</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Bootstrap</span>
      </div>

      {/* Backend */}
      <h6 className="header"><u>Backend</u></h6>
      <div>
        <span>Django</span>
        <span>Node.js</span>
      </div>
      </div>
      <br />
      <br />
      <h3><u>Descriptions</u></h3>
      <div className="container my-4 p-4 rounded shadow" style={{ backgroundColor: "#0a192f", color: "white" }}>
        <h2 className="mb-3">Data Structures & Algorithms</h2>

        <p>
          Strong problem-solving skills with consistent practice on coding platforms.
          Focus on optimizing Time and Space complexity.
        </p>

        <ul>
          <li><b>Topics:</b>
            <ul>
              <li>Arrays</li>
              <li>Strings</li>
              <li>Stack</li>
              <li>Queue</li>
              <li>Trees</li>
              <li>Heaps</li>
              <li>Graphs</li>
              <li>Dynamic Programming</li>
              <li>Greedy Algorithms</li>
            </ul>
          </li>
          <br />
          <li><b>Platforms:</b> LeetCode, Codeforces, GeeksforGeeks</li>
          <br />
          <li><b>Achievements:</b> 400+ problems solved</li>
        </ul>
      </div>
      <div className="container my-5 p-4 rounded shadow" style={{ backgroundColor: "#0a192f", color: "white" }}>
        <h2 className="mb-4">Machine Learning</h2>

        <p>
          Strong foundation in core machine learning concepts including supervised and unsupervised learning,
          model evaluation, and feature engineering. Experienced in building predictive models for real-world problems.
        </p>

        <ul>
          <li><b>Regression:</b>
            <ul>
              <li>Linear Regression</li>
              <li>Logistic Regression</li>
              <li>Ridge & Lasso Regression</li>
              <li>Polynomial Regression</li>
              <li>Softmax Regression</li>
            </ul>
          </li>
          <br />
          <li><b>Classification:</b>
            <ul>
              <li>Decision Tree</li>
              <li>Naive Bayes</li>
              <li>Ensemble Learning (Bagging, Boosting, Voting, Stacking, Blending)</li>
              <li>Random Forest Classifier</li>
              <li>Support Vector Machine</li>
              <li>Adaboost</li>
              <li>XGBoost</li>
              <li>GradientBoosting</li>
              <li>K-Nearest Neighbors</li>
            </ul>
          </li>
          <br />
          <li><b>Clustering:</b>
            <ul>
              <li>K-Means</li>
              <li>Hierarchical Clustering (Dendrogram)</li>
              <li>DBSCAN</li>
              <li>BIRCH</li>
              <li>Fuzzy C-Means</li>
              <li>K-Means++</li>
            </ul>
          </li>
          <br />
          <li><b>Concepts:</b> Overfitting & Underfitting, Cross Validation, Bias-Variance Tradeoff</li>
          <br /> 
          <li><b>Libraries:</b> Scikit-Learn, Pandas, NumPy, Matplotlib, Seaborn, Plotly, Dash</li>
        </ul>
      </div>
            <div className="container my-4 p-4 rounded shadow" style={{ backgroundColor: "#0a192f", color: "white" }}>
        <h2 className="mb-3">Natural Language Processing (NLP)</h2>

        <p>
          Experience in processing and analyzing textual data using machine learning techniques.
          Built models for classification and text analysis tasks.
        </p>

        <ul>
          <li><b>Techniques:</b> Tokenization, Stemming, Lemmatization</li>
          <br />
          <li><b>Concepts:</b> TF-IDF, Bag of Words, Text Classification, Word2Vec</li>
          <br />
          <li><b>Libraries:</b> NLTK, scikit-learn</li>
          <br />
        </ul>
      </div>
      <div className="container my-4 p-4 rounded shadow" style={{ backgroundColor: "#0a192f", color: "white" }}>
        <h2 className="mb-3">Web Development</h2>

        <p>
          Skilled in building responsive and dynamic web applications using modern frameworks.
          Experience in full-stack development with REST APIs and user authentication systems.
        </p>

        <ul>
          <li><b>Frontend:</b> React, Bootstrap, Tailwind CSS</li>
          <br />
          <li><b>Backend:</b> Django(Django Rest FrameWork), FastAPI</li>
          <br />
          <li><b>Features:</b> Authentication, API Integration, Dashboard UI</li>
        </ul>
      </div>
      <div className="container my-4 p-4 rounded shadow" style={{ backgroundColor: "#0a192f", color: "white" }}>
        <h2 className="mb-3">Database Management Systems (DBMS)</h2>

        <p>
          Strong understanding of relational database systems, data modeling, and efficient query optimization.
          Experienced in designing schemas and writing complex queries for real-world applications.
        </p>

        <ul>
          <li><b>Concepts:</b> Normalization, Indexing, Transactions, ACID Properties</li>
          <br />
          <li><b>Querying:</b> Joins, Subqueries, Aggregations</li>
          <br />
          <li><b>Databases:</b> MySQL</li>
          <br />
          <li><b>Applications:</b> Backend integration with Django & APIs</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;