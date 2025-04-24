
// import './Policies.css';

// function Policies() {
//   return (
//     // Step 1: Wrap ALL cards in a container
//     <div className="card-container">
      
//       {/* --- First Card (Original) --- */}
//       <div className="policies">
//         <div className="progress-bar">
//           {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
//             <div className="step" key={idx}>
//               <div className={`circle ${idx === 0 ? "active" : ""}`}></div>
//               <div className="label">{label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="image-section"></div>
//         <div className="text-content">
//           <p><strong>Article Title:</strong> California Bill Says</p>
//           <p><strong>Abstract:</strong></p>
//           <p>quick summary of the bill</p>
//         </div>
//         <div className="card-footer">
//           <div className="icons">
//             <span>❤️ XXXk</span>
//             <span>🔖 XXX</span>
//             <span>📤</span>
//           </div>
//           <button className="read-more">Read more</button>
//         </div>
//       </div>

//       {/* --- Second Card (Copy-Pasted & Modified) --- */}
//       <div className="policies">
//         <div className="progress-bar">
//           {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
//             <div className="step" key={idx}>
//               <div className={`circle ${idx === 2 ? "active" : ""}`}></div> {/* Changed active step */}
//               <div className="label">{label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="image-section"></div>
//         <div className="text-content">
//           <p><strong>Article Title:</strong> New Education Reform Bill</p> {/* Changed title */}
//           <p><strong>Abstract:</strong></p>
//           <p>This bill improves school funding.</p> {/* Changed text */}
//         </div>
//         <div className="card-footer">
//           <div className="icons">
//             <span>❤️ 150k</span> {/* Changed numbers */}
//             <span>🔖 42</span>
//             <span>📤</span>
//           </div>
//           <button className="read-more">Read more</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Policies;

// import { useState } from 'react';
// import './Policies.css';

// function Policies() {
//   // State for first card
//   const [firstCardLikes, setFirstCardLikes] = useState(1000);
//   const [firstCardBookmarks, setFirstCardBookmarks] = useState(50);
//   const [firstCardLiked, setFirstCardLiked] = useState(false);
//   const [firstCardBookmarked, setFirstCardBookmarked] = useState(false);

//   // State for second card
//   const [secondCardLikes, setSecondCardLikes] = useState(150000);
//   const [secondCardBookmarks, setSecondCardBookmarks] = useState(42);
//   const [secondCardLiked, setSecondCardLiked] = useState(false);
//   const [secondCardBookmarked, setSecondCardBookmarked] = useState(false);

//   // Format numbers to "k" notation
//   const formatNumber = (num) => {
//     if (num >= 1000000) {
//       return (num / 1000000).toFixed(1) + 'M';
//     }
//     if (num >= 1000) {
//       return (num / 1000).toFixed(1) + 'k';
//     }
//     return num.toString();
//   };

//   // Handlers for first card
//   const handleFirstCardLike = () => {
//     if (firstCardLiked) {
//       setFirstCardLikes(firstCardLikes - 1);
//     } else {
//       setFirstCardLikes(firstCardLikes + 1);
//     }
//     setFirstCardLiked(!firstCardLiked);
//   };

//   const handleFirstCardBookmark = () => {
//     if (firstCardBookmarked) {
//       setFirstCardBookmarks(firstCardBookmarks - 1);
//     } else {
//       setFirstCardBookmarks(firstCardBookmarks + 1);
//     }
//     setFirstCardBookmarked(!firstCardBookmarked);
//   };

//   // Handlers for second card
//   const handleSecondCardLike = () => {
//     if (secondCardLiked) {
//       setSecondCardLikes(secondCardLikes - 1);
//     } else {
//       setSecondCardLikes(secondCardLikes + 1);
//     }
//     setSecondCardLiked(!secondCardLiked);
//   };

//   const handleSecondCardBookmark = () => {
//     if (secondCardBookmarked) {
//       setSecondCardBookmarks(secondCardBookmarks - 1);
//     } else {
//       setSecondCardBookmarks(secondCardBookmarks + 1);
//     }
//     setSecondCardBookmarked(!secondCardBookmarked);
//   };

//   const handleShareClick = () => {
//     console.log("Share clicked");
//     // Add your share functionality here
//   };

//   return (
//     <div className="card-container">
//       {/* --- First Card (Original) --- */}
//       <div className="policies">
//         <div className="progress-bar">
//           {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
//             <div className="step" key={idx}>
//               <div className={`circle ${idx === 0 ? "active" : ""}`}></div>
//               <div className="label">{label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="image-section"></div>
//         <div className="text-content">
//           <p><strong>Article Title:</strong> California Bill Says</p>
//           <p><strong>Abstract:</strong></p>
//           <p>quick summary of the bill</p>
//         </div>
//         <div className="card-footer">
//           <div className="icons">
//             <button 
//               onClick={handleFirstCardLike} 
//               className={`emoji-button ${firstCardLiked ? 'active' : ''}`}
//             >
//               ❤️ {formatNumber(firstCardLikes)}
//             </button>
//             <button 
//               onClick={handleFirstCardBookmark} 
//               className={`emoji-button ${firstCardBookmarked ? 'active' : ''}`}
//             >
//               🔖 {formatNumber(firstCardBookmarks)}
//             </button>
//             <button onClick={handleShareClick} className="emoji-button">
//               📤
//             </button>
//           </div>
//           <button className="read-more">Read more</button>
//         </div>
//       </div>

//       {/* --- Second Card (Copy-Pasted & Modified) --- */}
//       <div className="policies">
//         <div className="progress-bar">
//           {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
//             <div className="step" key={idx}>
//               <div className={`circle ${idx === 2 ? "active" : ""}`}></div>
//               <div className="label">{label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="image-section"></div>
//         <div className="text-content">
//           <p><strong>Article Title:</strong> New Education Reform Bill</p>
//           <p><strong>Abstract:</strong></p>
//           <p>This bill improves school funding.</p>
//         </div>
//         <div className="card-footer">
//           <div className="icons">
//             <button 
//               onClick={handleSecondCardLike} 
//               className={`emoji-button ${secondCardLiked ? 'active' : ''}`}
//             >
//               ❤️ {formatNumber(secondCardLikes)}
//             </button>
//             <button 
//               onClick={handleSecondCardBookmark} 
//               className={`emoji-button ${secondCardBookmarked ? 'active' : ''}`}
//             >
//               🔖 {formatNumber(secondCardBookmarks)}
//             </button>
//             <button onClick={handleShareClick} className="emoji-button">
//               📤
//             </button>
//           </div>
//           <button className="read-more">Read more</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Policies;

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

      {/* --- Second Card (Copy-Pasted & Modified) --- */}
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
    </div>
  );
}

export default Policies;