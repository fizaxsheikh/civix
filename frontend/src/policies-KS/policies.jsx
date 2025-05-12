
// import { useState } from 'react';
// import './Policies.css';

// function Policies() {
//   // State for first card
//   const [firstCardLikes, setFirstCardLikes] = useState(51);
//   const [firstCardBookmarks, setFirstCardBookmarks] = useState(21);
//   const [firstCardLiked, setFirstCardLiked] = useState(false);
//   const [firstCardBookmarked, setFirstCardBookmarked] = useState(false);
//   const [firstCardLikeAnim, setFirstCardLikeAnim] = useState(false);

//   // State for second card
//   const [secondCardLikes, setSecondCardLikes] = useState(15);
//   const [secondCardBookmarks, setSecondCardBookmarks] = useState(3);
//   const [secondCardLiked, setSecondCardLiked] = useState(false);
//   const [secondCardBookmarked, setSecondCardBookmarked] = useState(false);
//   const [secondCardLikeAnim, setSecondCardLikeAnim] = useState(false);

//   // State for third card (new)
//   const [thirdCardLikes, setThirdCardLikes] = useState(37);
//   const [thirdCardBookmarks, setThirdCardBookmarks] = useState(12);
//   const [thirdCardLiked, setThirdCardLiked] = useState(false);
//   const [thirdCardBookmarked, setThirdCardBookmarked] = useState(false);
//   const [thirdCardLikeAnim, setThirdCardLikeAnim] = useState(false);

//   // Handlers for first card
//   const handleFirstCardLike = () => {
//     if (firstCardLiked) {
//       setFirstCardLikes(firstCardLikes - 1);
//     } else {
//       setFirstCardLikes(firstCardLikes + 1);
//       setFirstCardLikeAnim(true);
//       setTimeout(() => setFirstCardLikeAnim(false), 500);
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
//       setSecondCardLikeAnim(true);
//       setTimeout(() => setSecondCardLikeAnim(false), 500);
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

//   // Handlers for third card (new)
//   const handleThirdCardLike = () => {
//     if (thirdCardLiked) {
//       setThirdCardLikes(thirdCardLikes - 1);
//     } else {
//       setThirdCardLikes(thirdCardLikes + 1);
//       setThirdCardLikeAnim(true);
//       setTimeout(() => setThirdCardLikeAnim(false), 500);
//     }
//     setThirdCardLiked(!thirdCardLiked);
//   };

//   const handleThirdCardBookmark = () => {
//     if (thirdCardBookmarked) {
//       setThirdCardBookmarks(thirdCardBookmarks - 1);
//     } else {
//       setThirdCardBookmarks(thirdCardBookmarks + 1);
//     }
//     setThirdCardBookmarked(!thirdCardBookmarked);
//   };

//   const handleShareClick = () => {
//     console.log("Share clicked");
//     // Add your share functionality here
//   };

//   return (
//     // <div className= "search-bar"></div>
//     <div className="card-container">
//       {/* --- First Card (Original) --- */}
//       <div className="policies">
//         <div className="progress-bar">
//           {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
//             <div className="step" key={idx}>
//               <div className={`circle ${idx === 1 ? "active" : ""}`}></div>
//               <div className="label">{label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="image-section1"></div>
//         <div className="text-content1">
//           <p><strong>Bill AB 421 - Immigration Enforcement California Bill </strong> </p>
//         </div>
//         <div className="text-content">
//           <p><strong>Abstract: </strong> AB 421 seeks to amend the California Values Act by prohibiting state and local law enforcement agencies from cooperating with federal immigration authorities within a one-mile radius of sensitive locations ... </p>
          
//         </div>
//         <div className="card-footer">
//           <div className="icons">
//             <div className="count-container">
//               <button 
//                 onClick={handleFirstCardLike} 
//                 className={`emoji-button ${firstCardLiked ? 'active' : ''} ${firstCardLikeAnim ? 'animate' : ''}`}
//               >
//                 <span className="heart-icon">❤️</span> {firstCardLikes}
//               </button>
//               <button 
//                 onClick={handleFirstCardBookmark} 
//                 className={`emoji-button ${firstCardBookmarked ? 'active' : ''}`}
//               >
//                 <span className="bookmark-icon">🔖</span> {firstCardBookmarks}
//               </button>
//             </div>
//             <button onClick={handleShareClick} className="emoji-button">
//               📤
//             </button>
//           </div>
//           <button className="read-more">Read more</button>
//         </div>
//       </div>

//       {/* --- Second Card --- */}
//       <div className="policies">
//         <div className="progress-bar">
//           {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
//             <div className="step" key={idx}>
//               <div className={`circle ${idx === 1 ? "active" : ""}`}></div>
//               <div className="label">{label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="image-section2">

