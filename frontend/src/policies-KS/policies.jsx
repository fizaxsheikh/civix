
import { useState } from 'react';
import './Policies.css';

function Policies() {
  // State for first card
  const [firstCardLikes, setFirstCardLikes] = useState(51);
  const [firstCardBookmarks, setFirstCardBookmarks] = useState(21);
  const [firstCardLiked, setFirstCardLiked] = useState(false);
  const [firstCardBookmarked, setFirstCardBookmarked] = useState(false);
  const [firstCardLikeAnim, setFirstCardLikeAnim] = useState(false);

  // State for second card
  const [secondCardLikes, setSecondCardLikes] = useState(15);
  const [secondCardBookmarks, setSecondCardBookmarks] = useState(3);
  const [secondCardLiked, setSecondCardLiked] = useState(false);
  const [secondCardBookmarked, setSecondCardBookmarked] = useState(false);
  const [secondCardLikeAnim, setSecondCardLikeAnim] = useState(false);

  // State for third card (new)
  const [thirdCardLikes, setThirdCardLikes] = useState(37);
  const [thirdCardBookmarks, setThirdCardBookmarks] = useState(12);
  const [thirdCardLiked, setThirdCardLiked] = useState(false);
  const [thirdCardBookmarked, setThirdCardBookmarked] = useState(false);
  const [thirdCardLikeAnim, setThirdCardLikeAnim] = useState(false);

  // Handlers for first card
  const handleFirstCardLike = () => {
    if (firstCardLiked) {
      setFirstCardLikes(firstCardLikes - 1);
    } else {
      setFirstCardLikes(firstCardLikes + 1);
      setFirstCardLikeAnim(true);
      setTimeout(() => setFirstCardLikeAnim(false), 500);
    }
    setFirstCardLiked(!firstCardLiked);
  };

  const handleFirstCardBookmark = () => {
    if (firstCardBookmarked) {
      setFirstCardBookmarks(firstCardBookmarks - 1);
    } else {
      setFirstCardBookmarks(firstCardBookmarks + 1);
    }
    setFirstCardBookmarked(!firstCardBookmarked);
  };

  // Handlers for second card
  const handleSecondCardLike = () => {
    if (secondCardLiked) {
      setSecondCardLikes(secondCardLikes - 1);
    } else {
      setSecondCardLikes(secondCardLikes + 1);
      setSecondCardLikeAnim(true);
      setTimeout(() => setSecondCardLikeAnim(false), 500);
    }
    setSecondCardLiked(!secondCardLiked);
  };

  const handleSecondCardBookmark = () => {
    if (secondCardBookmarked) {
      setSecondCardBookmarks(secondCardBookmarks - 1);
    } else {
      setSecondCardBookmarks(secondCardBookmarks + 1);
    }
    setSecondCardBookmarked(!secondCardBookmarked);
  };

  // Handlers for third card (new)
  const handleThirdCardLike = () => {
    if (thirdCardLiked) {
      setThirdCardLikes(thirdCardLikes - 1);
    } else {
      setThirdCardLikes(thirdCardLikes + 1);
      setThirdCardLikeAnim(true);
      setTimeout(() => setThirdCardLikeAnim(false), 500);
    }
    setThirdCardLiked(!thirdCardLiked);
  };

  const handleThirdCardBookmark = () => {
    if (thirdCardBookmarked) {
      setThirdCardBookmarks(thirdCardBookmarks - 1);
    } else {
      setThirdCardBookmarks(thirdCardBookmarks + 1);
    }
    setThirdCardBookmarked(!thirdCardBookmarked);
  };

  const handleShareClick = () => {
    console.log("Share clicked");
    // Add your share functionality here
  };

  return (
    <div className="card-container">
      {/* --- First Card (Original) --- */}
      <div className="policies">
        <div className="progress-bar">
          {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
            <div className="step" key={idx}>
              <div className={`circle ${idx === 1 ? "active" : ""}`}></div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
        <div className="image-section"></div>
        <div className="text-content">
          <p><strong>Bill AB 421 - Immigration Enforcement California Bill </strong> </p>
          <p><strong>Abstract:</strong></p>
          <p>quick summary of the bill</p>
        </div>
        <div className="card-footer">
          <div className="icons">
            <div className="count-container">
              <button 
                onClick={handleFirstCardLike} 
                className={`emoji-button ${firstCardLiked ? 'active' : ''} ${firstCardLikeAnim ? 'animate' : ''}`}
              >
                <span className="heart-icon">❤️</span> {firstCardLikes}
              </button>
              <button 
                onClick={handleFirstCardBookmark} 
                className={`emoji-button ${firstCardBookmarked ? 'active' : ''}`}
              >
                <span className="bookmark-icon">🔖</span> {firstCardBookmarks}
              </button>
            </div>
            <button onClick={handleShareClick} className="emoji-button">
              📤
            </button>
          </div>
          <button className="read-more">Read more</button>
        </div>
      </div>

      {/* --- Second Card --- */}
      <div className="policies">
        <div className="progress-bar">
          {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
            <div className="step" key={idx}>
              <div className={`circle ${idx === 2 ? "active" : ""}`}></div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
        <div className="image-section"></div>
        <div className="text-content">
          <p><strong>Article Title:</strong> New Education Reform Bill</p>
          <p><strong>Abstract:</strong></p>
          <p>This bill improves school funding.</p>
        </div>
        <div className="card-footer">
          <div className="icons">
            <div className="count-container">
              <button 
                onClick={handleSecondCardLike} 
                className={`emoji-button ${secondCardLiked ? 'active' : ''} ${secondCardLikeAnim ? 'animate' : ''}`}
              >
                <span className="heart-icon">❤️</span> {secondCardLikes}
              </button>
              <button 
                onClick={handleSecondCardBookmark} 
                className={`emoji-button ${secondCardBookmarked ? 'active' : ''}`}
              >
                <span className="bookmark-icon">🔖</span> {secondCardBookmarks}
              </button>
            </div>
            <button onClick={handleShareClick} className="emoji-button">
              📤
            </button>
          </div>
          <button className="read-more">Read more</button>
        </div>
      </div>

      {/* --- Third Card (New) --- */}
      <div className="policies">
        <div className="progress-bar">
          {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
            <div className="step" key={idx}>
              <div className={`circle ${idx === 4 ? "active" : ""}`}></div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
        <div className="image-section"></div>
        <div className="text-content">
          <p><strong>Article Title:</strong> Environmental Protection Act</p>
          <p><strong>Abstract:</strong></p>
          <p>Establishes new regulations to reduce carbon emissions.</p>
        </div>
        <div className="card-footer">
          <div className="icons">
            <div className="count-container">
              <button 
                onClick={handleThirdCardLike} 
                className={`emoji-button ${thirdCardLiked ? 'active' : ''} ${thirdCardLikeAnim ? 'animate' : ''}`}
              >
                <span className="heart-icon">❤️</span> {thirdCardLikes}
              </button>
              <button 
                onClick={handleThirdCardBookmark} 
                className={`emoji-button ${thirdCardBookmarked ? 'active' : ''}`}
              >
                <span className="bookmark-icon">🔖</span> {thirdCardBookmarks}
              </button>
            </div>
            <button onClick={handleShareClick} className="emoji-button">
              📤
            </button>
          </div>
          <button className="read-more">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Policies;