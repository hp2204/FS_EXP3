import profileImg from "../assets/cute-icon.jpg";

function Profile() {
  return (
    <div className="card">

      <img
        className="profile-img"
        src={profileImg}
        alt="Profile"
      />

      <h2>  Harshita Pandey </h2>
      <p><b>Branch:</b> CSE AI-ML</p>
      <p><b>Email:</b> 23bai70468@cuchd.in</p>

      <h3>Projects</h3>
      <ul>
        <li>Medical Image Classification</li>
        <li>Fake News Detection</li>
        <li></li>
      </ul>

      <h3>Internships</h3>
      <p>NIT Kurukshetra: Summer Internship</p>
      <p>Cisco Virtual Internship</p>

    </div>
  );
}

export default Profile;