//         </div>
//         <div className="text-content1">
//           <p><strong> Bill AB 1095 – Data Centers: Waste Heat Energy </strong></p>
//         </div>
//         <div className="text-content">
//           <p><strong>Abstract:</strong>  AB 1095 proposes to classify waste heat energy generated by data centers as an eligible resource under California's Renewables Portfolio Standard Program. The bill aims to incentivize the capture and reuse of waste heat...</p>
//         </div>
//         <div className="card-footer">
//           <div className="icons">
//             <div className="count-container">
//               <button 
//                 onClick={handleSecondCardLike} 
//                 className={`emoji-button ${secondCardLiked ? 'active' : ''} ${secondCardLikeAnim ? 'animate' : ''}`}
//               >
//                 <span className="heart-icon">❤️</span> {secondCardLikes}
//               </button>
//               <button 
//                 onClick={handleSecondCardBookmark} 
//                 className={`emoji-button ${secondCardBookmarked ? 'active' : ''}`}
//               >
//                 <span className="bookmark-icon">🔖</span> {secondCardBookmarks}
//               </button>
//             </div>
//             <button onClick={handleShareClick} className="emoji-button">
//               📤
//             </button>
//           </div>
//           <button className="read-more">Read more</button>
//         </div>
//       </div>

//       {/* --- Third Card (New) --- */}
//       <div className="policies">
//         <div className="progress-bar">
//           {["Introduction", "Committee Review", "House Vote", "Senate Vote", "Governor's Review", "Signed or Vetoed"].map((label, idx) => (
//             <div className="step" key={idx}>
//               <div className={`circle ${idx === 1 ? "active" : ""}`}></div>
//               <div className="label">{label}</div>
//             </div>
//           ))}
//         </div>
//         <div className="image-section3"></div>
//         <div className="text-content1">
//           <p><strong>Bill AB 1482 – Adoption, Shelter Overcrowding, and Breeding
//           </strong></p>
//         </div>
//           <div className="text-content">
//             <p><strong>Abstract:</strong> AB 1482, known as Bowie's Law, aims to address issues related to animal adoption, shelter overcrowding, and breeding practices. The bill mandates that animal shelters provide publicly accessible listings of animals...</p>
//         </div>
//         <div className="card-footer">
//           <div className="icons">
//             <div className="count-container">
//               <button 
//                 onClick={handleThirdCardLike} 
//                 className={`emoji-button ${thirdCardLiked ? 'active' : ''} ${thirdCardLikeAnim ? 'animate' : ''}`}
//               >
//                 <span className="heart-icon">❤️</span> {thirdCardLikes}
//               </button>
//               <button 
//                 onClick={handleThirdCardBookmark} 
//                 className={`emoji-button ${thirdCardBookmarked ? 'active' : ''}`}
//               >
//                 <span className="bookmark-icon">🔖</span> {thirdCardBookmarks}
//               </button>
//             </div>
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

// // right side bar 

// <div class="sidebar-container">
//   <div class="sidebar-content">
//     <div class="sidebar-header">
//       <h2>Legislative Updates</h2>
//     </div>
//     <div class="sidebar-body">
//       <h3 class="sidebar-section-title">Upcoming Events</h3>
//       <div class="event-list">
//         {/* <!-- Events would be dynamically generated, here's an example --> */}
//         <div class="event-item">
//           <p class="event-title">Budget Hearing</p>
//           <p class="event-date">May 15, 2025</p>
//         </div>
//         <div class="event-item">
//           <p class="event-title">Environmental Policy Discussion</p>
//           <p class="event-date">May 20, 2025</p>
//         </div>
//       </div>
      
//       <div class="tags-section">
//         <h3 class="sidebar-section-title">Popular Topics</h3>
//         <div class="tags-container">
//           <span class="tag">Environment</span>
//           <span class="tag">Immigration</span>
//           <span class="tag">Technology</span>
//           <span class="tag">Animal Rights</span>
//           <span class="tag">Healthcare</span>
//         </div>
//       </div>
      
