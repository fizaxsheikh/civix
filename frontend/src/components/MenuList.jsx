import { Menu } from 'antd';
// import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';

const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={ darkTheme ? 'dark' : 'light' } mode="inline" className="menu-bar">
        <Menu.Item key="home" icon={<Icon icon="material-symbols:home-rounded" width="30" height="30" />}
        >
            Home
        </Menu.Item>
        <Menu.Item key="events" icon={<Icon icon="mingcute:calendar-fill" width="30" height="30" />}
        >
            Events
        </Menu.Item>
        <Menu.Item key="notification" icon={<Icon icon="mingcute:notification-fill" width="30" height="30" />}
        >
            Notification
        </Menu.Item>
        <Menu.Item key="bookmarks" icon={<Icon icon="mingcute:bookmark-fill" width="28" height="28" />}
        >
            Bookmarks
        </Menu.Item>
        <Menu.Item key="profile" icon={<Icon icon="fluent:person-24-filled" width="30" height="30" />}
        >
            Profile
        </Menu.Item>
        <Menu.Item key="settings" icon={<Icon icon="weui:setting-filled" width="30" height="30"/>}
        >
            Settings
        </Menu.Item>
    </Menu>
  );
};

export default MenuList
