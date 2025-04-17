
// import profilePic from './headshot.jpeg'

// function Policies(){
//     return( 
//         <div className="policies">
//             <img className= "policy-image" src = {profilePic} alt="bill"></img>
//             <h2></h2>
//             <p>My name is Kayleen Speller and I go to UCLA !!</p>
//         </div> 
//     )

// }

// export default Policies

import profilePic from './headshot.jpeg';
import './Policies.css'; // make sure to import your CSS

function Policies() {
  return (
    <div className="policies">
      {/* Progress Bar */}
      <div className="progress-bar">
        {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
          <div className="step" key={idx}>
            <div className={`circle ${idx === 0 ? "active" : ""}`}></div>
            <div className="label">{label}</div>
          </div>
        ))}
      </div>

      {/* Image section */}
      <div className="image-section">
        <span className="sparkle">✨</span>
        <span className="sparkle">✨</span>
      </div>

      {/* Text content */}
      <div className="text-content">
        <p><strong>Article Title:</strong> California Bill Says</p>
        <p><strong>Abstract:</strong></p>
        <p>dfdfdfsdfsd</p>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <div className="icons">
          <span>❤️ XXXk</span>
          <span>🔖 XXX</span>
          <span>📤</span>
        </div>
        <button className="read-more">Read more</button>
      </div>
    </div>
  );
}

export default Policies;