//       <button class="view-all-button">View All Updates</button>
//     </div>
//   </div>
// </div>


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

  // State for third card
  const [thirdCardLikes, setThirdCardLikes] = useState(37);
  const [thirdCardBookmarks, setThirdCardBookmarks] = useState(12);
  const [thirdCardLiked, setThirdCardLiked] = useState(false);
  const [thirdCardBookmarked, setThirdCardBookmarked] = useState(false);
  const [thirdCardLikeAnim, setThirdCardLikeAnim] = useState(false);

  // Sample data for the sidebar
  const upcomingEvents = [
    { title: "Budget Hearing", date: "May 15, 2025" },
    { title: "Environmental Policy Discussion", date: "May 20, 2025" },
    { title: "Healthcare Reform Meeting", date: "May 25, 2025" }
  ];

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

  // Handlers for third card
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
    <div className="page-layout" style={{ display: 'flex' }}>
      {/* Main content area */}
      <div className="main-content" style={{ width: '100%' }}>
      <div className="search-bar"></div>
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
            <div className="image-section1"></div>
            <div className="text-content1">
              <p><strong>Bill AB 421 - Immigration Enforcement California Bill </strong> </p>
            </div>
            <div className="text-content">
              <p><strong>Abstract: </strong> AB 421 seeks to amend the California Values Act by prohibiting state and local law enforcement agencies from cooperating with federal immigration authorities within a one-mile radius of sensitive locations ... </p>
              
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
                  <div className={`circle ${idx === 1 ? "active" : ""}`}></div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
            <div className="image-section2">

            </div>
            <div className="text-content1">
              <p><strong> Bill AB 1095 – Data Centers: Waste Heat Energy </strong></p>
            </div>
            <div className="text-content">
              <p><strong>Abstract:</strong>  AB 1095 proposes to classify waste heat energy generated by data centers as an eligible resource under California's Renewables Portfolio Standard Program. The bill aims to incentivize the capture and reuse of waste heat...</p>
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
                  <div className={`circle ${idx === 1 ? "active" : ""}`}></div>
                  <div className="label">{label}</div>
                </div>
              ))}
            </div>
            <div className="image-section3"></div>
            <div className="text-content1">
              <p><strong>Bill AB 1482 – Adoption, Shelter Overcrowding, and Breeding
              </strong></p>
            </div>
              <div className="text-content">
                <p><strong>Abstract:</strong> AB 1482, known as Bowie's Law, aims to address issues related to animal adoption, shelter overcrowding, and breeding practices. The bill mandates that animal shelters provide publicly accessible listings of animals...</p>
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
      </div>
      
      {/* Right sidebar */}
  <div className="sidebar-content">
    {/* <!-- Suggested Following Section --> */}
    <div className="sidebar-section">
      <div className="section-header">
        <h3>Suggested Following</h3>
        <span className="more-options">...</span>
      </div>
      <div className="section-body">
        {/* <!-- Politician Profile Item --> */}
        <div className="profile-item">
          <div className="profile-avatar1"></div>
          <div className="profile-info">
            <p className="profile-name">Gavin Newsom (D)</p>
            <p className="profile-title">Governor of California</p>
          </div>
        </div>
        
        {/* <!-- Politician Profile Item --> */}
        <div className="profile-item">
          <div className="profile-avatar2"></div>
          <div className="profile-info">
            <p className="profile-name">Alex Padilla (D)</p>
            <p className="profile-title">U.S. Senator, California</p>
          </div>
        </div>
        
        {/* <!-- Politician Profile Item --> */}
        <div className="profile-item">
          <div className="profile-avatar3"></div>
          <div className="profile-info">
            <p className="profile-name">Adam Schiff (D)</p>
            <p className="profile-title">U.S. Senator, California</p>
          </div>
        </div>
        
        {/* <!-- Judge Profile Item --> */}
        <div className="profile-item">
          <div className="profile-avatar4"></div>
          <div className="profile-info">
            <p className="profile-name">Mike Levin (D)</p>
            <p className="profile-title">U.S. Representative, California</p>
          </div>
        </div>
        
        <button className="see-all-button">SEE ALL</button>
      </div>
    </div>
    
    {/* <!-- Events Section --> */}
    <div className="sidebar-section">
      <div className="section-header">
        <h3>Events</h3>
        <span className="more-options">...</span>
      </div>
      <div className="section-body">
        {/* <!-- Event Item --> */}
        <div className="event-item">
          <div className="event-icon election-icon">
            <i className="calendar-icon"></i>
          </div>
          <div className="event-info">
            <p className="event-title"> <strong> 5/2/25 </strong> - LA City Council Meeting</p>
          </div>
        </div>
        
        {/* <!-- Event Item --> */}
        <div className="event-item">
          <div className="event-icon meeting-icon">
            <i className="building-icon"></i>
          </div>
          <div className="event-info">
            <p className="event-title"> <strong> 4/28/25 </strong> - Congressman Sherman Town Hall Meeting </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* <!-- Suggested Bills Section --> */}
    <div className="sidebar-section">
      <div className="section-header">
        <h3>Suggested Bills</h3>
        <span className="more-options">...</span>
      </div>
      <div className="section-body bills-section">
        {/* <!-- This section is empty in the image but structure is in place --> */}
        <div className="bill-item"></div> 
        <p className="bill-title"> <strong> 5/2/25 </strong> - LA City Council Meeting</p>
      </div>
    </div>
  </div>
</div>
  ); 
}

export default Policies;


/*

{item.key === 'notification' && showNotifications && (
              <div className="notification-dropdown-container">
                <NotificationsDropdown
                  darkTheme={darkTheme}
                  onClose={() => onToggleNotifications(false)}
                />
              </div>
            )}

*/