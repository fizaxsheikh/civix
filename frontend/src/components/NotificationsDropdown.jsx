import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const NotificationsDropdown = ({ darkTheme, onClose }) => {
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Sample notification data - in a real app this would come from an API
  const notifications = {
    followRequests: [
      { id: 1, username: 'softie_stella', time: '1w', type: 'follow_request', avatar: '/user1.jpg' },
      { id: 2, username: 'carpedm20', time: '1w', type: 'follow_request', avatar: '/user2.jpg' },
      { id: 3, username: 'wuhoo.adventures', time: '1w', type: 'follow_request', avatar: '/user3.jpg' }
    ],
    thisMonth: [
      { id: 4, username: 'username_1', username2: 'username_2', time: '1w', type: 'liked_story', avatar: '/user4.jpg', content: '/story1.jpg' },
      { id: 5, username: 'username_1', username2: 'username_2', username3: 'username_3', time: '1w', type: 'multiple_liked_story', avatar: '/user5.jpg', content: '/story2.jpg' },
      { id: 6, username: 'username_1', time: '1w', type: 'started_following', avatar: '/user6.jpg' },
      { id: 7, username: 'username_1', time: '1w', type: 'liked_story', avatar: '/user7.jpg', content: '/story3.jpg' },
      { id: 8, username: 'username_1', username2: 'username_2', username3: 'username_3', time: '1w', type: 'multiple_liked_story', avatar: '/user8.jpg', content: '/story4.jpg' },
      { id: 9, username: 'username_1', time: '2w', type: 'started_following', avatar: '/user7.jpg' },
      { id: 10, username: 'username_1', username2: 'username_2', time: '2w', type: 'others_liked_story', avatar: '/user10.jpg', content: '/story5.jpg' },
      { id: 11, username: 'username_1', username2: 'username_2', time: '2w', type: 'others_liked_story', avatar: '/user11.jpg', content: '/story6.jpg' }
    ]
  };

  const renderNotificationContent = (notification) => {
    switch (notification.type) {
      case 'follow_request':
        return (
          <div className="notification-item follow-request">
            <img src={notification.avatar} alt={notification.username} className="avatar" />
            <div className="notification-content">
              <p>
                <strong>{notification.username}</strong> requested to follow you. <span className="time">{notification.time}</span>
              </p>
            </div>
            <div className="notification-actions">
              <button className="confirm-btn">Confirm</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        );
      case 'liked_story':
        return (
          <div className="notification-item">
            <img src={notification.avatar} alt={notification.username} className="avatar" />
            <div className="notification-content">
              <p>
                <strong>{notification.username}</strong> liked your story. <span className="time">{notification.time}</span>
              </p>
            </div>
            {notification.content && <img src={notification.content} alt="Story content" className="content-preview" />}
          </div>
        );
      case 'multiple_liked_story':
        return (
          <div className="notification-item">
            <img src={notification.avatar} alt={notification.username} className="avatar" />
            <div className="notification-content">
              <p>
                <strong>{notification.username}</strong>, <strong>{notification.username2}</strong>
                {notification.username3 && <> and <strong>{notification.username3}</strong></>} liked your story. <span className="time">{notification.time}</span>
              </p>
            </div>
            {notification.content && <img src={notification.content} alt="Story content" className="content-preview" />}
          </div>
        );
      case 'others_liked_story':
        return (
          <div className="notification-item">
            <img src={notification.avatar} alt={notification.username} className="avatar" />
            <div className="notification-content">
              <p>
                <strong>{notification.username}</strong>, <strong>{notification.username2}</strong> and others liked your story. <span className="time">{notification.time}</span>
              </p>
            </div>
            {notification.content && <img src={notification.content} alt="Story content" className="content-preview" />}
          </div>
        );
      case 'started_following':
        return (
          <div className="notification-item">
            <img src={notification.avatar} alt={notification.username} className="avatar" />
            <div className="notification-content">
              <p>
                <strong>{notification.username}</strong> started following you. <span className="time">{notification.time}</span>
              </p>
            </div>
            <button className="following-btn">Following</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className={`notifications-dropdown ${darkTheme ? 'dark-theme' : 'light-theme'}`} 
      ref={notificationRef}
    >
      <div className="dropdown-header">
  <h2>Notifications</h2>
  <button className="close-button" onClick={onClose}>
    <Icon icon="mdi:close" width="24" height="24" />
  </button>
</div>
      
      <div className="follow-requests-section">
        <div className="section-header">
          <h3>Follow requests</h3>
          <div className="follow-request-info">
            <span>softie_stella + 10 others</span>
            <Icon icon="material-symbols:chevron-right-rounded" />
          </div>
        </div>
      </div>

      <div className="this-month-section">
        <div className="section-header">
          <h3>This month</h3>
        </div>
        <div className="notification-list">
          {notifications.thisMonth.map(notification => (
            <div key={notification.id}>
              {renderNotificationContent(notification)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsDropdown;