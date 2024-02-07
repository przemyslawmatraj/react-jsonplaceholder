import {
  TeamOutlined,
  FilePptOutlined,
  PictureOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/">Dashboard</Link>, "dashboard", <HomeOutlined />),
  getItem(<Link to="/users">Users</Link>, "users", <TeamOutlined />),
  getItem(<Link to="/posts">Posts</Link>, "posts", <FilePptOutlined />),
  getItem(<Link to="/albums">Albums</Link>, "albums", <PictureOutlined />),
];

export default function useMenuItems() {
  const location = useLocation();

  const getSelectedKey = () => {
    const path = location.pathname;
    const selectedKey = items.find((item) =>
      path.includes(item?.key as string)
    )?.key;
    return selectedKey ? ([selectedKey] as string[]) : ["dashboard"];
  };

  return {
    items,
    getSelectedKey,
  };
}
