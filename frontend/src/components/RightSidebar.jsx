import React from 'react';
import '../policies-KS/Policies.css';

const Sidebar = ({ handleSeeAllClick }) => {
  return (
    <div className="sidebar-content">
      {/* Suggested Following Section */}
      <div className="sidebar-section">
        <div className="section-header">
          <h3>Suggested Following</h3>
          <span className="more-options">...</span>
        </div>
        <div className="section-body">
          {/* Politician Profile Items */}
          <div className="profile-item">
            <div className="profile-avatar1"></div>
            <div className="profile-info">
              <p className="profile-name">Gavin Newsom (D)</p>
              <p className="profile-title">Governor of California</p>
            </div>
          </div>
          <div className="profile-item">
            <div className="profile-avatar2"></div>
            <div className="profile-info">
              <p className="profile-name">Alex Padilla (D)</p>
              <p className="profile-title">U.S. Senator, California</p>
            </div>
          </div>
          <div className="profile-item">
            <div className="profile-avatar3"></div>
            <div className="profile-info">
              <p className="profile-name">Adam Schiff (D)</p>
              <p className="profile-title">U.S. Senator, California</p>
            </div>
          </div>
          <div className="profile-item">
            <div className="profile-avatar4"></div>
            <div className="profile-info">
              <p className="profile-name">Mike Levin (D)</p>
              <p className="profile-title">U.S. Representative, California</p>
            </div>
          </div>
          <button className="see-all-button" onClick={handleSeeAllClick}>
            See All
          </button>
        </div>
      </div>

      {/* Events Section */}
      <div className="sidebar-section">
        <div className="section-header">
          <h3>Events</h3>
          <span className="more-options">...</span>
        </div>
        <div className="section-body">
          <div className="event-item">
            <div className="event-icon election-icon">
              <i className="calendar-icon"></i>
            </div>
            <div className="event-info">
              <p className="event-title">
                <strong>5/2/25</strong> - LA City Council Meeting
              </p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-icon meeting-icon">
              <i className="building-icon"></i>
            </div>
            <div className="event-info">
              <p className="event-title">
                <strong>4/28/25</strong> - Congressman Sherman Town Hall Meeting
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Bills Section */}
      <div className="sidebar-section">
        <div className="section-header">
          <h3>Suggested Bills</h3>
          <span className="more-options">...</span>
        </div>
        <div className="section-body bills-section">
          {/* Add content for suggested bills here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;