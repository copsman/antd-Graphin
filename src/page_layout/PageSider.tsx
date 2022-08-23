import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../graph_functions/SearchBar"

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
        label
    }
}

const items: any = [
    getItem("Option 1", "1", <PieChartOutlined />),
    getItem("Option 2", "2", <DesktopOutlined />),
    getItem("User", "sub1", <UserOutlined />, [
        getItem("Tom", "Tom"),
        getItem("Bill", "4"),
        getItem("Alex", "5")
    ]),
    getItem("Team", "sub2", <TeamOutlined />, [
        getItem("Team 1", "6"),
        getItem("Team 2", "8")
    ]),
    getItem("Files", "9", <FileOutlined />)
];

const { Sider } = Layout;

const PageSider: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [search, setSearch]: any = useState(null)
    const handleClick = (e: { key: unknown }) => {
        if (e.key == "Tom") {
            setSearch("hii")
        }
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <SearchBar/>
            <Menu onClick={handleClick}
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
            />
        </Sider>
    );
};

export default PageSider;
