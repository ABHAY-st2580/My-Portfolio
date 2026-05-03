import "./Academic_profiles.css";

function AcademicProfiles() {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center mb-4 text-light fw-bold">Academic Background</h2>

      <div className="card p-4 shadow mt-4"  style={{backgroundColor: "#193573", color: "white", borderRadius: "12px" }}>
        <h4 className="text-light fw-bold">B.Tech in Artificial Intelligence and Data Science</h4>
        <p>Sophomore@ National Institute of Technology, Kurukshetra (2024 - 2028)</p>
        <p>CGPA: 9.52</p>

        <h5 className="mt-3 text-light fw-bold">Relevant Coursework</h5>
        <ul className="mb-3">
          <li>Data Structures & Algorithms</li>
          <li>Database Management Systems</li>
          <li>Machine Learning</li>
          <li>Mathematics for AI</li>
          <li>Software Engineering</li>
          <li>Deep Learning</li>
          <li>Natural Language Processing</li>
        </ul>

        <h5 className="mt-3 text-light fw-bold">Achievements</h5>
        <ul className="mb-3">
          <li>400+ DSA problems solved</li>
          <li>Active on LeetCode & GeeksforGeeks</li>
        </ul>
      </div>
      <div className="card p-4 shadow mt-4" style={{ backgroundColor: "#193573", color: "white", borderRadius: "12px" }}>
        
        <h3 className="text-light fw-bold">
          Class 12th (Senior Secondary, Year 2023)
        </h3>

        <p className="mb-2">
          School: Gardenia Public School, Kanpur
        </p>

        <p className="mb-4">
          Percentage: 96.4% {/* or your actual */}
        </p>

        <h5 className="fw-semibold">Subjects</h5>
        <ul>
          <li>Mathematics</li>
          <li>Physics</li>
          <li>Chemistry</li>
          <li>English</li>
          <li>Hindi</li>
        </ul>

        <h5 className="fw-semibold mt-3">Achievements</h5>
        <ul>
          <li>Strong foundation in Mathematics & Problem Solving</li>
          <li>Participated in school-level competitions</li>
        </ul>

      </div>
    </div>
    </>
  );
}

export default AcademicProfiles;