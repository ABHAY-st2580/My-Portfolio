import "./Coding_profiles.css";


function CodingProfiles() {
  return (
    <>
    <div className="container my-5 text-center">
      <h2 className="mb-4 text-light fw-bold">Coding Profiles</h2>

      <div className="row justify-content-center gap-3">

        <div className="col-md-3 card p-3 shadow" style = {{ backgroundColor: "#193573" }}>
          <h5>LeetCode</h5>
          <p>Track my DSA progress</p>
          <a href="https://leetcode.com/u/Abhayst2580/" target="_blank" className="btn btn-warning">
            View Profile
          </a>
        </div>

        <div className="col-md-3 card p-3 shadow" style = {{ backgroundColor: "#193573" }}>
          <h5>Codeforces</h5>
          <p>Competitive Programming</p>
          <a href="https://codeforces.com/profile/Abhay_xst_0" target="_blank" className="btn btn-danger">
            View Profile
          </a>
        </div>

        <div className="col-md-3 card p-3 shadow" style = {{ backgroundColor: "#193573" }}>
          <h5>GeeksforGeeks</h5>
          <p>Practices</p>
          <a href="https://www.geeksforgeeks.org/profile/abhaysingheujs?tab=activity" target="_blank" className="btn btn-success">
            View Profile
          </a>
        </div>

      </div>
    </div>
    </>
  );
}

export default CodingProfiles;