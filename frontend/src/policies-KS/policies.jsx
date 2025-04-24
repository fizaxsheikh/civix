
import './Policies.css';

function Policies() {
  return (
    // Step 1: Wrap ALL cards in a container
    <div className="card-container">
      
      {/* --- First Card (Original) --- */}
      <div className="policies">
        <div className="progress-bar">
          {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
            <div className="step" key={idx}>
              <div className={`circle ${idx === 0 ? "active" : ""}`}></div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
        <div className="image-section"></div>
        <div className="text-content">
          <p><strong>Article Title:</strong> California Bill Says</p>
          <p><strong>Abstract:</strong></p>
          <p>quick summary of the bill</p>
        </div>
        <div className="card-footer">
          <div className="icons">
            <span>❤️ XXXk</span>
            <span>🔖 XXX</span>
            <span>📤</span>
          </div>
          <button className="read-more">Read more</button>
        </div>
      </div>

      {/* --- Second Card (Copy-Pasted & Modified) --- */}
      <div className="policies">
        <div className="progress-bar">
          {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
            <div className="step" key={idx}>
              <div className={`circle ${idx === 2 ? "active" : ""}`}></div> {/* Changed active step */}
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
        <div className="image-section"></div>
        <div className="text-content">
          <p><strong>Article Title:</strong> New Education Reform Bill</p> {/* Changed title */}
          <p><strong>Abstract:</strong></p>
          <p>This bill improves school funding.</p> {/* Changed text */}
        </div>
        <div className="card-footer">
          <div className="icons">
            <span>❤️ 150k</span> {/* Changed numbers */}
            <span>🔖 42</span>
            <span>📤</span>
          </div>
          <button className="read-more">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Policies;